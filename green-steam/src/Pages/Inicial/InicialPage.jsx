import { useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

export function InicialPage() {

    useEffect(()=> {
        console.log("Página inicial carregada")
        
    });

    return(
        <>
        <Navbar />

        <div>
            <h1>Página Inicial</h1>
            <p>Este é o conteúdo da sua página inicial.</p>
        </div>
        <Footer />
        </>
    );
}