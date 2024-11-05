import React, { useState } from "react";  
import styles from "../Login/LoginPage.module.css";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState(""); 
    const [senha, setSenha] = useState(""); 
    const [mensagem, setMensagem] = useState(""); 

    const handleSubmit = (e) => {
        e.preventDefault(); // Impede o comportamento padrão de envio do formulário
        setMensagem(""); // Limpa a mensagem antes de validar

        // Validações
        if (!email.includes("@")) {
            setMensagem("Por favor, insira um e-mail válido contendo '@'.");
            return;  
        }
        if (senha.trim() === "") {
            setMensagem("A senha não pode ser vazia.");
            return;
        }

        // Se as validações passarem, redireciona para a página inicial
        navigate("/home");
       
    };

    // Função para redirecionar para a página de cadastro
    const handleNavigation2 = () => {
        navigate("/criarConta"); 
    };

    return (
        <div className={styles.divLoginPrincipal}> 
            <div className={styles.containerLogin}>
                <h1 className={styles.h1Login}>Login</h1> 
                {mensagem && <p className={styles.pLogin}>{mensagem}</p>} 
                <form onSubmit={handleSubmit}> 
                    <div>
                        <label className={styles.labelLogin} htmlFor="email">E-mail:</label> 
                        <input className={styles.inputLogin}
                            type="email" 
                            id="email" 
                            value={email} 
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label className={styles.labelLogin} htmlFor="senha">Senha:</label> 
                        <input className={styles.inputLogin}
                            type="password" 
                            id="senha" 
                            value={senha} 
                            placeholder="Digite a sua senha"
                            onChange={(e) => setSenha(e.target.value)} 
                            required 
                        />
                    </div>
                    <button className={styles.LoginButtons} type="submit">Entrar</button> 
                    <div className={styles.containerButtonLogin}>
                        <p className={styles.pLogin}>Ou Crie sua conta aqui</p>
                        <button type="button" className={styles.LoginButtons} onClick={handleNavigation2}>Cria Conta</button> 
                    </div>
                </form>
            </div>
        </div>
    );
}
