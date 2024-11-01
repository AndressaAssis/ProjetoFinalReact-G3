import React from "react";
import styles from "./Jogos.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";

export function JogosPage() {

    const jogos = [
        {nome: "Produto 1", descricao: "Descrição do produto 1", preco: 100, desconto: 10, imagem: "url-da-imagem-1.jpg"},
        {nome: "Produto 2", descricao: "Descrição do produto 2", preco: 200, desconto: 5, imagem: "url-da-imagem-2.jpg"},
        {nome: "Produto 3", descricao: "Descrição do produto 3", preco: 300, desconto: 0, imagem: "url-da-imagem-3.jpg"},
        {nome: "Produto 4", descricao: "Descrição do produto 4", preco: 400, desconto: 1, imagem: "url-da-imagem-4.jpg"},
        {nome: "Produto 5", descricao: "Descrição do produto 5", preco: 300, desconto: 25, imagem: "url-da-imagem-5.jpg"},
        {nome: "Produto 6", descricao: "Descrição do produto 6", preco: 120, desconto: 30, imagem: "url-da-imagem-6.jpg"},
        {nome: "Produto 7", descricao: "Descrição do produto 7", preco: 80, desconto: 8, imagem: "url-da-imagem-7.jpg"},
        {nome: "Produto 8", descricao: "Descrição do produto 8", preco: 175, desconto: 18, imagem: "url-da-imagem-8.jpg"},
        {nome: "Produto 9", descricao: "Descrição do produto 9", preco: 190, desconto: 12, imagem: "url-da-imagem-9.jpg"},
        {nome: "Produto 10", descricao: "Descrição do produto 10", preco: 220, desconto: 10, imagem: "url-da-imagem-10.jpg"}
      ];
    
    return (

        <>
        <Navbar />

        <div className={styles.jogos-lista}>
            {jogos.map((produto, index) => {

                const precoFinal = jogo.preco - (jogo.preco * jogo.desconto / 100);

                    <div className={styles.jogos-item} key={index}>
                        <img src={produto.imagem} alt={produto.nome} />
                        <h3>{produto.nome}</h3>
                        <p>{produto.descricao}</p>
                        <p>Preço: R$ {produto.preco.toFixed(2)}</p>
                        <p>Desconto: {produto.desconto}%</p>
                        <p>Preço com desconto: R$ {precoFinal.toFixed(2)}</p>
                    </div>
            })}
        </div>
        </>
    );
}