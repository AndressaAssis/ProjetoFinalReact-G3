import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8081', 
  headers: { 
    'Content-Type': 'application/json',
  },
});

// Adiciona um interceptor de requisição para incluir o token JWT nos headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // ou sessionStorage.getItem('token')
    if (token) {
      console.log('Token adicionado:', token); // Log para verificar se o token está sendo adicionado
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
