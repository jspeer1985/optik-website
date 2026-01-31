/**
 * Site Configuration
 * Metadata, navigation, and general site settings
 */

export const siteConfig = {
  name: 'OPTIK',
  description:
    'The NFT-powered commerce ecosystem on Solana. Build, launch, and scale your NFT-gated merchant platform with zero monthly fees.',
  url: 'https://optik.io',
  ogImage: 'https://optik.io/og-image.png',
  links: {
    twitter: 'https://twitter.com/optik_io',
    github: 'https://github.com/optik-io',
    discord: 'https://discord.gg/optik',
    telegram: 'https://t.me/optik_io',
  },
  creator: 'OPTIK Team',
  keywords: [
    'NFT',
    'Solana',
    'Commerce',
    'Web3',
    'NFT Gating',
    'Merchant Platform',
    'OPTIK',
    'DeFi',
    'Token',
  ],
};

export const navConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Tokenomics',
      href: '/tokenomics',
    },
    {
      title: 'Roadmap',
      href: '/roadmap',
    },
    {
      title: 'Whitepaper',
      href: '/whitepaper',
    },
    {
      title: 'Airdrop',
      href: '/airdrop',
    },
    {
      title: 'Merchant Onboarding',
      href: '/onboard',
      highlight: true, // Highlight this nav item
    },
  ],
  footerNav: [
    {
      title: 'Product',
      items: [
        { title: 'Features', href: '/features' },
        { title: 'Pricing', href: '/pricing' },
        { title: 'Merchant Onboarding', href: '/onboard' },
        { title: 'Documentation', href: '/docs' },
      ],
    },
    {
      title: 'Company',
      items: [
        { title: 'About', href: '/about' },
        { title: 'Blog', href: '/blog' },
        { title: 'Careers', href: '/careers' },
        { title: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { title: 'Whitepaper', href: '/whitepaper' },
        { title: 'Tokenomics', href: '/tokenomics' },
        { title: 'Roadmap', href: '/roadmap' },
        { title: 'FAQs', href: '/faqs' },
      ],
    },
    {
      title: 'Community',
      items: [
        { title: 'Discord', href: siteConfig.links.discord },
        { title: 'Twitter', href: siteConfig.links.twitter },
        { title: 'Telegram', href: siteConfig.links.telegram },
        { title: 'GitHub', href: siteConfig.links.github },
      ],
    },
  ],
};

export const merchantConfig = {
  onboarding: {
    title: 'Merchant Onboarding',
    description: 'Launch your NFT-powered commerce platform in minutes',
    benefits: [
      {
        icon: '💰',
        title: 'Zero Monthly Fees',
        description: 'No subscription costs. Pay only a small transaction fee.',
      },
      {
        icon: '🚀',
        title: 'Launch in Minutes',
        description: 'Complete setup and start minting NFTs in under 10 minutes.',
      },
      {
        icon: '🎨',
        title: 'Full Customization',
        description: 'Your brand, your rules. Complete control over your platform.',
      },
      {
        icon: '🔒',
        title: 'Secure & Decentralized',
        description: 'Built on Solana blockchain with industry-leading security.',
      },
      {
        icon: '📈',
        title: 'Built-in Analytics',
        description: 'Track sales, engagement, and customer behavior in real-time.',
      },
      {
        icon: '🎁',
        title: 'Loyalty Rewards',
        description: 'Automatic tier-based rewards for your best customers.',
      },
    ],
    utilityTypes: [
      {
        value: 'DISCOUNT',
        label: 'Discount NFTs',
        description: 'Offer tier-based discounts (5%-25%) to NFT holders',
        icon: '🏷️',
        examples: ['Retail stores', 'E-commerce', 'Restaurants'],
      },
      {
        value: 'ACCESS',
        label: 'Access NFTs',
        description: 'Gate exclusive content or areas for NFT holders',
        icon: '🔐',
        examples: ['Membership clubs', 'Premium content', 'VIP events'],
      },
      {
        value: 'SUBSCRIPTION',
        label: 'Subscription NFTs',
        description: 'Recurring benefits for NFT holders',
        icon: '🔄',
        examples: ['SaaS products', 'Content creators', 'Service businesses'],
      },
      {
        value: 'LOYALTY',
        label: 'Loyalty NFTs',
        description: 'Reward long-term customers with evolving benefits',
        icon: '⭐',
        examples: ['Coffee shops', 'Gyms', 'Any repeat business'],
      },
    ],
  },
  tiers: [
    {
      name: 'Bronze',
      minNFTs: 1,
      discount: 5,
      color: '#CD7F32',
      benefits: ['Basic member access', '5% discount', 'Community updates'],
    },
    {
      name: 'Silver',
      minNFTs: 3,
      discount: 10,
      color: '#C0C0C0',
      benefits: ['Premium features', '10% discount', 'Early access', 'Priority support'],
    },
    {
      name: 'Gold',
      minNFTs: 5,
      discount: 15,
      color: '#FFD700',
      benefits: ['VIP features', '15% discount', 'Exclusive events', 'Governance voting'],
    },
    {
      name: 'Platinum',
      minNFTs: 10,
      discount: 25,
      color: '#E5E4E2',
      benefits: [
        'Lifetime benefits',
        '25% discount',
        'Private events',
        'Revenue sharing',
      ],
    },
  ],
  platformFees: [
    {
      stake: 0,
      fee: 2.5,
      name: 'Standard',
    },
    {
      stake: 10_000,
      fee: 2.0,
      name: 'Bronze Staker',
    },
    {
      stake: 100_000,
      fee: 1.5,
      name: 'Silver Staker',
    },
    {
      stake: 1_000_000,
      fee: 0.75,
      name: 'Gold Staker',
    },
  ],
};

