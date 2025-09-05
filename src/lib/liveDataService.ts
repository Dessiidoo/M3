import { API_CONFIG } from './config';

// Real-time market data service
export class LiveDataService {
  private wsConnections: Map<string, WebSocket> = new Map();
  private dataCallbacks: Map<string, Function[]> = new Map();

  async getStockPrice(symbol: string) {
    try {
      if (!API_CONFIG.finnhub.apiKey) {
        return {
          symbol,
          price: Math.random() * 100 + 200,
          change: (Math.random() - 0.5) * 10,
          changePercent: (Math.random() - 0.5) * 5,
          volume: Math.floor(Math.random() * 1000000),
          timestamp: Date.now()
        };
      }
      
      const response = await fetch(
        `${API_CONFIG.finnhub.baseUrl}/quote?symbol=${symbol}&token=${API_CONFIG.finnhub.apiKey}`
      );
      const data = await response.json();
      return {
        symbol,
        price: data.c,
        change: data.d,
        changePercent: data.dp,
        volume: data.v,
        timestamp: Date.now()
      };
    } catch (error) {
      console.error('Error fetching stock price:', error);
      return null;
    }
  }

  async getInsiderTrades(symbol: string) {
    try {
      if (!API_CONFIG.finnhub.apiKey) {
        return [];
      }
      
      const response = await fetch(
        `${API_CONFIG.finnhub.baseUrl}/stock/insider-transactions?symbol=${symbol}&token=${API_CONFIG.finnhub.apiKey}`
      );
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.error('Error fetching insider trades:', error);
      return [];
    }
  }

  async getOptionsFlow(symbol: string) {
    try {
      if (!API_CONFIG.polygon.apiKey) {
        return [];
      }
      
      const response = await fetch(
        `${API_CONFIG.polygon.baseUrl}/options/trades/${symbol}?apikey=${API_CONFIG.polygon.apiKey}`
      );
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error('Error fetching options flow:', error);
      return [];
    }
  }

  async getSocialSentiment(query: string) {
    try {
      if (!API_CONFIG.newsApi.apiKey) {
        return [];
      }
      
      const response = await fetch(
        `${API_CONFIG.newsApi.baseUrl}/everything?q=${query}&apiKey=${API_CONFIG.newsApi.apiKey}&sortBy=publishedAt&pageSize=50`
      );
      const data = await response.json();
      return data.articles || [];
    } catch (error) {
      console.error('Error fetching social sentiment:', error);
      return [];
    }
  }

  startRealTimeUpdates(symbols: string[], callback: Function) {
    if (!API_CONFIG.finnhub.apiKey) {
      console.log('No Finnhub API key, skipping real-time updates');
      return;
    }

    try {
      const ws = new WebSocket(`${API_CONFIG.finnhub.websocket}?token=${API_CONFIG.finnhub.apiKey}`);
    
      ws.onopen = () => {
        console.log('🚀 Live market data stream connected!');
        symbols.forEach(symbol => {
          ws.send(JSON.stringify({ type: 'subscribe', symbol }));
        });
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'trade') {
            callback(data);
          }
        } catch (error) {
          console.error('WebSocket message error:', error);
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      this.wsConnections.set('market-data', ws);
    } catch (error) {
      console.error('Error creating WebSocket:', error);
    }
  }

  stopRealTimeUpdates() {
    this.wsConnections.forEach(ws => ws.close());
    this.wsConnections.clear();
  }
}

export const liveDataService = new LiveDataService();