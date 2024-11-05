import { useEffect, useContext, useState } from "react";
import styles from "./Inicial.module.css";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../../Contexts/carrinhoContext.jsx";
import api from "../../Services/Api.js";

export function InicialPage() {
  const [jogos, setJogos] = useState([]);

  const getJogos = async () => {
    api.get('/jogos').then((resposta) => {
      console.log(resposta.data);
      setJogos(resposta.data);
    });
  };

  useEffect(() => {
    console.log("Página inicial carregada");
    getJogos();
  }, []);

  const navigate = useNavigate();
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  const handleAdicionarAoCarrinho = (jogo) => {
    adicionarAoCarrinho(jogo);
    console.log("Jogo adicionado ao carrinho:", jogo);
  };

  return (
    <>
      <div className={styles.containerInicial}>
        <div>
          <h1 className={styles.inicialWelcome}>Bem-vindo ao Green Steam!</h1>
          <p>Descubra, jogue e compartilhe momentos épicos conosco no Green Steam. É mais que uma plataforma, é onde o universo dos jogos se encontra!</p>
        </div>
      </div>

      <div className={styles.jogosLista}>
        {jogos.map(jogo => (
          <div className={styles.jogosItem} key={jogo.id}>
            <img src={jogo.imagemUrl} alt={jogo.nome} className={styles.itemImage} />
            <h3>{jogo.nome}</h3>
            <p><strong>Gênero:</strong> {jogo.genero}</p>
            <p><strong>Plataforma:</strong> {jogo.plataforma}</p>
            <p><strong>Preço:</strong> R$ {jogo.precoUnitario.toFixed(2)}</p>
            <p><strong>Descrição:</strong> {jogo.descricao}</p>
            <button onClick={() => handleAdicionarAoCarrinho(jogo)}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </>
  );
}
