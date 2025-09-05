import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, Eye, Brain, Users } from 'lucide-react';

const Dashboard = () => {
  const marketMetrics = [
    { label: 'Insider Activity Score', value: '94.2', change: '+12.3%', trend: 'up', critical: true },
    { label: 'Social Sentiment Index', value: '78.5', change: '-5.2%', trend: 'down' },
    { label: 'Prediction Accuracy', value: '91.7%', change: '+2.1%', trend: 'up' },
    { label: 'Active Monitoring', value: '2,847', change: '+156', trend: 'up' },
  ];

  const recentDetections = [
    {
      symbol: 'TSLA',
      type: 'Unusual Options Activity',
      confidence: 97,
      timeDetected: '2 min ago',
      description: 'Large call volume spike detected 15 minutes before earnings leak on Twitter',
      severity: 'critical'
    },
    {
      symbol: 'AAPL',
      type: 'Social Media Precursor',
      confidence: 89,
      timeDetected: '8 min ago',
      description: 'Executive LinkedIn activity pattern matches historical pre-announcement behavior',
      severity: 'high'
    },
    {
      symbol: 'NVDA',
      type: 'Institutional Flow Anomaly',
      confidence: 84,
      timeDetected: '12 min ago',
      description: 'Dark pool activity surge correlates with insider social network chatter',
      severity: 'medium'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketMetrics.map((metric, index) => (
          <div key={index} className={`metric-card ${metric.critical ? 'neon-border animate-glow' : ''}`}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-slate-400">{metric.label}</h3>
              {metric.trend === 'up' ? (
                <TrendingUp className="w-4 h-4 text-green-400" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-400" />
              )}
            </div>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-white">{metric.value}</span>
              <span className={`text-sm ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Live Detection Feed */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Eye className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-bold text-white">Live Insider Detection Feed</h2>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <span className="text-sm text-slate-300">Real-time Monitoring</span>
          </div>
        </div>

        <div className="space-y-4">
          {recentDetections.map((detection, index) => (
            <div 
              key={index} 
              className={`p-4 rounded-lg border-l-4 ${
                detection.severity === 'critical' 
                  ? 'alert-critical border-l-red-500' 
                  : detection.severity === 'high'
                  ? 'alert-high border-l-orange-500'
                  : 'alert-medium border-l-yellow-500'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-bold text-white text-lg">{detection.symbol}</span>
                    <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">
                      {detection.type}
                    </span>
                    <span className="text-xs text-slate-400">{detection.timeDetected}</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-2">{detection.description}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-slate-400">Confidence: {detection.confidence}%</span>
                    </div>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  detection.severity === 'critical' 
                    ? 'bg-red-900/30 text-red-300 border border-red-500/30' 
                    : detection.severity === 'high'
                    ? 'bg-orange-900/30 text-orange-300 border border-orange-500/30'
                    : 'bg-yellow-900/30 text-yellow-300 border border-yellow-500/30'
                }`}>
                  {detection.severity.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Potential */}
      <div className="glass-card p-6 neon-border">
        <div className="flex items-center space-x-3 mb-4">
          <TrendingUp className="w-6 h-6 text-green-400" />
          <h2 className="text-xl font-bold text-white">Revenue Intelligence</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">$50K+</div>
            <div className="text-sm text-slate-400">Monthly Licensing Potential</div>
            <div className="text-xs text-slate-500 mt-1">Per institutional client</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">847</div>
            <div className="text-sm text-slate-400">Successful Predictions</div>
            <div className="text-xs text-slate-500 mt-1">This month</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">23.7M</div>
            <div className="text-sm text-slate-400">Data Points Analyzed</div>
            <div className="text-xs text-slate-500 mt-1">Per hour</div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-green-400" />
            <span className="font-semibold text-green-300">High-Value Intelligence Detected</span>
          </div>
          <p className="text-sm text-slate-300">
            Current detection patterns suggest potential for $2.3M+ in prevented losses for institutional clients this week.
            Advanced pattern recognition has identified 12 high-probability insider trading scenarios across major exchanges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;