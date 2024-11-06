import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080', 
  headers: { 
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); 
    if (token) {
      console.log('Token adicionado:', token); 
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const adicionarCliente = (dadosCliente) => {
  return api.post('/clientes', dadosCliente);
};

export const adicionarJogo = (dadosDoJogo) => {
  return api.post('/jogos', dadosDoJogo);
};