export const tokenConfig = {
  name: 'OptikCoin',
  symbol: 'OPTIK',
  totalSupply: 1_000_000_000, // 1 billion
  decimals: 9,
  allocation: {
    publicSale: 0.3, // 30%
    team: 0.15, // 15%
    advisors: 0.05, // 5%
    marketing: 0.1, // 10%
    ecosystem: 0.2, // 20%
    liquidity: 0.15, // 15%
    reserve: 0.05, // 5%
  },
  vesting: {
    team: '24 months with 6-month cliff',
    advisors: '18 months with 3-month cliff',
    marketing: 'Released over 36 months',
    ecosystem: 'Released over 48 months',
  },
  stakingAPY: {
    min: 12,
    max: 20,
  },
};

export const socialProof = {
  stats: [
    { label: 'Merchants Onboarded', value: '500+', icon: '🏪' },
    { label: 'NFTs Minted', value: '50K+', icon: '🎨' },
    { label: 'Total Volume', value: '$2.5M', icon: '💎' },
    { label: 'Transaction Savings', value: '$150K', icon: '💰' },
  ],
  testimonials: [
    {
      name: 'Sarah Chen',
      role: 'E-commerce Owner',
      content:
        'OPTIK transformed our customer loyalty program. NFT holders get automatic discounts, and we saved $5K/month vs. Shopify.',
      avatar: '/testimonials/sarah.jpg',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Restaurant Chain',
      content:
        'The tier system is brilliant. Our platinum NFT holders feel like VIPs, and the platform practically runs itself.',
      avatar: '/testimonials/marcus.jpg',
    },
    {
      name: 'Emily Park',
      role: 'Digital Artist',
      content:
        'Finally, a platform that lets me reward my collectors properly. The royalty system ensures I earn from every resale.',
      avatar: '/testimonials/emily.jpg',
    },
  ],
};

export const faqs = [
  {
    question: 'What are the monthly fees?',
    answer:
      'Zero monthly fees. You only pay a small transaction fee (0.75%-2.5%) based on your OPTIK staking tier.',
  },
  {
    question: 'How long does onboarding take?',
    answer:
      'Most merchants complete onboarding in under 10 minutes. Your NFT collection can be minted immediately after approval.',
  },
  {
    question: 'Do I need crypto experience?',
    answer:
      "No! We handle all the blockchain complexity. You focus on your business, we handle the NFT infrastructure.",
  },
  {
    question: 'Can I customize my NFT benefits?',
    answer:
      'Absolutely. You control the discounts, tier requirements, and benefits for each NFT tier.',
  },
  {
    question: 'What happens to my data?',
    answer:
      'You own all your data. Everything is stored on Solana blockchain and your own infrastructure.',
  },
  {
    question: 'Is there a minimum NFT supply?',
    answer:
      'You can mint as few as 1 NFT or up to 10,000. Most merchants start with 100-1,000 for their launch.',
  },
];
