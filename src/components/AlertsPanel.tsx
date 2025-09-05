import React from 'react';
import { AlertTriangle, Bell, Clock, Shield, Zap, TrendingUp, Brain } from 'lucide-react';

const AlertsPanel = () => {
  const criticalAlerts = [
    {
      id: 1,
      symbol: 'TSLA',
      type: 'Insider Trading Detected',
      severity: 'Critical',
      time: '2 min ago',
      description: 'Board member family trust executed large position changes 3 hours before earnings leak on social media',
      confidence: '97%',
      action: 'SEC Notification Recommended',
      potentialValue: '$2.3M prevented losses'
    },
    {
      id: 2,
      symbol: 'META',
      type: 'Executive Communication Anomaly',
      severity: 'High',
      time: '8 min ago',
      description: 'Encrypted messaging spike between C-suite executives correlates with unusual options activity',
      confidence: '89%',
      action: 'Monitor & Document',
      potentialValue: '$1.7M exposure'
    },
    {
      id: 3,
      symbol: 'NVDA',
      type: 'Social Sentiment Manipulation',
      severity: 'High',
      time: '15 min ago',
      description: 'Coordinated bot network pushing negative sentiment before earnings announcement',
      confidence: '94%',
      action: 'Counter-Intelligence Active',
      potentialValue: '$890K impact'
    }
  ];

  const monitoringStats = [
    { label: 'Active Surveillance Targets', value: '2,847', icon: Shield },
    { label: 'Real-time Data Streams', value: '156', icon: Zap },
    { label: 'AI Models Running', value: '12', icon: Brain },
    { label: 'Alerts Generated Today', value: '89', icon: Bell }
  ];

  const revenueMetrics = [
    { label: 'Client Savings This Month', value: '$47.2M', change: '+23%' },
    { label: 'Insider Events Predicted', value: '234', change: '+45%' },
    { label: 'Regulatory Violations Prevented', value: '67', change: '+12%' },
    { label: 'Market Manipulation Detected', value: '89', change: '+78%' }
  ];

  return (
    <div className="space-y-6">
      {/* Critical Alerts */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <h2 className="text-xl font-bold text-white">Critical Intelligence Alerts</h2>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <span className="text-sm text-red-300">Live Monitoring</span>
          </div>
        </div>

        <div className="space-y-4">
          {criticalAlerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`p-5 rounded-lg border-l-4 ${
                alert.severity === 'Critical' 
                  ? 'alert-critical border-l-red-500' 
                  : 'alert-high border-l-orange-500'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-white">{alert.symbol}</span>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    alert.severity === 'Critical' 
                      ? 'bg-red-900/30 text-red-300 border border-red-500/30' 
                      : 'bg-orange-900/30 text-orange-300 border border-orange-500/30'
                  }`}>
                    {alert.severity}
                  </div>
                  <span className="text-xs text-slate-400">{alert.time}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-green-400">{alert.confidence}</div>
                  <div className="text-xs text-slate-400">Confidence</div>
                </div>
              </div>

              <h4 className="font-semibold text-white mb-2">{alert.type}</h4>
              <p className="text-sm text-slate-300 mb-3">{alert.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-slate-500">Recommended Action:</span>
                  <div className="text-yellow-400 font-medium">{alert.action}</div>
                </div>
                <div>
                  <span className="text-slate-500">Financial Impact:</span>
                  <div className="text-green-400 font-medium">{alert.potentialValue}</div>
                </div>
                <div>
                  <span className="text-slate-500">AI Confidence:</span>
                  <div className="text-blue-400 font-medium">{alert.confidence}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monitoring Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {monitoringStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="metric-card">
              <div className="flex items-center space-x-3 mb-3">
                <Icon className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-slate-400">{stat.label}</span>
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
            </div>
          );
        })}
      </div>

      {/* Revenue Impact */}
      <div className="glass-card p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/30">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="w-6 h-6 text-green-400" />
          <h2 className="text-xl font-bold text-white">Financial Intelligence Impact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {revenueMetrics.map((metric, index) => (
            <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl font-bold text-green-400 mb-1">{metric.value}</div>
              <div className="text-sm text-slate-300 mb-1">{metric.label}</div>
              <div className="text-xs text-green-400">{metric.change}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-slate-800/50 rounded-lg border border-green-500/30">
            <h3 className="font-semibold text-green-300 mb-2">Enterprise Value Proposition</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Market Mind's advanced AI system monitors <strong className="text-blue-400">23.7 million data points per hour</strong> 
              across social media, trading platforms, and communication networks. Our proprietary algorithms detect insider trading 
              patterns with <strong className="text-green-400">94.2% accuracy</strong>, providing institutional clients with 
              24-96 hour advance warning of major market movements.
            </p>
          </div>

          <div className="p-4 bg-slate-800/50 rounded-lg border border-yellow-500/30">
            <h3 className="font-semibold text-yellow-300 mb-2">Revenue Opportunity</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-green-400 font-bold">$50K-$200K/month</div>
                <div className="text-slate-400">Hedge Fund Licensing</div>
              </div>
              <div>
                <div className="text-green-400 font-bold">$500K-$2M/year</div>
                <div className="text-slate-400">Investment Bank Contracts</div>
              </div>
              <div>
                <div className="text-green-400 font-bold">$5M+/year</div>
                <div className="text-slate-400">Government/Regulatory Agencies</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-red-900/20 rounded-lg border border-red-500/30">
            <div className="flex items-center space-x-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="font-semibold text-red-300">Regulatory Compliance Notice</span>
            </div>
            <p className="text-xs text-slate-400">
              This system is designed for regulatory compliance and market integrity purposes. All detected activities 
              are reported to appropriate authorities. Market Mind operates within legal frameworks and assists in 
              maintaining fair and transparent markets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsPanel;