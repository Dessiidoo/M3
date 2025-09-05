import React from 'react';
import { Shield, Target, Clock, TrendingUp, AlertCircle, Eye } from 'lucide-react';

const InsiderDetection = () => {
  const detectionMethods = [
    {
      name: 'Options Flow Analysis',
      description: 'Monitors unusual options activity patterns that precede major price movements',
      accuracy: '94.2%',
      status: 'active',
      lastDetection: '3 min ago'
    },
    {
      name: 'Executive Social Monitoring',
      description: 'Tracks social media activity patterns of C-suite executives and board members',
      accuracy: '87.8%',
      status: 'active',
      lastDetection: '7 min ago'
    },
    {
      name: 'Dark Pool Intelligence',
      description: 'Analyzes institutional trading patterns in private exchanges',
      accuracy: '91.5%',
      status: 'active',
      lastDetection: '12 min ago'
    },
    {
      name: 'Network Effect Analysis',
      description: 'Maps connections between insider networks and trading activities',
      accuracy: '89.3%',
      status: 'active',
      lastDetection: '18 min ago'
    }
  ];

  const activeInvestigations = [
    {
      symbol: 'META',
      suspicionLevel: 'High',
      evidence: [
        'CFO LinkedIn activity spike (+340% vs baseline)',
        'Unusual put options volume (15x normal)',
        'Executive assistant travel bookings to SEC offices'
      ],
      timeframe: '72 hours',
      probability: '89%'
    },
    {
      symbol: 'GOOGL',
      suspicionLevel: 'Critical',
      evidence: [
        'Board member family trust liquidations',
        'Private jet flights to undisclosed locations',
        'Encrypted communication spike in executive circles'
      ],
      timeframe: '48 hours',
      probability: '96%'
    },
    {
      symbol: 'AMZN',
      suspicionLevel: 'Medium',
      evidence: [
        'Institutional flow anomalies in pre-market',
        'Executive calendar clearing patterns',
        'Legal team activity increase'
      ],
      timeframe: '96 hours',
      probability: '73%'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Detection Methods */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Shield className="w-6 h-6 text-blue-400" />
          <h2 className="text-xl font-bold text-white">Active Detection Systems</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {detectionMethods.map((method, index) => (
            <div key={index} className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">{method.name}</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400">ACTIVE</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">{method.description}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Accuracy: {method.accuracy}</span>
                <span className="text-slate-500">Last: {method.lastDetection}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Investigations */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Target className="w-6 h-6 text-red-400" />
          <h2 className="text-xl font-bold text-white">Active Insider Investigations</h2>
          <div className="px-2 py-1 bg-red-900/30 rounded text-xs text-red-300 border border-red-500/30">
            HIGH PRIORITY
          </div>
        </div>

        <div className="space-y-4">
          {activeInvestigations.map((investigation, index) => (
            <div 
              key={index} 
              className={`p-5 rounded-lg border-l-4 ${
                investigation.suspicionLevel === 'Critical' 
                  ? 'alert-critical border-l-red-500' 
                  : investigation.suspicionLevel === 'High'
                  ? 'alert-high border-l-orange-500'
                  : 'alert-medium border-l-yellow-500'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-white">{investigation.symbol}</span>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    investigation.suspicionLevel === 'Critical' 
                      ? 'bg-red-900/30 text-red-300 border border-red-500/30' 
                      : investigation.suspicionLevel === 'High'
                      ? 'bg-orange-900/30 text-orange-300 border border-orange-500/30'
                      : 'bg-yellow-900/30 text-yellow-300 border border-yellow-500/30'
                  }`}>
                    {investigation.suspicionLevel} Risk
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">{investigation.probability}</div>
                  <div className="text-xs text-slate-400">Probability</div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-300 mb-2">Evidence Collected:</h4>
                <ul className="space-y-1">
                  {investigation.evidence.map((evidence, evidenceIndex) => (
                    <li key={evidenceIndex} className="flex items-start space-x-2 text-sm text-slate-400">
                      <AlertCircle className="w-3 h-3 mt-0.5 text-yellow-400 flex-shrink-0" />
                      <span>{evidence}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center space-x-2">
                  <Clock className="w-3 h-3" />
                  <span>Detection Window: {investigation.timeframe}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-3 h-3" />
                  <span>Continuous Monitoring</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Opportunity */}
      <div className="glass-card p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/30">
        <div className="flex items-center space-x-3 mb-4">
          <TrendingUp className="w-6 h-6 text-green-400" />
          <h2 className="text-xl font-bold text-white">Enterprise Revenue Opportunity</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">$50K-$200K</div>
            <div className="text-sm text-slate-300">Monthly Licensing</div>
            <div className="text-xs text-slate-500">Per hedge fund client</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">$500K+</div>
            <div className="text-sm text-slate-300">Enterprise Contracts</div>
            <div className="text-xs text-slate-500">Investment banks</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">$2M+</div>
            <div className="text-sm text-slate-300">Government Contracts</div>
            <div className="text-xs text-slate-500">Regulatory agencies</div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
          <p className="text-sm text-slate-300 leading-relaxed">
            <strong className="text-green-400">Market Opportunity:</strong> Financial institutions lose billions annually to insider trading. 
            Our AI-powered detection system provides early warning capabilities that can prevent massive losses and ensure regulatory compliance. 
            Current market demand exceeds $50B annually for advanced financial intelligence platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InsiderDetection;