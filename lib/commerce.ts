/**
 * Commerce & Pricing Engine
 * Handles pricing calculations with OPTIK staking integration
 */

import { NFTTier } from './nft-gating';

export interface PricingBreakdown {
  subtotal: number;
  nftDiscount: number;
  platformFee: number;
  platformFeePercentage: number;
  total: number;
  savings: number;
  tier: NFTTier;
}

export interface StakingTier {
  minStake: number;
  feePercentage: number;
  name: string;
}

/**
 * OPTIK staking tiers for fee reduction
 */
export const STAKING_TIERS: StakingTier[] = [
  { minStake: 0, feePercentage: 2.5, name: 'Standard' },
  { minStake: 10_000, feePercentage: 2.0, name: 'Bronze Staker' },
  { minStake: 100_000, feePercentage: 1.5, name: 'Silver Staker' },
  { minStake: 1_000_000, feePercentage: 0.75, name: 'Gold Staker' },
];

/**
 * Get platform fee percentage based on OPTIK staked
 */
export function getPlatformFeePercentage(optikStaked: number): {
  percentage: number;
  tierName: string;
  nextTier?: StakingTier;
  tokensToNextTier?: number;
} {
  // Find the highest tier the user qualifies for
  let currentTier = STAKING_TIERS[0];
  let nextTier: StakingTier | undefined;

  for (let i = 0; i < STAKING_TIERS.length; i++) {
    if (optikStaked >= STAKING_TIERS[i].minStake) {
      currentTier = STAKING_TIERS[i];
      nextTier = STAKING_TIERS[i + 1];
    } else {
      break;
    }
  }

  const tokensToNextTier = nextTier ? nextTier.minStake - optikStaked : undefined;

  return {
    percentage: currentTier.feePercentage,
    tierName: currentTier.name,
    nextTier,
    tokensToNextTier,
  };
}

/**
 * Calculate complete pricing breakdown
 */
export function calculatePricing(
  subtotal: number,
  nftDiscount: number,
  optikStaked: number
): PricingBreakdown {
  // Apply NFT discount
  const discountAmount = (subtotal * nftDiscount) / 100;
  const afterDiscount = subtotal - discountAmount;

  // Get platform fee based on OPTIK staking
  const feeInfo = getPlatformFeePercentage(optikStaked);
  const platformFee = (afterDiscount * feeInfo.percentage) / 100;

  // Calculate total
  const total = afterDiscount + platformFee;

  // Calculate savings compared to standard 2.5% fee
  const standardFee = (afterDiscount * 2.5) / 100;
  const feeSavings = standardFee - platformFee;

  return {
    subtotal,
    nftDiscount: discountAmount,
    platformFee,
    platformFeePercentage: feeInfo.percentage,
    total,
    savings: discountAmount + feeSavings,
    tier: 'NONE', // This should be passed in from nft-gating
  };
}

/**
 * Calculate monthly fee savings based on revenue
 */
export function calculateMonthlySavings(
  monthlyRevenue: number,
  optikStaked: number
): {
  standardFee: number;
  discountedFee: number;
  monthlySavings: number;
  annualSavings: number;
  feePercentage: number;
} {
  const feeInfo = getPlatformFeePercentage(optikStaked);

  const standardFee = (monthlyRevenue * 2.5) / 100;
  const discountedFee = (monthlyRevenue * feeInfo.percentage) / 100;
  const monthlySavings = standardFee - discountedFee;

  return {
    standardFee,
    discountedFee,
    monthlySavings,
    annualSavings: monthlySavings * 12,
    feePercentage: feeInfo.percentage,
  };
}

/**
 * Compare OPTIK platform vs. traditional platforms
 */
