/**
 * Merchant Onboarding API Endpoint
 * Processes merchant onboarding requests and creates NFT collections
 */

import { NextRequest, NextResponse } from 'next/server';
import { validateMerchantOnboarding, type MerchantOnboardingData } from '@/lib/validation';
import { Connection, Keypair } from '@solana/web3.js';
import { getSolanaConfig } from '@/config/solana';
import { createNFTCollection, type NFTConfig } from '@/solana/mint';

/**
 * POST /api/onboard
 * Handle merchant onboarding submission
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: MerchantOnboardingData = await request.json();

    // Validate input
    const validation = validateMerchantOnboarding(body);
    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // Get Solana connection
    const solanaConfig = getSolanaConfig();
    const connection = new Connection(solanaConfig.rpcEndpoint, solanaConfig.commitment);

    // Create NFT collection configuration
    const nftConfig: NFTConfig = {
      collectionName: body.collectionName,
      symbol: body.collectionSymbol,
      supply: body.supply,
      royaltyPercentage: body.royaltyPercentage,
      creatorWallet: body.creatorWallet,
      utilityType: body.utilityType,
    };

    // In production, use a secure keypair management system
    // For now, generate a temporary keypair for demonstration
    const payer = Keypair.generate();

    // Create NFT collection
    const mintResult = await createNFTCollection(connection, payer, nftConfig);

    if (!mintResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: mintResult.error || 'Failed to create NFT collection',
        },
        { status: 500 }
      );
    }

    // In production, you would:
    // 1. Store merchant data in database
    // 2. Send confirmation email
    // 3. Create merchant dashboard account
    // 4. Schedule onboarding call
    // 5. Set up webhooks and notifications

    console.log('Merchant onboarded successfully:', {
      businessName: body.businessName,
      email: body.email,
      collectionName: body.collectionName,
      mintAddress: mintResult.mintAddress,
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Merchant onboarded successfully',
        data: {
          collectionName: body.collectionName,
          symbol: body.collectionSymbol,
          mintAddress: mintResult.mintAddress,
          transactionId: mintResult.transactionId,
          businessName: body.businessName,
          email: body.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Onboarding error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/onboard
 * Return configuration and requirements
 */
export async function GET() {
  try {
    const config = {
      requirements: {
        businessInfo: [
          'Full Name',
          'Email Address',
          'Phone Number',
          'Business Name',
          'Business Website (optional)',
        ],
        nftConfig: [
          'Collection Name',
          'Collection Symbol (1-10 uppercase characters)',
          'Total Supply (1-10,000)',
          'Royalty Percentage (0-20%)',
          'Creator Wallet Address (Solana)',
        ],
        utilityTypes: ['DISCOUNT', 'ACCESS', 'SUBSCRIPTION', 'LOYALTY'],
      },
      tiers: [
        {
          name: 'Bronze',
          minNFTs: 1,
          discount: 5,
          benefits: ['Basic member access', '5% discount', 'Community updates'],
        },
        {
          name: 'Silver',
          minNFTs: 3,
          discount: 10,
          benefits: ['Premium features', '10% discount', 'Early access', 'Priority support'],
        },
        {
          name: 'Gold',
          minNFTs: 5,
          discount: 15,
          benefits: [
            'VIP features',
            '15% discount',
            'Exclusive events',
            'Governance voting',
          ],
        },
        {
          name: 'Platinum',
          minNFTs: 10,
          discount: 25,
          benefits: [
            'Lifetime benefits',
            '25% discount',
            'Private events',
            'Revenue sharing',
          ],
        },
      ],
      platformFees: [
        { stake: 0, fee: 2.5, name: 'Standard' },
        { stake: 10_000, fee: 2.0, name: 'Bronze Staker' },
        { stake: 100_000, fee: 1.5, name: 'Silver Staker' },
        { stake: 1_000_000, fee: 0.75, name: 'Gold Staker' },
      ],
      process: [
        'Submit onboarding form',
        'NFT collection deployed to Solana',
        'Receive setup instructions via email',
        'Schedule onboarding call with our team',
        'Start minting and rewarding customers',
      ],
    };

    return NextResponse.json(config, { status: 200 });
  } catch (error) {
    console.error('Config retrieval error:', error);

    return NextResponse.json(
      {
        error: 'Failed to retrieve configuration',
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS /api/onboard
 * Handle CORS preflight
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
