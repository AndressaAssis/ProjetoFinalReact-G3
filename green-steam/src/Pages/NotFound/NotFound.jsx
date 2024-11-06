import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./notFound.module.css";

export function NotFoundPage() {
    const navigate = useNavigate();
    const handleNavigation = () => navigate("/home");

    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Página não encontrada</h1>
                <h2 className={styles.errorCode}>Erro 404</h2>
                <p className={styles.message}>Desculpe, a página que você está procurando não existe.</p>
            </div>

            <img 
                src="https://i.pinimg.com/736x/9b/a5/57/9ba557f03fe0bf85d722e2560c1ab665.jpg" 
                alt="Imagem de erro 404" 
                className={styles.image}
            />

            <button onClick={handleNavigation} className={styles.backButton}>
                Voltar para a Página Inicial
            </button>
        </div>
    );
}