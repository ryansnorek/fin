import axios from 'axios';

const BASE_URL = {
  search: 'https://fin-service.onrender.com/fin/search',
};

export class FinnhubService {
  getTickerSymbols(query: string) {
    return axios.post(BASE_URL.search, { query });
  }
}
