import React, { useState } from 'react';
import { Twitter, MessageCircle, ThumbsUp, ThumbsDown, TrendingUp, Hash } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const sentimentData = [
  { platform: 'Twitter', positive: 65, negative: 20, neutral: 15, total: 45000 },
  { platform: 'Reddit', positive: 58, negative: 25, neutral: 17, total: 12000 },
  { platform: 'Discord', positive: 72, negative: 15, neutral: 13, total: 8500 },
  { platform: 'Telegram', positive: 61, negative: 22, neutral: 17, total: 6200 },
];

const trendingTopics = [
  { tag: '#AAPL', mentions: 15420, sentiment: 0.78, change: '+12%' },
  { tag: '#Tesla', mentions: 12350, sentiment: 0.65, change: '+8%' },
  { tag: '#AI', mentions: 9870, sentiment: 0.82, change: '+25%' },
  { tag: '#Crypto', mentions: 8640, sentiment: 0.45, change: '-5%' },
  { tag: '#Fed', mentions: 7230, sentiment: 0.38, change: '-15%' },
];

const recentMentions = [
  {
    platform: 'Twitter',
    user: '@TechAnalyst',
    content: 'AAPL showing strong momentum with institutional buying. Technical indicators suggest continued upward movement.',
    sentiment: 0.85,
    timestamp: '2 min ago',
    engagement: 234
  },
  {
    platform: 'Reddit',
    user: 'u/MarketWatcher',
    content: 'Tesla delivery numbers exceeded expectations. This could be the catalyst for the next leg up.',
    sentiment: 0.78,
    timestamp: '5 min ago',
    engagement: 156
  },
  {
    platform: 'Discord',
    user: 'CryptoKing#1234',
    content: 'NVDA earnings call was impressive. AI demand is not slowing down anytime soon.',
    sentiment: 0.92,
    timestamp: '8 min ago',
    engagement: 89
  },
];

const COLORS = ['#22c55e', '#ef4444', '#6b7280'];

const SocialSentiment: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all');

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Platform Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sentimentData.map((platform) => (
          <div key={platform.platform} className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">{platform.platform}</h3>
              {platform.platform === 'Twitter' && <Twitter className="w-5 h-5 text-blue-500" />}
              {platform.platform === 'Reddit' && <MessageCircle className="w-5 h-5 text-orange-500" />}
              {platform.platform === 'Discord' && <MessageCircle className="w-5 h-5 text-indigo-500" />}
              {platform.platform === 'Telegram' && <MessageCircle className="w-5 h-5 text-blue-400" />}
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Mentions</span>
                <span className="font-bold text-gray-900">{platform.total.toLocaleString()}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-success-600">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    Positive
                  </span>
                  <span className="font-medium">{platform.positive}%</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center text-danger-600">
                    <ThumbsDown className="w-4 h-4 mr-1" />
                    Negative
                  </span>
                  <span className="font-medium">{platform.negative}%</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Neutral</span>
                  <span className="font-medium">{platform.neutral}%</span>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                <div className="flex h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-success-500" 
                    style={{ width: `${platform.positive}%` }}
                  ></div>
                  <div 
                    className="bg-danger-500" 
                    style={{ width: `${platform.negative}%` }}
                  ></div>
                  <div 
                    className="bg-gray-400" 
                    style={{ width: `${platform.neutral}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sentiment by Platform</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sentimentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="platform" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} 
              />
              <Bar dataKey="positive" fill="#22c55e" name="Positive" />
              <Bar dataKey="negative" fill="#ef4444" name="Negative" />
              <Bar dataKey="neutral" fill="#6b7280" name="Neutral" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Sentiment Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: 'Positive', value: 65, color: '#22c55e' },
                  { name: 'Negative', value: 20, color: '#ef4444' },
                  { name: 'Neutral', value: 15, color: '#6b7280' }
                ]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {[
                  { name: 'Positive', value: 65, color: '#22c55e' },
                  { name: 'Negative', value: 20, color: '#ef4444' },
                  { name: 'Neutral', value: 15, color: '#6b7280' }
                ].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trending Topics */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Trending Topics</h3>
        <div className="space-y-4">
          {trendingTopics.map((topic) => (
            <div key={topic.tag} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <Hash className="w-5 h-5 text-primary-600" />
                <div>
                  <p className="font-semibold text-gray-900">{topic.tag}</p>
                  <p className="text-sm text-gray-500">{topic.mentions.toLocaleString()} mentions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-success-400 to-success-600 h-2 rounded-full"
                      style={{ width: `${topic.sentiment * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    {(topic.sentiment * 100).toFixed(0)}%
                  </span>
                </div>
                
                <span className={`text-sm font-medium ${
                  topic.change.startsWith('+') ? 'text-success-600' : 'text-danger-600'
                }`}>
                  {topic.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Mentions */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent High-Impact Mentions</h3>
        <div className="space-y-4">
          {recentMentions.map((mention, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    mention.platform === 'Twitter' ? 'bg-blue-100' :
                    mention.platform === 'Reddit' ? 'bg-orange-100' :
                    'bg-indigo-100'
                  }`}>
                    {mention.platform === 'Twitter' && <Twitter className="w-4 h-4 text-blue-600" />}
                    {mention.platform === 'Reddit' && <MessageCircle className="w-4 h-4 text-orange-600" />}
                    {mention.platform === 'Discord' && <MessageCircle className="w-4 h-4 text-indigo-600" />}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{mention.user}</p>
                    <p className="text-sm text-gray-500">{mention.timestamp}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    mention.sentiment > 0.7 ? 'bg-success-100 text-success-700' :
                    mention.sentiment < 0.5 ? 'bg-danger-100 text-danger-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {(mention.sentiment * 100).toFixed(0)}% positive
                  </div>
                  <span className="text-sm text-gray-500">{mention.engagement} reactions</span>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">{mention.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialSentiment;