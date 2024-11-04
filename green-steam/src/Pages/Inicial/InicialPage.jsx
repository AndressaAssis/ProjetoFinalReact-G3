import { useEffect, useContext, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import styles from "./Inicial.module.css";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../../Contexts/carrinhoContext";
import { api } from "../../Services/Api";

export function InicialPage() {

const [jogos, setJogos] = useState([])

const getJogos = async () =>{
    api.get('/jogos').then((resposta)=>{
        console.log(resposta.data);
        setJogos(resposta.data)
        
    })
}

    useEffect(() => {
        console.log("Página inicial carregada");
        getJogos()
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
                        {/*<img src={jogo.imagem} alt={jogo.nome} />*/}
                        <h3>{jogo.nome}</h3>
                        <p><strong>Gênero:</strong> {jogo.genero}</p>
                        <p><strong>Descrição:</strong> {jogo.descricao}</p>
                        <p><strong>Preço:</strong> R$ {jogo.precoUnitario.toFixed(2)}</p>
                        {/*<p><strong>Desconto:</strong> {jogo.desconto}%</p>*/}
                        {/*<p><strong>Preço com desconto:</strong> R$ {(jogo.preco * (1 - jogo.desconto / 100)).toFixed(2)}</p>*/}
                        <div className={styles.plataformas}>
                            <img
                                src="https://static-00.iconduck.com/assets.00/epic-games-icon-512x512-7qpmojcd.png"
                                alt="Epic Games"
                                className={styles.iconePlataforma}
                                onClick={() => window.open("https://store.epicgames.com/pt-BR/", "_blank")}
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png"
                                alt="Steam"
                                className={styles.iconePlataforma}
                                onClick={() => window.open("https://store.steampowered.com/?l=portuguese", "_blank")}
                            />
                        </div>
                        <button onClick={() => handleAdicionarAoCarrinho(jogo)}>Adicionar ao Carrinho</button>
                    </div>
                ))}
            </div>

        </>
    );
}
