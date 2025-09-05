import React from 'react';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { validateApiKeys } from '../lib/config';

const ApiStatus = () => {
  const { isValid, missing } = validateApiKeys();
  
  const apiServices = [
    { name: 'OpenAI GPT-4', key: 'VITE_OPENAI_API_KEY', status: !!import.meta.env.VITE_OPENAI_API_KEY },
    { name: 'Anthropic Claude', key: 'VITE_ANTHROPIC_API_KEY', status: !!import.meta.env.VITE_ANTHROPIC_API_KEY },
    { name: 'Google Gemini', key: 'VITE_GOOGLE_GEMINI_API_KEY', status: !!import.meta.env.VITE_GOOGLE_GEMINI_API_KEY },
    { name: 'Finnhub Market Data', key: 'VITE_FINNHUB_API_KEY', status: !!import.meta.env.VITE_FINNHUB_API_KEY },
    { name: 'Polygon.io', key: 'VITE_POLYGON_API_KEY', status: !!import.meta.env.VITE_POLYGON_API_KEY },
    { name: 'Twitter API', key: 'VITE_TWITTER_BEARER_TOKEN', status: !!import.meta.env.VITE_TWITTER_BEARER_TOKEN },
    { name: 'Reddit API', key: 'VITE_REDDIT_CLIENT_ID', status: !!import.meta.env.VITE_REDDIT_CLIENT_ID }
  ];

  return (
    <div className="glass-card p-6 mb-6">
      <div className="flex items-center space-x-3 mb-4">
        {isValid ? (
          <CheckCircle className="w-6 h-6 text-green-400" />
        ) : (
          <AlertTriangle className="w-6 h-6 text-yellow-400" />
        )}
        <h2 className="text-xl font-bold text-white">API Services Status</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {apiServices.map((service) => (
          <div key={service.name} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
            <span className="text-sm text-slate-300">{service.name}</span>
            {service.status ? (
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-xs text-green-400">Connected</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="text-xs text-red-400">Missing Key</span>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {!isValid && (
        <div className="mt-4 p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
          <p className="text-sm text-yellow-300">
            <strong>Setup Required:</strong> Add the missing API keys to your .env file to enable real-time data.
            Once configured, Market Mind will use live market data and AI analysis instead of simulated data.
          </p>
        </div>
      )}
      
      {isValid && (
        <div className="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-500/30">
          <p className="text-sm text-green-300">
            <strong>All Systems Operational:</strong> Market Mind is now using real-time data and AI analysis.
            Live insider detection and market intelligence are active!
          </p>
        </div>
      )}
    </div>
  );
};

export default ApiStatus;