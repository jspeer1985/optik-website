/**
 * Solana Network Configuration
 * Manages RPC endpoints, network selection, and connection settings
 */

import { clusterApiUrl } from '@solana/web3.js';

export type SolanaNetwork = 'mainnet-beta' | 'testnet' | 'devnet' | 'localnet';

export interface SolanaConfig {
  network: SolanaNetwork;
  rpcEndpoint: string;
  wsEndpoint?: string;
  commitment: 'processed' | 'confirmed' | 'finalized';
}

/**
 * Environment-based network configuration
 */
export function getSolanaConfig(): SolanaConfig {
  const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK || 'devnet') as SolanaNetwork;

  // Custom RPC endpoint from environment, or fallback to public RPC
  const customRpc = process.env.NEXT_PUBLIC_SOLANA_RPC_URL;

  let rpcEndpoint: string;
  let wsEndpoint: string | undefined;

  if (customRpc) {
    rpcEndpoint = customRpc;
  } else {
    // Use public RPC endpoints
    switch (network) {
      case 'mainnet-beta':
        rpcEndpoint = clusterApiUrl('mainnet-beta');
        break;
      case 'testnet':
        rpcEndpoint = clusterApiUrl('testnet');
        break;
      case 'devnet':
        rpcEndpoint = clusterApiUrl('devnet');
        break;
      case 'localnet':
        rpcEndpoint = 'http://127.0.0.1:8899';
        wsEndpoint = 'ws://127.0.0.1:8900';
        break;
      default:
        rpcEndpoint = clusterApiUrl('devnet');
    }
  }

  return {
    network,
    rpcEndpoint,
    wsEndpoint,
    commitment: 'confirmed',
  };
}

/**
 * RPC endpoint configurations for different providers
 */
export const RPC_PROVIDERS = {
  // Public endpoints (rate-limited)
  public: {
    mainnet: clusterApiUrl('mainnet-beta'),
    devnet: clusterApiUrl('devnet'),
    testnet: clusterApiUrl('testnet'),
  },

  // Recommended for production (requires API keys)
  helius: {
    mainnet: `https://rpc.helius.xyz/?api-key=${process.env.HELIUS_API_KEY || ''}`,
    devnet: `https://rpc-devnet.helius.xyz/?api-key=${process.env.HELIUS_API_KEY || ''}`,
  },

  quicknode: {
    mainnet: process.env.QUICKNODE_MAINNET_URL || '',
    devnet: process.env.QUICKNODE_DEVNET_URL || '',
  },

  alchemy: {
    mainnet: `https://solana-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY || ''}`,
    devnet: `https://solana-devnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY || ''}`,
  },
};

/**
 * Get explorer URL for transactions/addresses
 */
export function getExplorerUrl(
  identifier: string,
  type: 'tx' | 'address' | 'block' = 'tx',
  network?: SolanaNetwork
): string {
  const net = network || getSolanaConfig().network;
  const cluster = net === 'mainnet-beta' ? '' : `?cluster=${net}`;

  return `https://explorer.solana.com/${type}/${identifier}${cluster}`;
}

/**
 * Get Solscan URL (alternative explorer)
 */
export function getSolscanUrl(
  identifier: string,
  type: 'tx' | 'account' | 'token' = 'tx',
  network?: SolanaNetwork
): string {
  const net = network || getSolanaConfig().network;
  const cluster = net === 'mainnet-beta' ? '' : `?cluster=${net}`;

  return `https://solscan.io/${type}/${identifier}${cluster}`;
}

/**
 * Network display names
 */
export const NETWORK_LABELS: Record<SolanaNetwork, string> = {
  'mainnet-beta': 'Mainnet',
  testnet: 'Testnet',
  devnet: 'Devnet',
  localnet: 'Localnet',
};

/**
 * Get network status badge color
 */
export function getNetworkColor(network: SolanaNetwork): string {
  switch (network) {
    case 'mainnet-beta':
      return '#00D4AA'; // Green
    case 'devnet':
      return '#9945FF'; // Purple
    case 'testnet':
      return '#FFA500'; // Orange
    case 'localnet':
      return '#808080'; // Gray
    default:
      return '#808080';
  }
}

/**
 * Validate Solana wallet address
 */
export function isValidSolanaAddress(address: string): boolean {
  try {
    // Solana addresses are base58 encoded and 32-44 characters
    const base58Regex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
    return base58Regex.test(address);
  } catch {
    return false;
  }
}

/**
 * Connection retry configuration
 */
export const CONNECTION_CONFIG = {
  confirmTransactionInitialTimeout: 60000, // 60 seconds
  maxRetries: 3,
  retryDelay: 1000, // 1 second
  timeout: 30000, // 30 seconds
};

/**
 * Transaction fee configuration
 */
export const FEE_CONFIG = {
  priorityFee: {
    none: 0,
    low: 1000, // 0.000001 SOL
    medium: 5000, // 0.000005 SOL
    high: 10000, // 0.00001 SOL
  },
  maxRetries: 5,
  retryDelay: 2000,
};

/**
 * Metaplex configuration
 */
export const METAPLEX_CONFIG = {
  programIds: {
    tokenMetadata: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
    candyMachine: 'cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ',
    auctionHouse: 'hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk',
  },
  storageProviders: {
    arweave: 'https://arweave.net',
    nftStorage: 'https://api.nft.storage',
    pinata: 'https://api.pinata.cloud',
  },
};

/**
 * Get current configuration summary
 */
export function getConfigSummary(): {
  network: string;
  rpcEndpoint: string;
  commitment: string;
  explorer: string;
} {
  const config = getSolanaConfig();
  return {
    network: NETWORK_LABELS[config.network],
    rpcEndpoint: config.rpcEndpoint,
    commitment: config.commitment,
    explorer: getExplorerUrl('', 'tx', config.network).split('/').slice(0, 3).join('/'),
  };
}
