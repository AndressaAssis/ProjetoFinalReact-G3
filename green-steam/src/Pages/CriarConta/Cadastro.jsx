import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
                            <input type="text" id="nome" name="nome" placeholder="Digite seu nome aqui" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Digite seu email aqui" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF aqui" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone aqui" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="cep">CEP</label>
                            <input type="text" id="cep" name="cep" placeholder="Digite seu CEP aqui" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="numero">Número</label>
                            <input type="number" id="numero" name="numero" placeholder="Digite o número da casa aqui" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" name="senha" placeholder="Crie uma senha" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="confirmacaoSenha">Confirmação de Senha</label>
                            <input type="password" id="confirmacaoSenha" name="confirmacaoSenha" placeholder="Confirme sua senha" required />
                        </div>

                        <button type="submit">Cadastrar</button>
                    </form>
                    
                    {showAlert && <CustomAlert message="Bem-vindo gamer, seu cadastro foi um sucesso!!!" onClose={closeAlert} />}
                </div>
            </div>
        </>
    );
}
