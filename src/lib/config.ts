// API Configuration for Market Mind
export const API_CONFIG = {
  // AI Services
  openai: {
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    baseUrl: 'https://api.openai.com/v1',
    model: 'gpt-4-turbo-preview'
  },
  
  anthropic: {
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    baseUrl: 'https://api.anthropic.com/v1',
    model: 'claude-3-sonnet-20240229'
  },
  
  gemini: {
    apiKey: import.meta.env.VITE_GOOGLE_GEMINI_API_KEY,
    baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
    model: 'gemini-pro'
  },
  
  // Market Data
  finnhub: {
    apiKey: import.meta.env.VITE_FINNHUB_API_KEY,
    baseUrl: 'https://finnhub.io/api/v1',
    websocket: 'wss://ws.finnhub.io'
  },
  
  polygon: {
    apiKey: import.meta.env.VITE_POLYGON_API_KEY,
    baseUrl: 'https://api.polygon.io/v2',
    websocket: 'wss://socket.polygon.io'
  },
  
  alphaVantage: {
    apiKey: import.meta.env.VITE_ALPHA_VANTAGE_API_KEY,
    baseUrl: 'https://www.alphavantage.co/query'
  },
  
  // Social Media
  twitter: {
    bearerToken: import.meta.env.VITE_TWITTER_BEARER_TOKEN,
    baseUrl: 'https://api.twitter.com/2'
  },
  
  reddit: {
    clientId: import.meta.env.VITE_REDDIT_CLIENT_ID,
    clientSecret: import.meta.env.VITE_REDDIT_CLIENT_SECRET,
    baseUrl: 'https://oauth.reddit.com'
  },
  
  // News & Sentiment
  newsApi: {
    apiKey: import.meta.env.VITE_NEWS_API_KEY,
    baseUrl: 'https://newsapi.org/v2'
  }
};

// Validation function to check if APIs are configured
export const validateApiKeys = () => {
  const missing = [];
  
  if (!API_CONFIG.openai.apiKey) missing.push('OpenAI API Key');
  if (!API_CONFIG.anthropic.apiKey) missing.push('Anthropic API Key');
  if (!API_CONFIG.gemini.apiKey) missing.push('Google Gemini API Key');
  if (!API_CONFIG.finnhub.apiKey) missing.push('Finnhub API Key');
  if (!API_CONFIG.polygon.apiKey) missing.push('Polygon API Key');
  
  return {
    isValid: missing.length === 0,
    missing
  };
};