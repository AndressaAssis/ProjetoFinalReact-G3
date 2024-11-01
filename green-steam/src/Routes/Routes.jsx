import { NotFoundPage } from "../Pages/notFound/NotFound"
import { Routes, Route } from 'react-router-dom'

import { InicialPage } from '../Pages/Inicial/InicialPage';
import { SobrePage } from "../Pages/Sobre/SobrePage";


export function Rotas() {

    return(
        <>
        <Routes>
            <Route path="/*" element={<NotFoundPage />} />
            <Route path="/home" element={<InicialPage />} />
            <Route path="/sobre" element={<SobrePage />} />
        </Routes>
        </>
    )
}