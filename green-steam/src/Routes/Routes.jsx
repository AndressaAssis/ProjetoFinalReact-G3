import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { InicialPage } from '../Pages/Inicial/InicialPage.jsx';
import { Login } from '../Pages/Login/LoginPage.jsx';
import { Cadastro } from '../Pages/CriarConta/Cadastro.jsx';
import { Suporte } from '../Pages/Suporte/Suporte.jsx';
import { SobreOsDevs } from '../Pages/Sobre/SobreOsDevs.jsx';
import Carrinho from '../Pages/Carrinho/Carrinho.jsx'; 
import { NotFoundPage } from '../Pages/notFound/NotFound.jsx';
import { AdicionarJogos } from '../Pages/AdicionarJogos/AdicionarJogos.jsx'; 
import FinalizarCompra from '../Pages/FinalizarCompras/FinalizarCompras.jsx';
import { NossosClientes } from '../Pages/NossosClientes/NossosClientes.jsx'; 

export function Rotas() {
    return (
        <Routes>
            <Route path="/home" element={<InicialPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/criarConta" element={<Cadastro />} />
            <Route path="/carrinho" element={<Carrinho />} /> 
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/sobreOsDevs" element={<SobreOsDevs />} />
            <Route path="/adicionarJogos" element={<AdicionarJogos />} /> 
            <Route path="/finalizar-compra" element={<FinalizarCompra />} />
            <Route path="/nossos-clientes" element={<NossosClientes />} /> {/* Nova rota */}
            <Route path="/*" element={<NotFoundPage />} /> 
        </Routes>
    );
}

export default Rotas;
