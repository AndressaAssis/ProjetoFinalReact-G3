import axios from 'axios';

<<<<<<< HEAD
export const api = axios.create({
  baseURL: 'http://localhost:8080',
=======
const api = axios.create({
  baseURL: 'http://localhost:8081',
>>>>>>> b2b1230570e0d478481acd3152b145b3974a760c
  headers: {
    'Content-Type': 'application/json',
  },
});

export const adicionarCliente = (dadosCliente) => {
  return api.post('/cliente', dadosCliente)  
}

export const adicionarJogo = (dadosDoJogo) => {
  return api.post('/jogos', dadosDoJogo);
};
