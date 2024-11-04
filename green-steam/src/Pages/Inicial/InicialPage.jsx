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
            nome: 'F1-24',
            quantidade: 1,
            preco: 79.00,
            desconto: 5,
            genero: 'Esporte',
            imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2488620/header.jpg?t=1728991222',
            descricao: 'Alcance as primeiras colocações e pilote como as feras do automobilismo no EA SPORTS™ F1® 24, o jogo oficial do 2024 FIA Formula One World Championship.'
        },
        {
            id: 3,
            nome: 'The Last of Us - Part 1',
            quantidade: 1,
            preco: 100.00,
            desconto: 10,
            genero: 'Aventura',
            imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1728603021',
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
        },
        {
            id: 11,
            nome: "God Of War Ragnarok",
            quantidade: 1,
            preco: 249.90,
            desconto: 10,
            genero: 'Aventura',
            imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1728067832',
            descricao: 'Kratos e Atreus embarcam numa viagem mítica em busca de respostas antes da chegada do Ragnarök.'
        },
        {
            id: 12,
            nome: "Resident Evil 4",
            quantidade: 1,
            preco: 129.90,
            desconto: 10,
            genero: 'Terror',
            imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg?t=1730246738',
            descricao: 'Sobrevivência é apenas o começo. Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, segue o rastro da raptada filha do presidente até uma vila europeia isolada, onde há algo terrivelmente errado com os habitantes.'
        },
        {
            id: 13,
            nome: "Total War: PHARAOH",
            quantidade: 1,
            preco: 49.90,
            desconto: 5,
            genero: 'Estratégia',
            imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1937780/header.jpg?t=1730284459',
            descricao: 'Em Total War: PHARAOH, a mais nova adição à premiada série de grande estratégia, mergulhe no antigo Egito durante o auge do poder e vivencie os eventos dramáticos que ameaçam a destruição dessa civilização.'
        },
        {
            id: 14,
            nome: "Euro Truck Simulator 2",
            quantidade: 1,
            preco: 69.90,
            desconto: 5,
            genero: 'Estratégia',
            imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/227300/header.jpg?t=1730373569',
            descricao: 'Viaje pela Europa como o rei da estrada, um caminhoneiro que entrega cargas importantes por distâncias impressionantes! Com dezenas de cidades para explorar, sua resistência, habilidade e velocidade serão levadas ao limite.'
        },
        {
            id: 15,
            nome: "Black Myth: Wukong",
            quantidade: 1,
            preco: 199.90,
            desconto: 5,
            genero: 'RPG',
            imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg?t=1729236256',
            descricao: 'Black Myth: Wukong é um RPG de ação inspirado na mitologia chinesa. Você assume o papel do Predestinado e tem a responsabilidade de encarar os desafios e as maravilhas do mundo para desvendar a verdade obscura por trás de uma lenda gloriosa do passado.'
        },
        {
            id: 16,
            nome: "Monster Hunter: World",
            quantidade: 1,
            preco: 89.90,
            desconto: 5,
            genero: 'RPG',
            imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg?t=1730268377',
            descricao: 'Conheça o Novo Mundo! Em Monster Hunter: World, o jogo mais recente da série, você pode curtir a experiência máxima de caçada, usando tudo à sua disposição para caçar monstros em um novo mundo repleto de surpresas e emoções.'
        },
        {
            id: 17,
            nome: "Forza Horizon 5",
            quantidade: 1,
            preco: 79.90,
            desconto: 5,
            genero: 'Esporte',
            imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg?t=1727883919',
            descricao: 'Explore as paisagens vibrantes de mundo aberto do México com diversão e velocidade sem limites com os melhores carros do mundo. Participe de um jogo de perseguição emocionante com a nossa nova Experiência Multijogador 5 contra 1, Esconde-Esconde!'
        },
        {
            id: 18,
            nome: "NBA 2K25",
            quantidade: 1,
            preco: 219.90,
            desconto: 5,
            genero: 'Esporte',
            imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2878980/header.jpg?t=1730136287',
            descricao: 'Domine as quadras com autenticidade e realismo impulsionados por ProPLAY™, que dá a você o controle total do seu jogo no NBA 2K25. Defina seu legado no MyCAREER, MyTEAM, MyNBA e The W.'
        },
        {
            id: 19,
            nome: "Call of Duty®: Black Ops 6",
            quantidade: 1,
            preco: 249.90,
            desconto: 5,
            genero: 'Esporte',
            imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2933620/header.jpg?t=1730505579',
            descricao: 'Call of Duty®: Black Ops 6 é a assinatura Black Ops em uma Campanha cinematográfica para um jogador, a melhor experiência Multijogador da categoria e o retorno épico do modo Zumbis por Rodada.'
        },
        {
            id: 20,
            nome: "Spirit of the North",
            quantidade: 1,
            preco: 39.90,
            desconto: 5,
            genero: 'Aventura',
            imagem: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1213700/header.jpg?t=1701265706',
            descricao: 'Spirit of the North: Enhanced Edition é um jogo de aventura na 3.ª pessoa, para um jogador, inspirado nas deslumbrantes e misteriosas paisagens da Islândia. A sua história baseia-se em diversos elementos do folclore nórdico.'
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

        </>
    );
}
