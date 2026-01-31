# OPTIK Gold Inc - Web3 Ecommerce dApp

Premium ecommerce platform powered by Solana blockchain for secure cryptocurrency payments.

## 🚀 Features

### Complete Ecommerce Platform
- **Product Catalog** - Browse and search premium digital products, NFTs, and merchandise
- **Shopping Cart** - Add/remove items with real-time price calculation
- **Crypto Checkout** - Pay securely with SOL and SPL tokens via Solana wallet
- **Instant Delivery** - Digital products delivered directly to your wallet
- **Responsive Design** - Mobile-friendly interface with smooth animations

### Pages Included
1. ✅ **Home** (`/`) - Hero section with featured products and stats
2. ✅ **Shop** (`/shop`) - Full product catalog with search and filters
3. ✅ **Cart** (`/cart`) - Shopping cart with quantity management
4. ✅ **Checkout** (`/checkout`) - Secure crypto payment processing
5. ✅ **About** (`/about`) - Company information and values
6. ✅ **How It Works** (`/how-it-works`) - Step-by-step guide for customers

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Blockchain**: Solana Web3.js
- **Wallet**: Solana Wallet Adapter (Phantom, Solflare, etc.)
- **Styling**: Tailwind CSS with custom gold theme
- **Icons**: Lucide React
- **Charts**: Recharts
- **Animations**: Framer Motion

## 🎨 Design System

### Gold Theme Colors
```css
--optik-gold: #d4a574;        /* Primary gold */
--optik-gold-light: #f4d9a8;  /* Light gold */
--optik-gold-dark: #b8895e;   /* Dark gold */
--optik-blue: #00d4ff;        /* Accent blue */
--optik-dark: #0a0a0f;        /* Background */
```

### Custom CSS Classes
```tsx
<div className="gold-card">           /* Gold glowing card */
<button className="gold-btn">         /* Gold gradient button */
<h1 className="gold-gradient-text">   /* Gold gradient text */
<h1 className="gold-glow-text">       /* Gold glowing text */
```

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/optik-gold-ecommerce.git
cd optik-gold-ecommerce
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Open Browser
Navigate to `http://localhost:3000`

## 🛠️ Configuration

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_RPC_ENDPOINT=https://api.devnet.solana.com
```

### Wallet Integration
The app supports all major Solana wallets:
- Phantom
- Solflare
- Backpack
- Coinbase Wallet
- Any Solana-compatible wallet

## 📱 Pages Structure

```
app/
├── page.tsx                → Home (Hero, featured products)
├── shop/page.tsx          → Product catalog
├── cart/page.tsx          → Shopping cart
├── checkout/page.tsx      → Crypto checkout
├── about/page.tsx         → Company info
├── how-it-works/page.tsx  → User guide
├── layout.tsx             → Root layout
└── globals.css            → All styling

components/
├── Navbar.tsx             → Navigation with cart icon
└── Footer.tsx             → Footer with links
```

## 🎯 Key Features

### Shopping Experience
- **Search & Filter** - Find products by name or category
- **Real-time Pricing** - SOL prices with USD conversion
- **Quantity Management** - Add/remove/update cart items
- **Cart Persistence** - Cart saved in browser storage

### Blockchain Integration
- **Wallet Connection** - One-click Solana wallet connection
- **Secure Payments** - Blockchain-verified transactions
- **Low Fees** - ~$0.001 network fees per transaction
- **Instant Confirmation** - Sub-second transaction processing

### User Interface
- **Responsive Design** - Works on all devices
- **Smooth Animations** - Framer Motion animations
- **Loading States** - Clear feedback during operations
- **Error Handling** - User-friendly error messages

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Manual Build
```bash
npm run build
npm start
```

### Environment Setup
1. Set up Solana RPC endpoint
2. Configure wallet adapter
3. Set up payment processor
4. Deploy to production

## 📝 Customization

### Update Product Catalog
Edit `/app/shop/page.tsx`:
```tsx
const products = [
  {
    id: 1,
    name: 'Your Product Name',
    price: '0.5 SOL',
    category: 'Your Category',
    // ... more fields
  },
];
```

### Change Theme Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'optik-gold': '#d4a574',  // Change to your color
}
```

### Update Social Links
Edit `components/Footer.tsx`:
```tsx
href="https://twitter.com/YourTwitter"
href="https://discord.gg/YourDiscord"
```

## 🔒 Security

- All transactions verified on Solana blockchain
- No credit card or personal data stored
- Wallet-based authentication
- Secure smart contract integration
- HTTPS/SSL encryption

## 📚 Documentation

### For Customers
- Visit `/how-it-works` for step-by-step guide
- Connect any Solana wallet to shop
- Pay with SOL or SPL tokens
- Receive digital products instantly

### For Developers
- Built with Next.js 15 App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Modular component architecture
- Easy to extend and customize

## 🐛 Troubleshooting

### Wallet Won't Connect
- Make sure wallet extension is installed
- Try refreshing the page
- Check if wallet is unlocked
- Ensure you're on the correct network

### Transaction Failed
- Check wallet SOL balance for fees
- Verify network connection
- Try again after a few seconds

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📞 Support

- **Email**: support@optikgold.com
- **Discord**: https://discord.gg/optikgold
- **Twitter**: https://twitter.com/OptikGold
- **Telegram**: https://t.me/optikgold

## 🎉 Credits

Built with:
- Next.js
- Solana Web3.js
- Tailwind CSS
- Lucide Icons
- Framer Motion

---

**OPTIK Gold Inc** - Premium Web3 Ecommerce
© 2025 All rights reserved
