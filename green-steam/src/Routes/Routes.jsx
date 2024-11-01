import { NotFoundPage } from "../Pages/notFound/NotFound"
import { Routes, Route } from 'react-router-dom'

import { InicialPage } from '../Pages/Inicial/InicialPage';
import { JogosPage } from "../Pages/Jogos/JogosPage";

export function Rotas() {

    return(
        <>
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/home" element={<InicialPage />} />
            <Route path="/jogos" element={<JogosPage />} />
        </Routes>
        </>
    )
}