import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import styles from './Suporte.module.css'; 

export function Suporte() {
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reclamação enviada!", { email, mensagem });
        setEmail("");
        setMensagem("");
        setShowAlert(true);
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    function CustomAlert({ message, onClose }) {
        return (
            <div className={styles.alertOverlay}>
                <div className={styles.alertBox}>
                    <p>{message}</p>
                    <button onClick={onClose}>Fechar</button>
                </div>
            </div>
        );
    }

    return (
        <>
            
            <div className={styles.suporteContainer}>
                <h1>Suporte</h1>
                <h2>Queremos garantir que sua experiência de compra seja rápida, segura e fácil.
                    <br />Caso precise de assistência, nossa equipe está pronta para ajudar em todas as etapas.</h2>

                <h2>Dúvidas sobre pedidos: Acompanhe o status do seu pedido, altere informações de entrega e saiba mais sobre nossa política de envio.</h2>

                <h2>Pagamentos e reembolsos: Encontre respostas sobre formas de pagamento, segurança, e os procedimentos para reembolsos.</h2>

                <h2>Problemas com produtos: Recebeu um produto com defeito ou diferente do esperado? Confira nossas instruções para troca e devolução.</h2>
                
                <h2>Envie sua Reclamação</h2>
                <div className={styles.reclamacaoContainer}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            placeholder="Seu email" 
                            className={styles.inputLogin} 
                        />

                        <label htmlFor="mensagem">Sua Reclamação:</label>
                        <textarea 
                            id="mensagem" 
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            required 
                            placeholder="Digite sua reclamação" 
                            rows="4" 
                            className={styles.inputLogin}
                        ></textarea>

                        <button type="submit" className={styles.LoginButtons}>Enviar Reclamação</button>
                    </form>
                    {showAlert && <CustomAlert message="Obrigado pelo feedback, responderemos em breve." onClose={closeAlert} />}
                
                
                </div>
            </div>
           
        </>
    );
}