import React from 'react';
import { Brain, Cpu, Zap, Target, TrendingUp, AlertTriangle } from 'lucide-react';

const PredictionEngine = () => {
  const aiModels = [
    {
      name: 'Neural Market Predictor',
      type: 'Deep Learning',
      accuracy: '94.2%',
      status: 'Active',
      predictions: '1,247',
      specialty: 'Price Movement Prediction'
    },
    {
      name: 'Sentiment Fusion AI',
      type: 'NLP + ML',
      accuracy: '89.7%',
      status: 'Active',
      predictions: '892',
      specialty: 'Social Sentiment Analysis'
    },
    {
      name: 'Insider Pattern Detector',
      type: 'Behavioral AI',
      accuracy: '91.3%',
      status: 'Active',
      predictions: '456',
      specialty: 'Insider Trading Detection'
    },
    {
      name: 'Market Manipulation Scanner',
      type: 'Anomaly Detection',
      accuracy: '87.9%',
      status: 'Active',
      predictions: '234',
      specialty: 'Pump & Dump Detection'
    }
  ];

  const recentPredictions = [
    {
      symbol: 'TSLA',
      prediction: 'Major price movement expected',
      confidence: '96%',
      timeframe: '24-48 hours',
      reasoning: 'Insider social activity + unusual options flow + executive travel patterns',
      potentialMove: '+12% to +18%',
      risk: 'Low'
    },
    {
      symbol: 'NVDA',
      prediction: 'Earnings beat likely',
      confidence: '89%',
      timeframe: '72 hours',
      reasoning: 'Supply chain insider chatter + positive sentiment surge + institutional accumulation',
      potentialMove: '+8% to +15%',
      risk: 'Medium'
    },
    {
      symbol: 'META',
      prediction: 'Regulatory announcement incoming',
      confidence: '92%',
      timeframe: '48-96 hours',
      reasoning: 'Government official social patterns + legal team activity + media preparation',
      potentialMove: '-5% to -12%',
      risk: 'High'
    }
  ];

  const marketIntelligence = [
    {
      category: 'Insider Trading Detection',
      value: '$2.3M',
      description: 'Potential losses prevented this week',
      trend: 'up'
    },
    {
      category: 'Market Manipulation',
      value: '47',
      description: 'Pump & dump schemes identified',
      trend: 'up'
    },
    {
      category: 'Regulatory Intelligence',
      value: '12',
      description: 'Policy changes predicted early',
      trend: 'up'
    },
    {
      category: 'Institutional Flow',
      value: '$847M',
      description: 'Dark pool activity monitored',
      trend: 'up'
    }
  ];

  return (
    <div className="space-y-6">
      {/* AI Models Status */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Brain className="w-6 h-6 text-purple-400" />
          <h2 className="text-xl font-bold text-white">AI Prediction Models</h2>
          <div className="px-2 py-1 bg-purple-900/30 rounded text-xs text-purple-300 border border-purple-500/30">
            NEURAL NETWORK ACTIVE
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aiModels.map((model, index) => (
            <div key={index} className="p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">{model.name}</h3>
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400">ONLINE</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 mb-3">{model.specialty}</p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500">Type:</span>
                  <div className="text-slate-300 font-medium">{model.type}</div>
                </div>
                <div>
                  <span className="text-slate-500">Accuracy:</span>
                  <div className="text-green-400 font-bold">{model.accuracy}</div>
                </div>
                <div>
                  <span className="text-slate-500">Predictions:</span>
                  <div className="text-blue-400 font-medium">{model.predictions}</div>
                </div>
                <div>
                  <span className="text-slate-500">Status:</span>
                  <div className="text-green-400 font-medium">{model.status}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Predictions */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Target className="w-6 h-6 text-green-400" />
          <h2 className="text-xl font-bold text-white">High-Confidence Predictions</h2>
        </div>

        <div className="space-y-4">
          {recentPredictions.map((prediction, index) => (
            <div key={index} className="p-5 bg-slate-800/30 rounded-lg border border-slate-700/50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold text-white">{prediction.symbol}</span>
                  <div className="px-3 py-1 bg-blue-900/30 rounded-full text-xs text-blue-300 border border-blue-500/30">
                    {prediction.confidence} Confidence
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-white">{prediction.potentialMove}</div>
                  <div className="text-xs text-slate-400">{prediction.timeframe}</div>
                </div>
              </div>

              <h4 className="font-semibold text-slate-200 mb-2">{prediction.prediction}</h4>
              <p className="text-sm text-slate-400 mb-3">{prediction.reasoning}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs">
                  <span className="text-slate-500">Risk Level:</span>
                  <span className={`font-medium ${
                    prediction.risk === 'Low' ? 'text-green-400' :
                    prediction.risk === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {prediction.risk}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs text-slate-400">AI Generated</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Intelligence Value */}
      <div className="glass-card p-6 bg-gradient-to-r from-green-900/20 to-purple-900/20 border-green-500/30">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUp className="w-6 h-6 text-green-400" />
          <h2 className="text-xl font-bold text-white">Intelligence Value Metrics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {marketIntelligence.map((metric, index) => (
            <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl font-bold text-green-400 mb-1">{metric.value}</div>
              <div className="text-sm font-medium text-slate-300 mb-1">{metric.category}</div>
              <div className="text-xs text-slate-500">{metric.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-green-500/30">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-green-400" />
            <span className="font-semibold text-green-300">Enterprise Revenue Opportunity</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            <strong className="text-green-400">Market Mind's AI-powered insider detection system</strong> represents a 
            revolutionary approach to financial intelligence. By combining social media monitoring, behavioral analysis, 
            and advanced pattern recognition, we can predict market-moving events 24-96 hours before they occur. 
            <strong className="text-yellow-400"> Hedge funds and investment banks pay $50K-$200K monthly</strong> for 
            this level of predictive intelligence, with enterprise contracts reaching $2M+ annually.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PredictionEngine;