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

        <Footer />
        </>
    )
}