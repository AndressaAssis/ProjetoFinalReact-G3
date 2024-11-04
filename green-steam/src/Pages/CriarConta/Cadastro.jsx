import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import style from './Cadastro.module.css';

function CustomAlert({ message, onClose }) {
    return (
        <div className={style.alertOverlay}>
            <div className={style.alertBox}>
                <p>{message}</p>
                <button onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
}

export function Cadastro() {
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowAlert(true); 
    };

    const closeAlert = () => {
        setShowAlert(false);
        navigate("/home"); 
    };

    return (
        <>
            <div className={style.Cadastro}>
                <div className={style.formContainer}>
                    <h2>Cadastro de Usuário</h2>
                    <form id="cadastroForm" onSubmit={handleSubmit}>
                        <div className={style.inputGroup}>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" id="cpf" name="cpf" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" id="telefone" name="telefone" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="cep">CEP</label>
                            <input type="text" id="cep" name="cep" placeholder="Digite seu CEP aqui" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="numero">Número</label>
                            <input type="number" id="numero" name="numero" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" name="senha" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="confirmacaoSenha">Confirmação de Senha</label>
                            <input type="password" id="confirmacaoSenha" name="confirmacaoSenha" required />
                        </div>

                        <button type="submit">Cadastrar</button>
                    </form>
                    
                    {showAlert && <CustomAlert message="Bem-vindo gamer, seu cadastro foi um sucesso!!!" onClose={closeAlert} />}
                </div>
            </div>
        </>
    );
}
