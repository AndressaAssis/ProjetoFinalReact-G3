import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./notFound.module.css";

export function NotFoundPage() {
    const navigate = useNavigate();
    const handleNavigation = () => navigate("/home");

    return (
        <>
            <div className={styles.txt}>
                <h1>Página não encontrada</h1>
                <h1>Error 404: Not Found</h1>
                <p>Desculpe, a página que você está procurando não existe.</p>
            </div>

            {/* Centralizando o botão com a imagem */}
            <div className={styles.botao}>
                <button onClick={handleNavigation}>
                    <img src="https://i.pinimg.com/736x/9b/a5/57/9ba557f03fe0bf85d722e2560c1ab665.jpg" alt="Voltar" className={styles.imgBotao} />
                </button>
            </div>
        </>
    );
}