import React from 'react';
import { Brain, Shield, Zap, CreditCard } from 'lucide-react';

interface HeaderProps {
  onUpgradeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onUpgradeClick }) => {
  return (
    <header className="glass-card border-b border-slate-800/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Brain className="w-8 h-8 text-blue-400" />
              <div className="absolute inset-0 w-8 h-8 bg-blue-400/20 rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Market Mind
              </h1>
              <p className="text-xs text-slate-400">Advanced Market Intelligence Platform</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-slate-300">Live Data Stream</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">Encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-slate-300">AI Active</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={onUpgradeClick}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg text-white font-medium transition-all hover:scale-105"
              >
                <CreditCard className="w-4 h-4" />
                <span>Upgrade</span>
              </button>
              <div className="text-right">
              <div className="text-sm font-medium text-slate-200">Enterprise License</div>
              <div className="text-xs text-slate-400">Regulatory Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;