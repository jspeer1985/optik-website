/**
 * Blog Page
 * (Placeholder for future blog posts)
 */

import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const posts = [
    {
      title: 'OPTIK Launches Merchant NFT Platform',
      excerpt: 'Revolutionizing commerce with NFT-gated benefits and zero monthly fees...',
      author: 'OPTIK Team',
      date: '2026-01-31',
      category: 'Announcement',
    },
    {
      title: 'The Future of Loyalty Programs: NFTs vs Traditional Points',
      excerpt: 'Why NFT-based loyalty programs are 10x more effective than traditional systems...',
      author: 'Alex Chen',
      date: '2026-01-28',
      category: 'Insights',
    },
    {
      title: 'How to Reduce Transaction Fees by 70% with OPTIK Staking',
      excerpt: 'A complete guide to maximizing savings through strategic OPTIK token staking...',
      author: 'Sarah Johnson',
      date: '2026-01-25',
      category: 'Tutorial',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold optik-gradient-text mb-4">OPTIK Blog</h1>
          <p className="text-xl text-gray-300">
            Insights, updates, and tutorials from the OPTIK team
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post, i) => (
            <article key={i} className="optik-glass p-8 rounded-2xl border border-optik-blue/20 hover:border-optik-blue/40 transition-all">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                <span className="bg-optik-blue/20 text-optik-blue px-3 py-1 rounded-full font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 hover:text-optik-blue transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <button className="text-optik-blue hover:underline flex items-center gap-2">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="optik-btn px-8 py-3">Load More Posts</button>
        </div>
      </div>
    </div>
  );
}
