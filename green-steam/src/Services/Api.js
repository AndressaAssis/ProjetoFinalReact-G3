import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080', 
  headers: { 
    'Content-Type': 'application/json',
  },
})

export const adicionarCliente = (dadosCliente) => {
  return api.post('/cliente', dadosCliente)  
}

export const adicionarJogo = (dadosDoJogo) => {
  return api.post('/jogos', dadosDoJogo);
};
