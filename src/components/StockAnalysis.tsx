import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { TrendingUp, DollarSign, Activity, AlertCircle, Zap, Shield } from 'lucide-react';

const StockAnalysis: React.FC = () => {
  const priceData = [
    { time: '09:30', price: 245.67, volume: 1200000, insider: 0 },
    { time: '10:00', price: 247.23, volume: 1450000, insider: 0 },
    { time: '10:30', price: 249.81, volume: 2100000, insider: 1 },
    { time: '11:00', price: 252.45, volume: 3200000, insider: 1 },
    { time: '11:30', price: 248.92, volume: 1800000, insider: 0 },
    { time: '12:00', price: 251.33, volume: 1600000, insider: 0 },
    { time: '12:30', price: 253.78, volume: 2400000, insider: 1 },
    { time: '13:00', price: 256.12, volume: 2800000, insider: 1 },
  ];

  const watchlist = [
    { symbol: 'TSLA', price: 256.12, change: '+3.45%', insiderScore: 94, volume: '2.8M' },
    { symbol: 'AAPL', price: 189.67, change: '-1.23%', insiderScore: 67, volume: '1.2M' },
    { symbol: 'NVDA', price: 478.23, change: '+5.67%', insiderScore: 89, volume: '4.1M' },
    { symbol: 'META', price: 334.45, change: '-2.34%', insiderScore: 92, volume: '1.9M' },
    { symbol: 'GOOGL', price: 142.78, change: '+1.89%', insiderScore: 78, volume: '1.5M' },
  ];

  return (
    <div className="space-y-6">
      {/* Price Chart with Insider Activity Overlay */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Activity className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-bold text-white">Real-Time Price Action with Insider Detection</h2>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F3F4F6'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#3B82F6" 
                strokeWidth={2}
                dot={(props) => {
                  const { cx, cy, payload } = props;
                  return payload.insider ? (
                    <circle 
                      cx={cx} 
                      cy={cy} 
                      r={6} 
                      fill="#EF4444" 
                      stroke="#FEE2E2" 
                      strokeWidth={2}
                    />
                  ) : (
                    <circle cx={cx} cy={cy} r={3} fill="#3B82F6" />
                  );
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-slate-400">Normal Trading</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="text-slate-400">Insider Activity Detected</span>
          </div>
        </div>
      </div>

      {/* Watchlist with Insider Scores */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="w-6 h-6 text-green-400" />
          <h2 className="text-xl font-bold text-white">High-Priority Watchlist</h2>
        </div>

        <div className="space-y-3">
          {watchlist.map((stock, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all">
              <div className="flex items-center space-x-4">
                <span className="text-lg font-bold text-white w-16">{stock.symbol}</span>
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300">{stock.price}</span>
                </div>
                <span className={`text-sm font-medium ${
                  stock.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stock.change}
                </span>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-sm text-slate-400">Volume</div>
                  <div className="text-white font-medium">{stock.volume}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-slate-400">Insider Score</div>
                  <div className={`font-bold ${
                    stock.insiderScore >= 90 ? 'text-red-400' :
                    stock.insiderScore >= 80 ? 'text-orange-400' : 'text-yellow-400'
                  }`}>
                    {stock.insiderScore}
                  </div>
                </div>
                {stock.insiderScore >= 90 && (
                  <AlertCircle className="w-5 h-5 text-red-400 animate-pulse" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Volume Analysis */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Activity className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-bold text-white">Unusual Volume Detection</h2>
        </div>
        
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F3F4F6'
                }} 
              />
              <Bar 
                dataKey="volume" 
                fill="#8B5CF6"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Market Intelligence Summary */}
      <div className="glass-card p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/30">
        <div className="flex items-center space-x-3 mb-4">
          <Zap className="w-6 h-6 text-yellow-400" />
          <h2 className="text-xl font-bold text-white">Market Intelligence Summary</h2>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <h3 className="font-semibold text-slate-200 mb-2">Today's Key Findings</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 mt-0.5 text-red-400" />
                <span>Detected 12 potential insider trading events across major exchanges</span>
              </li>
              <li className="flex items-start space-x-2">
                <TrendingUp className="w-4 h-4 mt-0.5 text-green-400" />
                <span>Prevented estimated $4.7M in client losses through early detection</span>
              </li>
              <li className="flex items-start space-x-2">
                <Shield className="w-4 h-4 mt-0.5 text-blue-400" />
                <span>Identified 3 coordinated market manipulation schemes</span>
              </li>
            </ul>
          </div>
          
          <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
            <h3 className="font-semibold text-green-300 mb-2">Enterprise Client Value</h3>
            <p className="text-sm text-slate-300">
              Our AI-powered insider detection system has generated over <strong className="text-green-400">$47.2M in prevented losses</strong> 
              for institutional clients this month alone. With regulatory fines for insider trading reaching hundreds of millions, 
              our early warning system provides invaluable protection and competitive intelligence worth 
              <strong className="text-yellow-400"> $50K-$200K monthly per client</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockAnalysis;