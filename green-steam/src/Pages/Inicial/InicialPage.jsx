import { useEffect, useContext } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import styles from "./Inicial.module.css";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../../Contexts/carrinhoContext";

export function InicialPage() {
    useEffect(() => {
        console.log("Página inicial carregada");
    }, []);

    const jogosExemplo = [
        {
            id: 1,
            nome: 'Diablo 4',
            quantidade: 1,
            preco: 229.90,
            desconto: 10,
            genero: 'Ação/RPG',
            imagem: 'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/11/open-graph-1.jpg',
            descricao: 'Diablo IV é uma experiência de RPG de ação com a jogabilidade dinâmica que os fãs conhecem e amam.'
        },
        {
            id: 2,
            nome: 'League of Legends',
            quantidade: 1,
            preco: 100.00,
            desconto: 10,
            genero: 'MOBA',
            imagem: 'https://www.adrenaline.com.br/wp-content/uploads/2023/06/league-of-legends-capa.jpg',
            descricao: 'League of Legends é um jogo de estratégia onde duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra.'
        },
        {
            id: 3,
            nome: 'The Last of Us - Part 1',
            quantidade: 1,
            preco: 100.00,
            desconto: 10,
            genero: 'Aventura',
            imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png',
            descricao: 'Em uma civilização devastada, Joel é contratado para contrabandear Ellie, de 14 anos, para fora de uma zona de quarentena militar.'
        },
        {
            id: 4,
            nome: 'Red Dead Redemption 2',
            quantidade: 1,
            preco: 249.90,
            desconto: 10,
            genero: 'Aventura',
            imagem: 'https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg',
            descricao: 'A épica aventura de mundo aberto da Rockstar Games, agora chega aprimorada para PC com conteúdos inéditos no Modo História.'
        },
        {
            id: 5,
            nome: 'Chrono Cross: The Radical Dreamers Edition',
            quantidade: 1,
            preco: 100.00,
            desconto: 10,
            genero: 'RPG',
            imagem: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1133760/capsule_616x353.jpg?t=1727791936',
            descricao: 'CHRONO CROSS é um RPG que transcende o tempo e o espaço, desdobrando-se em dois mundos paralelos interligados.'
        },
        {
            id: 6,
            nome: 'God Of War',
            quantidade: 1,
            preco: 199.90,
            desconto: 10,
            genero: 'Aventura',
            imagem: 'https://files.tecnoblog.net/wp-content/uploads/2022/01/god-of-war-2018-004-1060x596.jpg',
            descricao: 'Com a vingança contra os deuses do Olimpo, Kratos deve lutar para sobreviver em um mundo implacável e ensinar seu filho a fazer o mesmo.'
        },
        {
            id: 7,
            nome: 'Fc2025',
            quantidade: 1,
            preco: 299.90,
            desconto: 10,
            genero: 'Esporte',
            imagem: 'https://i.ytimg.com/vi/hw59dmH3E84/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHdK6Ti75dHa8XjiXEhxscK3Jklg',
            descricao: 'O EA SPORTS FC™ 25 oferece mais maneiras de ganhar pelo clube e controle tático como nunca.'
        },
        {
            id: 8,
            nome: 'Dead by Daylight',
            quantidade: 1,
            preco: 50.00,
            desconto: 10,
            genero: 'Terror',
            imagem: 'https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7',
            descricao: 'Dead by Daylight é um jogo de terror multiplayer (4vs1) onde um jogador assume o papel de um Assassino brutal.'
        },
        {
            id: 9,
            nome: "Baldur's Gate 3",
            quantidade: 1,
            preco: 229.90,
            desconto: 10,
            genero: 'Estratégia',
            imagem: 'https://arkade.com.br/wp-content/uploads/2023/08/Baldurs-Gate-3-2-900x503.jpg',
            descricao: 'Reúna seu grupo e retorne aos Reinos Esquecidos em uma história de amizade e traição.'
        },
        {
            id: 10,
            nome: "Sid Meier’s Civilization® VI",
            quantidade: 1,
            preco: 99.90,
            desconto: 10,
            genero: 'Estratégia',
            imagem: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000013704/918c0badde3aeba760e2185f382a2402248a1292322cf540fd8d098eeb292e1e',
            descricao: 'Expanda seu império e enfrente os maiores líderes da história em Civilization VI.'
        }
    ];

    const navigate = useNavigate();
    const { adicionarAoCarrinho } = useContext(CarrinhoContext);

    const handleAdicionarAoCarrinho = (jogo) => {
        adicionarAoCarrinho(jogo);
        console.log("Jogo adicionado ao carrinho:", jogo);

    };

    return (
        <>
            <Navbar />
            <div className={styles.containerInicial}>
                <div>
                    <h1 className={styles.inicialWelcome}>Bem-vindo ao Green Steam!</h1>
                    <p>Descubra, jogue e compartilhe momentos épicos conosco no Green Steam. É mais que uma plataforma, é onde o universo dos jogos se encontra!</p>
                </div>
            </div>

            <div className={styles.jogosLista}>
                {jogosExemplo.map(jogo => (
                    <div className={styles.jogosItem} key={jogo.id}>
                        <img src={jogo.imagem} alt={jogo.nome} />
                        <h3>{jogo.nome}</h3>
                        <p><strong>Gênero:</strong> {jogo.genero}</p>
                        <p><strong>Descrição:</strong> {jogo.descricao}</p>
                        <p><strong>Preço:</strong> R$ {jogo.preco.toFixed(2)}</p>
                        <p><strong>Desconto:</strong> {jogo.desconto}%</p>
                        <p><strong>Preço com desconto:</strong> R$ {(jogo.preco * (1 - jogo.desconto / 100)).toFixed(2)}</p>
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

            <Footer />
        </>
    );
}