export function compareWithTraditional(monthlyRevenue: number, optikStaked: number): {
  optikPlatform: {
    monthlyFee: number;
    transactionFee: number;
    total: number;
  };
  shopify: {
    monthlyFee: number;
    transactionFee: number;
    total: number;
  };
  woocommerce: {
    monthlyFee: number;
    transactionFee: number;
    total: number;
  };
  savings: {
    vsShopify: number;
    vsWooCommerce: number;
  };
} {
  const feeInfo = getPlatformFeePercentage(optikStaked);

  // OPTIK Platform (no monthly fee, variable transaction fee based on staking)
  const optikFee = (monthlyRevenue * feeInfo.percentage) / 100;

  // Shopify ($29-299/month + 2.9% + 30¢ per transaction)
  // Assuming 100 transactions/month for calculation
  const shopifyMonthly = 79; // Mid-tier plan
  const shopifyTransaction = (monthlyRevenue * 2.9) / 100 + 100 * 0.3;
  const shopifyTotal = shopifyMonthly + shopifyTransaction;

  // WooCommerce (Free plugin, but hosting $20-50/month + 2.9% + 30¢ with payment gateway)
  const wooCommerceMonthly = 35; // Average hosting
  const wooCommerceTransaction = (monthlyRevenue * 2.9) / 100 + 100 * 0.3;
  const wooCommerceTotal = wooCommerceMonthly + wooCommerceTransaction;

  return {
    optikPlatform: {
      monthlyFee: 0,
      transactionFee: optikFee,
      total: optikFee,
    },
    shopify: {
      monthlyFee: shopifyMonthly,
      transactionFee: shopifyTransaction,
      total: shopifyTotal,
    },
    woocommerce: {
      monthlyFee: wooCommerceMonthly,
      transactionFee: wooCommerceTransaction,
      total: wooCommerceTotal,
    },
    savings: {
      vsShopify: shopifyTotal - optikFee,
      vsWooCommerce: wooCommerceTotal - optikFee,
    },
  };
}

/**
 * Calculate ROI for OPTIK staking
 */
export function calculateStakingROI(
  monthlyRevenue: number,
  currentStaked: number,
  targetStaked: number
): {
  currentFee: number;
  targetFee: number;
  monthlySavings: number;
  annualSavings: number;
  breakEvenMonths: number;
  roi: number; // Percentage
} {
  const currentFeeInfo = getPlatformFeePercentage(currentStaked);
  const targetFeeInfo = getPlatformFeePercentage(targetStaked);

  const currentFee = (monthlyRevenue * currentFeeInfo.percentage) / 100;
  const targetFee = (monthlyRevenue * targetFeeInfo.percentage) / 100;
  const monthlySavings = currentFee - targetFee;
  const annualSavings = monthlySavings * 12;

  // Calculate how many months to break even on the additional stake
  // This assumes you need to purchase the additional OPTIK tokens
  const additionalStake = targetStaked - currentStaked;
  const tokensNeeded = additionalStake;

  // Assuming OPTIK token price (this should be dynamic in production)
  const optikPrice = 0.01; // $0.01 per OPTIK
  const investmentCost = tokensNeeded * optikPrice;

  const breakEvenMonths = monthlySavings > 0 ? investmentCost / monthlySavings : Infinity;
  const roi = monthlySavings > 0 ? (annualSavings / investmentCost) * 100 : 0;

  return {
    currentFee,
    targetFee,
    monthlySavings,
    annualSavings,
    breakEvenMonths,
    roi,
  };
}

/**
 * Get fee reduction benefits summary
 */
export function getFeeBenefitsSummary(monthlyRevenue: number): {
  tier: string;
  stake: number;
  feePercentage: number;
  monthlyFee: number;
  annualFee: number;
  savingsVsStandard: number;
}[] {
  return STAKING_TIERS.map((tier) => {
    const monthlyFee = (monthlyRevenue * tier.feePercentage) / 100;
    const standardFee = (monthlyRevenue * 2.5) / 100;
    const savings = standardFee - monthlyFee;

    return {
      tier: tier.name,
      stake: tier.minStake,
      feePercentage: tier.feePercentage,
      monthlyFee,
      annualFee: monthlyFee * 12,
      savingsVsStandard: savings,
    };
  });
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format token amount for display
 */
export function formatTokenAmount(amount: number): string {
  if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(2)}M`;
  } else if (amount >= 1_000) {
    return `${(amount / 1_000).toFixed(1)}K`;
  }
  return amount.toLocaleString();
}

/**
 * Calculate discount tiers table (for UI)
 */
export function getDiscountTiersTable(): {
  nfts: string;
  tier: string;
  discount: string;
  benefits: string;
}[] {
  return [
    {
      nfts: '1',
      tier: 'Bronze',
      discount: '5%',
      benefits: 'Basic member access',
    },
    {
      nfts: '3+',
      tier: 'Silver',
      discount: '10%',
      benefits: 'Premium + early access',
    },
    {
      nfts: '5+',
      tier: 'Gold',
      discount: '15%',
      benefits: 'VIP + priority support',
    },
    {
      nfts: '10+',
      tier: 'Platinum',
      discount: '25%',
      benefits: 'Lifetime benefits',
    },
  ];
}
