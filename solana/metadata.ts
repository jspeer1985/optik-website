/**
 * NFT Metadata Management
 * Handles metadata generation, IPFS upload, and tier-based attributes
 */

export interface NFTMetadata {
  name: string;
  symbol: string;
  description: string;
  image?: string;
  external_url?: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
  properties: {
    files: Array<{
      uri: string;
      type: string;
    }>;
    category: string;
    creators: Array<{
      address: string;
      share: number;
    }>;
  };
}

export interface MetadataConfig {
  name: string;
  symbol: string;
  description: string;
  utilityType: 'DISCOUNT' | 'ACCESS' | 'SUBSCRIPTION' | 'LOYALTY';
  supply: number;
  tier?: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM';
}

/**
 * Tier-based benefit configurations
 */
const TIER_BENEFITS = {
  BRONZE: {
    discount: 5,
    color: '#CD7F32',
    level: 1,
    benefits: ['Basic member access', '5% discount', 'Community updates'],
  },
  SILVER: {
    discount: 10,
    color: '#C0C0C0',
    level: 2,
    benefits: ['Premium features', '10% discount', 'Early access to drops', 'Priority support'],
  },
  GOLD: {
    discount: 15,
    color: '#FFD700',
    level: 3,
    benefits: ['VIP features', '15% discount', 'Exclusive events', 'Priority support', 'Governance voting'],
  },
  PLATINUM: {
    discount: 25,
    color: '#E5E4E2',
    level: 4,
    benefits: ['Lifetime benefits', '25% discount', 'Private events', 'Dedicated support', 'Full governance rights', 'Revenue sharing'],
  },
};

/**
 * Creates NFT metadata with tier-based attributes
 */
export async function createNFTMetadata(config: MetadataConfig): Promise<NFTMetadata> {
  const attributes: Array<{ trait_type: string; value: string | number }> = [
    {
      trait_type: 'Utility Type',
      value: config.utilityType,
    },
    {
      trait_type: 'Supply',
      value: config.supply,
    },
    {
      trait_type: 'Platform',
      value: 'OPTIK',
    },
  ];

  // Add tier-specific attributes if tier is specified
  if (config.tier) {
    const tierConfig = TIER_BENEFITS[config.tier];
    attributes.push(
      {
        trait_type: 'Tier',
        value: config.tier,
      },
      {
        trait_type: 'Discount',
        value: `${tierConfig.discount}%`,
      },
      {
        trait_type: 'Level',
        value: tierConfig.level,
      },
      {
        trait_type: 'Tier Color',
        value: tierConfig.color,
      }
    );
  }

  const metadata: NFTMetadata = {
    name: config.name,
    symbol: config.symbol,
    description: config.description,
    image: config.tier
      ? `https://optik.io/nft-images/${config.tier.toLowerCase()}.png`
      : `https://optik.io/nft-images/collection.png`,
    external_url: 'https://optik.io',
    attributes,
    properties: {
      files: [
        {
          uri: config.tier
            ? `https://optik.io/nft-images/${config.tier.toLowerCase()}.png`
            : `https://optik.io/nft-images/collection.png`,
          type: 'image/png',
        },
      ],
      category: 'image',
      creators: [
        {
          address: 'OPTIK_CREATOR_WALLET_ADDRESS', // Replace with actual creator wallet
          share: 100,
        },
      ],
    },
  };

  return metadata;
}

/**
 * Upload metadata to IPFS (simulated for now)
 * In production, use services like NFT.Storage, Pinata, or Arweave
 */
export async function uploadMetadataToIPFS(metadata: NFTMetadata): Promise<string> {
  // Simulate IPFS upload
  const metadataJson = JSON.stringify(metadata, null, 2);
  const hash = Buffer.from(metadataJson).toString('base64').substring(0, 46);
  const ipfsUri = `ipfs://${hash}`;

  console.log('Metadata uploaded to IPFS:', ipfsUri);

  // In production, you would:
  // 1. Use NFT.Storage API or similar
  // 2. Upload image first, get image URI
  // 3. Update metadata with image URI
  // 4. Upload metadata JSON
  // 5. Return the metadata URI

  return ipfsUri;
}

/**
 * Generate collection metadata for the entire collection
 */
export async function createCollectionMetadata(
  collectionName: string,
  symbol: string,
  description: string,
  supply: number
): Promise<NFTMetadata> {
  const metadata: NFTMetadata = {
    name: collectionName,
    symbol: symbol,
    description: description,
    image: 'https://optik.io/nft-images/collection.png',
    external_url: 'https://optik.io',
    attributes: [
      {
        trait_type: 'Collection Size',
        value: supply,
      },
      {
        trait_type: 'Platform',
        value: 'OPTIK',
      },
      {
        trait_type: 'Standard',
        value: 'Metaplex',
      },
    ],
    properties: {
      files: [
        {
          uri: 'https://optik.io/nft-images/collection.png',
          type: 'image/png',
        },
      ],
      category: 'image',
      creators: [
        {
          address: 'OPTIK_CREATOR_WALLET_ADDRESS',
          share: 100,
        },
      ],
    },
  };

  return metadata;
}

/**
 * Get tier benefits information
 */
export function getTierBenefits(tier: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM') {
  return TIER_BENEFITS[tier];
}

/**
 * Validate metadata structure
 */
export function validateMetadata(metadata: NFTMetadata): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!metadata.name || metadata.name.trim().length === 0) {
    errors.push('Name is required');
  }

  if (!metadata.symbol || metadata.symbol.trim().length === 0) {
    errors.push('Symbol is required');
  }

  if (!metadata.description || metadata.description.trim().length === 0) {
    errors.push('Description is required');
  }

  if (!metadata.attributes || metadata.attributes.length === 0) {
    errors.push('At least one attribute is required');
  }

  if (!metadata.properties || !metadata.properties.creators || metadata.properties.creators.length === 0) {
    errors.push('At least one creator is required');
  }

  // Validate creator shares sum to 100
  const totalShares = metadata.properties.creators.reduce((sum, creator) => sum + creator.share, 0);
  if (totalShares !== 100) {
    errors.push(`Creator shares must sum to 100 (current: ${totalShares})`);
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
