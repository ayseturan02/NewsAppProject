import axios from 'axios';

const BASE_URL = 'https://newsapi.org/v2/everything';
const API_KEY = '08b2151527954e72bf95187b7f3e2a1e';

export const getTeslaNews = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: 'tesla',
        from: '2024-11-13',
        sortBy: 'publishedAt',
        apiKey: API_KEY,
      },
    });
    return response.data.articles; // Gelen haber makaleleri
  } catch (error) {
    console.error('Haberler çekilemedi:', error);
    throw error;
  }
};
