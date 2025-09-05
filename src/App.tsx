import { useState } from 'react';
import Header from './components/Header';
import PricingModal from './components/PricingModal';
import ApiStatus from './components/ApiStatus';
import Dashboard from './components/Dashboard';
import InsiderDetection from './components/InsiderDetection';
import SocialSentiment from './components/SocialSentiment';
import PredictionEngine from './components/PredictionEngine';
import AlertsPanel from './components/AlertsPanel';
import LiveInsiderFeed from './components/LiveInsiderFeed';
import { Activity, TrendingUp, Users, Brain, AlertTriangle } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showPricing, setShowPricing] = useState(false);

  const tabs = [
    { id: 'dashboard', label: 'Overview', icon: Activity },
    { id: 'live', label: 'Live AI Feed', icon: Brain },
    { id: 'insider', label: 'Insider Detection', icon: TrendingUp },
    { id: 'social', label: 'Social Intelligence', icon: Users },
    { id: 'predictions', label: 'AI Predictions', icon: Brain },
    { id: 'alerts', label: 'Critical Alerts', icon: AlertTriangle },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'live':
        return <LiveInsiderFeed />;
      case 'insider':
        return <InsiderDetection />;
      case 'social':
        return <SocialSentiment />;
      case 'predictions':
        return <PredictionEngine />;
      case 'alerts':
        return <AlertsPanel />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 matrix-bg">
      <Header onUpgradeClick={() => setShowPricing(true)} />
      
      <div className="container mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 glass-card p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          <ApiStatus />
          {renderContent()}
        </div>
      </div>
      
      <PricingModal 
        isOpen={showPricing} 
        onClose={() => setShowPricing(false)} 
      />
    </div>
  );
}

export default App;