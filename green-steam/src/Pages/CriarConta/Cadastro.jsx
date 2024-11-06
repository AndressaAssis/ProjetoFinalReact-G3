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
    const [alertMessage, setAlertMessage] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (senha !== confirmacaoSenha) {
            setAlertMessage("As senhas não coincidem. Por favor, tente novamente.");
            setShowAlert(true);
            return;
        }

        const data = { nome, email, cpf, telefone, cep, numero, senha };

        try {
            await adicionarCliente(data);
            setAlertMessage("Bem-vindo gamer, seu cadastro foi um sucesso!!!");
            setShowAlert(true);
        } catch (error) {
            try {
                if (error.response && error.response.data && error.response.data.message) {
                    setAlertMessage(error.response.data.message); // Mensagem de erro da API
                } else {
                    setAlertMessage("Erro ao realizar o cadastro. Tente novamente.");
                }
                setShowAlert(true);
            } catch (catchError) {
                setAlertMessage("Erro inesperado ao processar o alerta.");
                setShowAlert(true);
            }
        }
    };

    

    const closeAlert = () => {
        setShowAlert(false);
        if (alertMessage === "Bem-vindo gamer, seu cadastro foi um sucesso!!!") {
            navigate("/home");
        }
    };

    return (
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
                        <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} id="cpf" name="cpf" placeholder="Digite seu CPF aqui" required />
                    </div>
                    <div className={style.inputGroup}>
                        <label htmlFor="telefone">Telefone</label>
                        <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} id="telefone" name="telefone" placeholder="Digite seu telefone aqui" required />
                    </div>
                    <div className={style.inputGroup}>
                        <label htmlFor="cep">CEP</label>
                        <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} id="cep" name="cep" placeholder="Digite seu CEP aqui" required />
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
                {showAlert && <CustomAlert message={alertMessage} onClose={closeAlert} />}
            </div>
        </div>
    );
}
