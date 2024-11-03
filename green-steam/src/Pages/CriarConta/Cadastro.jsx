import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import style from './Cadastro.module.css';

export function Cadastro() {
    return (
        <>
            <Navbar />
            <div className={style.Cadastro}>
                <div className={style.formContainer}>
                    <h2>Cadastro de Usuário</h2>
                    <form id="cadastroForm">
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
                </div>
            </div>
            <Footer />
        </>
    );
}
