import React, { useState } from "react"; 
import { Navbar } from "../../Components/Navbar/Navbar"; 
import { Footer } from "../../Components/Footer/Footer"; 
import styles from "../Login/LoginPage.module.css"
export function Login() {
    const [email, setEmail] = useState(""); 
    const [senha, setSenha] = useState(""); 
    const [mensagem, setMensagem] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (!email.includes("@")) {
            setMensagem("Por favor, insira um e-mail válido contendo '@'.");
            return;
        }
        if (senha.trim() === "") {
            setMensagem("A senha não pode ser vazia.");
            return;
        }
        setMensagem("Login realizado com sucesso!"); // Simulação de sucesso
        // Aqui você pode adicionar a lógica para autenticação e redirecionamento
    };

    return (
        <>
            <Navbar /> 
            <div className={styles.containerLogin}>
                <h1>Login</h1> 
                {mensagem && <p>{mensagem}</p>} 
                <form onSubmit={handleSubmit}> 
                    <div>
                        <label htmlFor="email">E-mail:</label> 
                        <input
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="senha">Senha:</label> 
                        <input
                            type="password" 
                            id="senha" 
                            value={senha} 
                            onChange={(e) => setSenha(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit">Entrar</button> 
                </form>
            </div>
            <Footer /> 
        </>
    );
}

/*
import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

export function Login() {

    return(
        <>
        <Navbar />
        <div>
        
        </div>
        <Footer />
        </>
    )
}*/