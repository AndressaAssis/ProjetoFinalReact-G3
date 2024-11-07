import React, { useState } from "react";  
import styles from '../CriarConta/Cadastro.module.css';
import { useNavigate } from "react-router-dom";
import { adicionarCliente } from '../../Services/Api';

export function Cadastro() {
    const navigate = useNavigate();

    const [nome, setNome] = useState(""); 
    const [cpf, setCpf] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [senha, setSenha] = useState(""); 
    const [numero, setNumero] = useState(""); 
    const [dataNascimento, setDataNascimento] = useState(""); 
    const [cep, setCep] = useState(""); 
    const [logradouro, setLogradouro] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");
    const [mensagem, setMensagem] = useState(""); 

    const handleCepChange = async (e) => {
        const cepValue = e.target.value;
        setCep(cepValue);

        if (cepValue.length === 8) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
                const data = await response.json();
                if (!data.erro) {
                    setLogradouro(data.logradouro);
                    setBairro(data.bairro);
                    setCidade(data.localidade);
                    setUf(data.uf);
                } else {
                    setMensagem("CEP não encontrado.");
                }
            } catch (error) {
                setMensagem("Erro ao buscar o CEP. Tente novamente.");
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensagem("");

        // Validações
        if (!email.includes("@")) {
            setMensagem("Por favor, insira um e-mail válido contendo '@'.");
            return;  
        }
        if (cpf.trim().length !== 11) {
            setMensagem("O CPF deve ter 11 dígitos.");
            return;
        }
        if (senha.trim().length < 6) {
            setMensagem("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        try {
            const response = await adicionarCliente({ 
                nome, 
                cpf, 
                email, 
                senha, 
                numero, 
                dataNascimento, 
                cep,
                logradouro, 
                bairro, 
                cidade, 
                uf
            });

            if (response.status === 201) {
                setMensagem("Cadastro realizado com sucesso!");
                navigate("/login");
            } else {
                setMensagem(response.data.message || "Erro ao realizar cadastro. Tente novamente.");
            }
        } catch (error) {
            setMensagem("Erro ao realizar cadastro. Tente novamente.");
        }
    };

    return (
        <div className={styles.divCadastroPrincipal}> 
            <div className={styles.containerCadastro}>
                <h1 className={styles.h1Cadastro}>Cadastro de Cliente</h1> 
                {mensagem && <p className={styles.pCadastro}>{mensagem}</p>} 
                <form onSubmit={handleSubmit}> 
                    <div>
                        <label className={styles.labelCadastro} htmlFor="nome">Nome:</label> 
                        <input className={styles.inputCadastro}
                            type="text" 
                            id="nome" 
                            value={nome} 
                            placeholder="Digite seu nome"
                            onChange={(e) => setNome(e.target.value)} 
                            required 
                            autoComplete="name"
                        />
                    </div>
                    <div>
                        <label className={styles.labelCadastro} htmlFor="cpf">CPF:</label> 
                        <input className={styles.inputCadastro}
                            type="text" 
                            id="cpf" 
                            value={cpf} 
                            placeholder="Digite seu CPF"
                            onChange={(e) => setCpf(e.target.value)} 
                            required 
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label className={styles.labelCadastro} htmlFor="email">E-mail:</label> 
                        <input className={styles.inputCadastro}
                            type="email" 
                            id="email" 
                            value={email} 
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            autoComplete="email"
                        />
                    </div>
                    <div>
                        <label className={styles.labelCadastro} htmlFor="senha">Senha:</label> 
                        <input className={styles.inputCadastro}
                            type="password" 
                            id="senha" 
                            value={senha} 
                            placeholder="Digite sua senha"
                            onChange={(e) => setSenha(e.target.value)} 
                            required 
                            autoComplete="new-password"
                        />
                    </div>
                    <div>
                        <label className={styles.labelCadastro} htmlFor="numero">Número:</label> 
                        <input className={styles.inputCadastro}
                            type="text" 
                            id="numero" 
                            value={numero} 
                            placeholder="Digite o número"
                            onChange={(e) => setNumero(e.target.value)} 
                            required 
                            autoComplete="off"
                        />
                    </div>
                    <div>
                        <label className={styles.labelCadastro} htmlFor="dataNascimento">Data de Nascimento:</label> 
                        <input className={styles.inputCadastro}
                            type="date" 
                            id="dataNascimento" 
                            value={dataNascimento} 
                            onChange={(e) => setDataNascimento(e.target.value)} 
                            required 
                            autoComplete="bday"
                        />
                    </div>
                    <div>
                        <label className={styles.labelCadastro} htmlFor="cep">CEP:</label> 
                        <input className={styles.inputCadastro}
                            type="text" 
                            id="cep" 
                            value={cep} 
                            placeholder="Digite seu CEP"
                            onChange={handleCepChange} 
                            required 
                            autoComplete="postal-code"
                        />
                    </div>
                    <div>
                        <label className={styles.labelCadastro} htmlFor="logradouro">Logradouro:</label> 
                        <input className={styles.inputCadastro}
                            type="text" 
                            id="logradouro" 
                            value={logradouro} 
                            placeholder="Logradouro"
                            readOnly 
                        />
                    </div>
                    <div>
                        <label className={styles.labelCadastro} htmlFor="bairro">Bairro:</label> 
                        <input className={styles.inputCadastro}
                            type="text" 
                            id="bairro" 
                            value={bairro} 
                            placeholder="Bairro"
                            readOnly 
                        />
                    </div>
                    <div>
                        <label className={styles.labelCadastro} htmlFor="cidade">Cidade:</label> 
                        <input className={styles.inputCadastro}
                            type="text" 
                            id="cidade" 
                            value={cidade} 
                            placeholder="Cidade"
                            readOnly 
                        />
                    </div>
                    <div>
                        <label className={styles.labelCadastro} htmlFor="uf">UF:</label> 
                        <input className={styles.inputCadastro}
                            type="text" 
                            id="uf" 
                            value={uf} 
                            placeholder="UF"
                            readOnly 
                        />
                    </div>
                    <button className={styles.buttonCadastro} type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
