/**
 * NFT Gating & Access Control System
 * Provides tier-based benefits and access restrictions
 */

export type NFTTier = 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM' | 'NONE';

export interface TierBenefits {
  tier: NFTTier;
  minNFTs: number;
  discount: number;
  benefits: string[];
  color: string;
  level: number;
}

export interface AccessResult {
  hasAccess: boolean;
  tier: NFTTier;
  message: string;
  discount?: number;
}

/**
 * Tier configuration with benefits
 */
export const TIER_CONFIG: Record<NFTTier, TierBenefits> = {
  NONE: {
    tier: 'NONE',
    minNFTs: 0,
    discount: 0,
    benefits: ['Basic browsing'],
    color: '#6B7280',
    level: 0,
  },
  BRONZE: {
    tier: 'BRONZE',
    minNFTs: 1,
    discount: 5,
    benefits: ['Basic member access', '5% discount', 'Community updates'],
    color: '#CD7F32',
    level: 1,
  },
  SILVER: {
    tier: 'SILVER',
    minNFTs: 3,
    discount: 10,
    benefits: [
      'Premium features',
      '10% discount',
      'Early access to drops',
      'Priority support',
    ],
    color: '#C0C0C0',
    level: 2,
  },
  GOLD: {
    tier: 'GOLD',
    minNFTs: 5,
    discount: 15,
    benefits: [
      'VIP features',
      '15% discount',
      'Exclusive events',
      'Priority support',
      'Governance voting',
    ],
    color: '#FFD700',
    level: 3,
  },
  PLATINUM: {
    tier: 'PLATINUM',
    minNFTs: 10,
    discount: 25,
    benefits: [
      'Lifetime benefits',
      '25% discount',
      'Private events',
      'Dedicated support',
      'Full governance rights',
      'Revenue sharing',
    ],
    color: '#E5E4E2',
    level: 4,
  },
};

/**
 * Determine user's tier based on NFT count
 */
export function determineTier(nftCount: number): NFTTier {
  if (nftCount >= 10) return 'PLATINUM';
  if (nftCount >= 5) return 'GOLD';
  if (nftCount >= 3) return 'SILVER';
  if (nftCount >= 1) return 'BRONZE';
  return 'NONE';
}

/**
 * Get tier benefits information
 */
export function getTierBenefits(tier: NFTTier): TierBenefits {
  return TIER_CONFIG[tier];
}

/**
 * Check if user has access based on NFT ownership
 */
export function checkAccess(
  nftCount: number,
  requiredTier: NFTTier = 'BRONZE'
): AccessResult {
  const userTier = determineTier(nftCount);
  const userTierConfig = TIER_CONFIG[userTier];
  const requiredTierConfig = TIER_CONFIG[requiredTier];

  const hasAccess = userTierConfig.level >= requiredTierConfig.level;

  return {
    hasAccess,
    tier: userTier,
    message: hasAccess
      ? `Access granted: ${userTier} tier member`
      : `Access denied: ${requiredTier} tier or higher required`,
    discount: userTierConfig.discount,
  };
}

/**
 * Calculate discount based on tier
 */
export function calculateDiscount(
  originalPrice: number,
  nftCount: number
): {
  originalPrice: number;
  discount: number;
  discountPercentage: number;
  finalPrice: number;
  tier: NFTTier;
} {
  const tier = determineTier(nftCount);
  const tierConfig = TIER_CONFIG[tier];
  const discount = (originalPrice * tierConfig.discount) / 100;
  const finalPrice = originalPrice - discount;

  return {
    originalPrice,
    discount,
    discountPercentage: tierConfig.discount,
    finalPrice,
    tier,
  };
}

/**
 * Get access level for specific features
 */
export function getFeatureAccess(
  nftCount: number,
  feature: 'EARLY_ACCESS' | 'EXCLUSIVE_EVENTS' | 'GOVERNANCE' | 'REVENUE_SHARE'
): {
  hasAccess: boolean;
  requiredTier: NFTTier;
  userTier: NFTTier;
} {
  const userTier = determineTier(nftCount);
  const userLevel = TIER_CONFIG[userTier].level;

  const featureRequirements: Record<string, { tier: NFTTier; level: number }> = {
    EARLY_ACCESS: { tier: 'SILVER', level: 2 },
    EXCLUSIVE_EVENTS: { tier: 'GOLD', level: 3 },
    GOVERNANCE: { tier: 'GOLD', level: 3 },
    REVENUE_SHARE: { tier: 'PLATINUM', level: 4 },
  };

  const requirement = featureRequirements[feature];

  return {
    hasAccess: userLevel >= requirement.level,
    requiredTier: requirement.tier,
    userTier,
  };
}

/**
 * Get all tiers information (for UI display)
 */
export function getAllTiers(): TierBenefits[] {
  return [
    TIER_CONFIG.BRONZE,
    TIER_CONFIG.SILVER,
    TIER_CONFIG.GOLD,
    TIER_CONFIG.PLATINUM,
  ];
}

/**
 * Calculate next tier requirements
 */
export function getNextTierRequirements(currentNFTCount: number): {
  currentTier: NFTTier;
  nextTier: NFTTier | null;
  nftsNeeded: number;
  additionalDiscount: number;
} | null {
  const currentTier = determineTier(currentNFTCount);

  const tierProgression: NFTTier[] = ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM'];
  const currentIndex = tierProgression.indexOf(currentTier);

  if (currentIndex === -1 || currentIndex === tierProgression.length - 1) {
    return null; // Already at max tier
  }

  const nextTier = tierProgression[currentIndex + 1];
  const nextTierConfig = TIER_CONFIG[nextTier];
  const currentTierConfig = TIER_CONFIG[currentTier];

  return {
    currentTier,
    nextTier,
    nftsNeeded: nextTierConfig.minNFTs - currentNFTCount,
    additionalDiscount: nextTierConfig.discount - currentTierConfig.discount,
  };
}

/**
 * Verify NFT authenticity (for production integration)
 */
export async function verifyNFTAuthenticity(
  walletAddress: string,
  collectionMint: string
): Promise<{
  valid: boolean;
  count: number;
  tier: NFTTier;
  nfts: string[]; // NFT mint addresses
}> {
  // In production, this would query Solana blockchain
  // For now, return simulated data
  const simulatedCount = Math.floor(Math.random() * 12);
  const tier = determineTier(simulatedCount);

  return {
    valid: true,
    count: simulatedCount,
    tier,
    nfts: Array(simulatedCount)
      .fill(0)
      .map((_, i) => `NFT_MINT_${i + 1}`),
  };
}

/**
 * Generate access token for gated content
 */
export function generateAccessToken(
  walletAddress: string,
  tier: NFTTier,
  expiresIn: number = 3600000 // 1 hour default
): string {
  const payload = {
    wallet: walletAddress,
    tier,
    exp: Date.now() + expiresIn,
  };

  // In production, use proper JWT signing
  return Buffer.from(JSON.stringify(payload)).toString('base64');
}

/**
 * Verify access token
 */
export function verifyAccessToken(token: string): {
  valid: boolean;
  wallet?: string;
  tier?: NFTTier;
  expired?: boolean;
} {
  try {
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString());

    if (decoded.exp < Date.now()) {
      return { valid: false, expired: true };
    }

    return {
      valid: true,
      wallet: decoded.wallet,
      tier: decoded.tier,
      expired: false,
    };
  } catch {
    return { valid: false };
  }
}
