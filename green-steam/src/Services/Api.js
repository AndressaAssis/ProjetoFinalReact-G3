import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const adicionarJogo = (dadosDoJogo) => {
  return api.post('/jogos', dadosDoJogo);
};
export default api;