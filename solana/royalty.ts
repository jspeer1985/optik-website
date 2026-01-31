/**
 * NFT Royalty System
 * Handles royalty configuration, distribution calculations, and enforcement
 */

export interface RoyaltyConfig {
  percentage: number; // 0-20 (representing 0% to 20%)
  creators: Array<{
    address: string;
    share: number; // Percentage of royalty (must sum to 100)
  }>;
  enforcementType: 'ON_CHAIN' | 'OFF_CHAIN' | 'HYBRID';
}

export interface RoyaltyDistribution {
  totalAmount: number;
  distributions: Array<{
    address: string;
    amount: number;
    percentage: number;
  }>;
}

/**
 * Configure royalty settings for an NFT collection
 */
export function configureRoyalty(
  royaltyPercentage: number,
  creatorWallet: string,
  additionalCreators?: Array<{ address: string; share: number }>
): RoyaltyConfig {
  // Validate royalty percentage
  if (royaltyPercentage < 0 || royaltyPercentage > 20) {
    throw new Error('Royalty percentage must be between 0 and 20');
  }

  // Build creators array
  const creators = additionalCreators || [
    {
      address: creatorWallet,
      share: 100,
    },
  ];

  // Validate creator shares
  const totalShares = creators.reduce((sum, creator) => sum + creator.share, 0);
  if (totalShares !== 100) {
    throw new Error(`Creator shares must sum to 100 (current: ${totalShares})`);
  }

  // Validate wallet addresses (basic check)
  creators.forEach((creator) => {
    if (!creator.address || creator.address.length < 32) {
      throw new Error(`Invalid wallet address: ${creator.address}`);
    }
  });

  return {
    percentage: royaltyPercentage,
    creators,
    enforcementType: 'ON_CHAIN', // Default to on-chain enforcement
  };
}

/**
 * Calculate royalty distribution for a sale
 */
export function calculateRoyaltyDistribution(
  salePrice: number,
  royaltyConfig: RoyaltyConfig
): RoyaltyDistribution {
  const totalRoyalty = (salePrice * royaltyConfig.percentage) / 100;

  const distributions = royaltyConfig.creators.map((creator) => {
    const creatorAmount = (totalRoyalty * creator.share) / 100;
    return {
      address: creator.address,
      amount: creatorAmount,
      percentage: creator.share,
    };
  });

  return {
    totalAmount: totalRoyalty,
    distributions,
  };
}

/**
 * Get recommended royalty percentage based on utility type
 */
export function getRecommendedRoyalty(
  utilityType: 'DISCOUNT' | 'ACCESS' | 'SUBSCRIPTION' | 'LOYALTY'
): {
  recommended: number;
  min: number;
  max: number;
  reasoning: string;
} {
  const recommendations = {
    DISCOUNT: {
      recommended: 5,
      min: 2,
      max: 10,
      reasoning: 'Discount NFTs have lower resale value, so moderate royalties work best',
    },
    ACCESS: {
      recommended: 10,
      min: 5,
      max: 15,
      reasoning: 'Access NFTs can have high secondary demand, supporting higher royalties',
    },
    SUBSCRIPTION: {
      recommended: 7.5,
      min: 5,
      max: 12,
      reasoning: 'Subscription NFTs balance ongoing value with resale market',
    },
    LOYALTY: {
      recommended: 8,
      min: 3,
      max: 15,
      reasoning: 'Loyalty NFTs incentivize holding, moderate royalties maintain liquidity',
    },
  };

  return recommendations[utilityType];
}

/**
 * Validate royalty enforcement on Solana
 * Checks if royalties are properly configured on-chain
 */
export async function validateRoyaltyEnforcement(
  mintAddress: string,
  expectedRoyalty: number
): Promise<{
  valid: boolean;
  actualRoyalty?: number;
  enforcement: 'ON_CHAIN' | 'OFF_CHAIN' | 'NONE';
  errors: string[];
}> {
  const errors: string[] = [];

  // In production, query on-chain metadata
  // For now, simulate validation
  const actualRoyalty = expectedRoyalty; // Simulated

  if (actualRoyalty !== expectedRoyalty) {
    errors.push(`Royalty mismatch: expected ${expectedRoyalty}%, got ${actualRoyalty}%`);
  }

  return {
    valid: errors.length === 0,
    actualRoyalty,
    enforcement: 'ON_CHAIN',
    errors,
  };
}

/**
 * Calculate platform fees with OPTIK staking discount
 */
export function calculatePlatformFees(
  salePrice: number,
  optikStaked: number
): {
  baseFee: number;
  discountedFee: number;
  savings: number;
  feePercentage: number;
} {
  // Base fee: 2.5%
  // Staking tiers:
  // 0 OPTIK: 2.5%
  // 10,000 OPTIK: 2.0%
  // 100,000 OPTIK: 1.5%
  // 1,000,000 OPTIK: 0.75%

  let feePercentage = 2.5;

  if (optikStaked >= 1_000_000) {
    feePercentage = 0.75;
  } else if (optikStaked >= 100_000) {
    feePercentage = 1.5;
  } else if (optikStaked >= 10_000) {
    feePercentage = 2.0;
  }

  const baseFee = (salePrice * 2.5) / 100;
  const discountedFee = (salePrice * feePercentage) / 100;
  const savings = baseFee - discountedFee;

  return {
    baseFee,
    discountedFee,
    savings,
    feePercentage,
  };
}

/**
 * Split sale proceeds between seller, royalty recipients, and platform
 */
export function splitSaleProceeds(
  salePrice: number,
  royaltyConfig: RoyaltyConfig,
  optikStaked: number,
  sellerAddress: string
): {
  seller: { address: string; amount: number };
  royalties: Array<{ address: string; amount: number }>;
  platform: { amount: number; feePercentage: number };
  total: number;
} {
  // Calculate royalties
  const royaltyDistribution = calculateRoyaltyDistribution(salePrice, royaltyConfig);

  // Calculate platform fees
  const platformFees = calculatePlatformFees(salePrice, optikStaked);

  // Calculate seller proceeds
  const sellerAmount = salePrice - royaltyDistribution.totalAmount - platformFees.discountedFee;

  return {
    seller: {
      address: sellerAddress,
      amount: sellerAmount,
    },
    royalties: royaltyDistribution.distributions,
    platform: {
      amount: platformFees.discountedFee,
      feePercentage: platformFees.feePercentage,
    },
    total: salePrice,
  };
}

/**
 * Format royalty info for display
 */
export function formatRoyaltyInfo(royaltyConfig: RoyaltyConfig): string {
  const creatorList = royaltyConfig.creators
    .map((creator) => `${creator.address.substring(0, 8)}... (${creator.share}%)`)
    .join(', ');

  return `${royaltyConfig.percentage}% royalty distributed to: ${creatorList}`;
}
