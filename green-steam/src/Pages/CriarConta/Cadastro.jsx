import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './Cadastro.module.css';
import { adicionarCliente } from '../../Services/Api'; 

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
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (senha !== confirmacaoSenha) {
            alert("As senhas não coincidem. Por favor, tente novamente.");
            return;
        }

       
        adicionarCliente({ nome, email, cpf, telefone, cep, numero, senha })
            .then(() => {
                console.log('Cadastro realizado com sucesso');
                setShowAlert(true);
            })
            .catch((error) => {
                console.error(error);
                alert("Ocorreu um erro ao realizar o cadastro.");
            });
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
                    <form id="cadastroDeCliente" onSubmit={handleSubmit}>
                        <div className={style.inputGroup}>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} id="nome" name="nome" placeholder="Digite seu nome aqui" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" placeholder="Digite seu email aqui" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" maxLength="11" value={cpf} onChange={(e) => setCpf(e.target.value)} id="cpf" name="cpf" placeholder="Digite seu CPF aqui" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="telefone">Telefone</label>
                            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} id="telefone" name="telefone" placeholder="Digite seu telefone aqui" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="cep">CEP</label>
                            <input type="text" maxLength="8" value={cep} onChange={(e) => setCep(e.target.value)} id="cep" name="cep" placeholder="Digite seu CEP aqui" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="numero">Número</label>
                            <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} id="numero" name="numero" placeholder="Digite o número da casa aqui" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="senha">Senha</label>
                            <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} id="senha" name="senha" placeholder="Crie uma senha" required />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="confirmacaoSenha">Confirmação de Senha</label>
                            <input type="password" value={confirmacaoSenha} onChange={(e) => setConfirmacaoSenha(e.target.value)} id="confirmacaoSenha" name="confirmacaoSenha" placeholder="Confirme sua senha" required />
                        </div>

                        <button type="submit">Cadastrar</button>
                    </form>

                    {showAlert && <CustomAlert message="Bem-vindo gamer, seu cadastro foi um sucesso!!!" onClose={closeAlert} />}
                </div>
            </div>
        </>
    );
}
