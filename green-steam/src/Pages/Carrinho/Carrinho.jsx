import React, { useState} from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import styles from "./Carrinho.module.css";

export function Carrinho({ onFinalizarCompra }) {
    const [jogos] = useState([]);


    return(
        <>
        <Navbar />

        <div className={styles.carrinhoContainer}>
            <h1 className={styles.titulo}>SEU CARRINHO</h1>

            <div className={styles.listaJogos}>
              {jogos.map((jogo) => (
                <div key={jogo.id} className={styles.jogo}>
                  <img src={jogo.imagem} alt={jogo.nome} className={styles.imagemJogo} />
                    <div className={styles.detalhesJogo}>
                       <h2>{jogo.nome}</h2>
                       <p>Quantidade: {jogo.quantidade}</p>
                       <p>Preço: R$ {jogo.preco}</p>
                    </div>
                </div>
              ))} 
            </div>
            
            <button className={styles.botaoFinalizar} onClick={onFinalizarCompra}>Finalizar Compra</button>
        </div>
        
        <Footer />
        </>
    );
}