import React, { useState } from "react";
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
                Nossa equipe está pronta para ajudar em todas as etapas. Se você tiver dúvidas, 
                sugestões ou reclamações, envie-nos uma mensagem!</h2>

                
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

                        <label htmlFor="mensagem">Sua Mensagem:</label>
                        <textarea 
                            id="mensagem" 
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            required 
                            placeholder="Digite sua dúvida, sugestão ou reclamação" 
                            rows="4" 
                            className={styles.inputLogin}
                        ></textarea>

                        <button type="submit" className={styles.LoginButtons}>Enviar</button>
                    </form>
                    {showAlert && <CustomAlert message="Obrigado pelo feedback, responderemos em breve." onClose={closeAlert} />}
                
                
                </div>
            </div>
           
        </>
    );
}