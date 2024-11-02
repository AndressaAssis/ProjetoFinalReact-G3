import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

export function Cadastro() {

    return (
        <>

            <Navbar />
            <div>

                <ul>
                    <li>"nome": "João Silva",</li>
                    <li>"cpf": "12345678900",</li>
                    <li>"email": "joao.silva@example.com",</li>
                    <li>"numero": "278",</li>
                    <li>"dataNascimento": "1985-05-10",</li>
                    <li>"cep": "13060-080"</li>
                </ul>

            </div>

            <Footer />
        </>
    )
}
