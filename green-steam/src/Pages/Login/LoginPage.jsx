import React, { useState } from "react";  
import styles from "../Login/LoginPage.module.css"
import { useNavigate } from "react-router-dom";
export function Login() {

    // useNavigate é chamado no corpo do componente
    const navigate=useNavigate();

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
        //mensagem que apareceria na tela de login se o botão nao levasse para pag home
        /*setMensagem("Login realizado com sucesso!"); */
    };

    // Função para redirecionar para a página de cadastro e home page
    const handleNavigation2 = () => {
        navigate("/criarConta"); 
    };

    const handleNavigation = () =>{
        navigate("/home");
    }


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
                            onChange={(e) => setSenha(e.target.value)} 
                            required 
                        />
                    </div>
                    <button className={styles.LoginButtons} onClick={handleNavigation}>Entrar</button> 
                    <div className={styles.containerButtonLogin}>
                    <p className={styles.pLogin}>Ou Crie sua conta aqui</p>
                    <button className={styles.LoginButtons} onClick={handleNavigation2}>Cria Conta</button> 
                    </div>
                </form>
            </div>
        </div>
    );
}
