import { NotFoundPage } from "../Pages/notFound/NotFound";
import { Routes, Route } from 'react-router-dom';
import { InicialPage } from '../Pages/Inicial/InicialPage';
import { Login } from '../Pages/Login/LoginPage';
import {Cadastro} from '../Pages/CriarConta/Cadastro'
import { Carrinho } from '../Pages/Carrinho/Carrinho';
import { Suporte } from '../Pages/Suporte/Suporte';
import { SobreOsDevs } from '../Pages/Sobre/SobreOsDevs';

export function Rotas() {
    return (
        <Routes>
            <Route path="/home" element={<InicialPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/criarConta" element={<Cadastro />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/sobreOsDevs" element={<SobreOsDevs />} />
            <Route path="/*" element={<NotFoundPage />} /> {/* Fallback para rotas desconhecidas */}
        </Routes>
    );
}
