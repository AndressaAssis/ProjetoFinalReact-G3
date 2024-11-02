import { useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import styles from "./Inicial.module.css";
import { useNavigate } from "react-router-dom";

export function InicialPage() {

    useEffect(()=> {
        console.log("Página inicial carregada")
        
    }, []);

    const jogoExemplo = {
        id: 1,
        nome: 'Jogo Exemplo',
        quantidade: 1,
        preco: 100.0,
        imagem: 'url_imagem_jogo_exemplo',
    };

    const navigate = useNavigate();

    const adicionarAoCarrinho = (jogo) => {
        console.log("Jogo adicionado ao carrinho:", jogo);
        navigate("/carrinho");
    };

    return(
        <>
        <Navbar />
       <div className={styles.containerInicial}>
            <div>
               <h1 className={styles.inicialWelcome}>Bem-vindo ao Green Steam!</h1>
               <p>Descubra, jogue e compartilhe momentos épicos conosco no Green Steam. É mais que uma plataforma, é onde o universo dos jogos se encontra!</p>
            </div>
        </div> 
 
        <div className={styles.jogosLista}>
                <div className={styles.jogosItem}>
                    <img src="https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2022/11/open-graph-1.jpg" alt="Produto 1" />
                    <h3>Diablo 4</h3>
                    <p>Diablo IV é a experiência de RPG de ação de nova geração com infinitos males para matar, inúmeras habilidades para dominar, masmorras horripilantes e tesouros lendários. Embarque na campanha solo ou com amigos, conhecendo personagens memoráveis em belos cenários sombrios e com uma história envolvente, ou desbrave a vastidão da fase final de jogo e do mundo compartilhado, onde os jogadores se encontram nos vilarejos para negociar, formam equipes para enfrentar Chefes do Mundo ou entram em áreas de PvP para testar.</p>
                    <p><strong>Gênero:</strong> RPG</p>
                    <p><strong>Preço:</strong> R$ 229,90</p>
                    <p><strong>Desconto:</strong> 10%</p>
                    <p><strong>Preço com desconto:</strong> R$ 206,91</p>
                    <div className={styles.plataformas}>
                      <img src="https://static-00.iconduck.com/assets.00/epic-games-icon-512x512-7qpmojcd.png" alt="Epic Games" className={styles.iconePlataforma} />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png" alt="Steam" className={styles.iconePlataforma} />
                    </div>
                    <button onClick={() => adicionarAoCarrinho(jogoExemplo)}>Adicionar ao Carrinho</button>
                </div>

                <div className={styles.jogosItem}>
                    <img src="https://www.adrenaline.com.br/wp-content/uploads/2023/06/league-of-legends-capa.jpg" alt="Produto 2" />
                    <h3>League of Legends</h3>
                    <p>League of Legends é um jogo de estratégia onde duas equipes de cinco poderosos Campeões se enfrentam para destruir a base uma da outra. Escolha entre mais de 140 Campeões para realizar jogadas épicas, assegurar abates e destruir torres conforme você luta até a vitória.</p>
                    <p><strong>Gênero:</strong> RPG</p>
                    <p><strong>Preço:</strong> R$ 100,00</p>
                    <p><strong>Desconto:</strong> 10%</p>
                    <p><strong>Preço com desconto:</strong> R$ 90,00</p>
                </div>

                <div className={styles.jogosItem}>
                    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEczyEMDd2BLa3dtkGJVE9Id.png" alt="Produto 3" />
                    <h3>The Last of Us - Part 1</h3>
                    <p>Em uma civilização devastada, onde sobreviventes infectados e endurecidos correm soltos, Joel, um protagonista cansado, é contratado para contrabandear Ellie, de 14 anos, para fora de uma zona de quarentena militar. No entanto, o que começa como um pequeno trabalho logo se transforma em uma brutal jornada pelo país.</p>
                    <p><strong>Gênero:</strong> RPG</p>
                    <p><strong>Preço:</strong> R$ 100,00</p>
                    <p><strong>Desconto:</strong> 10%</p>
                    <p><strong>Preço com desconto:</strong> R$ 90,00</p>
                </div>

                <div className={styles.jogosItem}>
                    <img src="https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg" alt="Produto 4" />
                    <h3>Red Dead Redemption 2</h3>
                    <p>A épica aventura de mundo aberto da Rockstar Games aclamada pela crítica e o jogo mais bem avaliado desta geração de consoles, agora chega aprimorado para PC com conteúdos inéditos no Modo História, melhorias visuais e muito mais.</p>
                    <p><strong>Gênero:</strong> AVENTURA</p>
                    <p><strong>Preço:</strong> R$ 249,90</p>
                    <p><strong>Desconto:</strong> 10%</p>
                    <p><strong>Preço com desconto:</strong> R$ 224,91</p>
                </div>

                <div className={styles.jogosItem}>
                    <img src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1133760/capsule_616x353.jpg?t=1727791936" alt="Produto 5" />
                    <h3>Chrono Cross: The Radical Dreamers Edition</h3>
                    <p>CHRONO CROSS é um RPG que transcende o tempo e o espaço, desdobrando-se em dois mundos paralelos interligados. Com mais de 40 membros do grupo para conhecer, pessoas e dimensões se entrelaçarão neste drama épico sobre o próprio planeta.</p>
                    <p><strong>Gênero:</strong> RPG</p>
                    <p><strong>Preço:</strong> R$ 100,00</p>
                    <p><strong>Desconto:</strong> 10%</p>
                    <p><strong>Preço com desconto:</strong> R$ 90,00</p>
                </div>

                <div className={styles.jogosItem}>
                    <img src="https://files.tecnoblog.net/wp-content/uploads/2022/01/god-of-war-2018-004-1060x596.jpg" alt="Produto 6" />
                    <h3>God Of War</h3>
                    <p>Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu filho a fazer o mesmo.</p>
                    <p><strong>Gênero:</strong> AVENTURA</p>
                    <p><strong>Preço:</strong> R$ 199.90</p>
                    <p><strong>Desconto:</strong> 10%</p>
                    <p><strong>Preço com desconto:</strong> R$ 179,91</p>
                </div>

                <div className={styles.jogosItem}>
                    <img src="https://i.ytimg.com/vi/hw59dmH3E84/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCHdK6Ti75dHa8XjiXEhxscK3Jklg" alt="Produto 7" />
                    <h3>Fc2025</h3>
                    <p>O EA SPORTS FC™ 25 oferece mais maneiras de ganhar pelo clube. Jogue com suas amizades nos seus modos favoritos com o novo Rush 5x5 e leve seu clube à vitória com o FC IQ dando mais controle tático do que nunca.</p>
                    <p><strong>Gênero:</strong> ESPORTE</p>
                    <p><strong>Preço:</strong> R$ 299.90</p>
                    <p><strong>Desconto:</strong> 10%</p>
                    <p><strong>Preço com desconto:</strong> R$ 269,91</p>
                </div>

                <div className={styles.jogosItem}>
                    <img src="https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S1_2560x1440-a32581cf9948a9a2e24b2ff15c1577c7" alt="Produto 8" />
                    <h3>Dead by Daylight</h3>
                    <p>Dead by Daylight é um jogo de terror multiplayer (4vs1) onde um jogador assume o papel de um Assassino brutal, e os outros quatro jogadores jogam como Sobreviventes, tentando escapar do Assassino e evitar serem pegos e mortos.</p>
                    <p><strong>Gênero:</strong> TERROR</p>
                    <p><strong>Preço:</strong> R$ 50,00</p>
                    <p><strong>Desconto:</strong> 10%</p>
                    <p><strong>Preço com desconto:</strong> R$ 45,00</p>
                </div>

                <div className={styles.jogosItem}>
                    <img src="https://arkade.com.br/wp-content/uploads/2023/08/Baldurs-Gate-3-2-900x503.jpg" alt="Produto 9" />
                    <h3>Baldur's Gate 3</h3>
                    <p>Reúna seu grupo e retorne aos Reinos Esquecidos em uma história de amizade e traição, sacrifício e sobrevivência, e a tentação do poder absoluto.</p>
                    <p><strong>Gênero:</strong> ESTRATEGIA</p>
                    <p><strong>Preço:</strong> R$ 229,90</p>
                    <p><strong>Desconto:</strong> 10%</p>
                    <p><strong>Preço com desconto:</strong> R$ 206,91</p>
                </div>

                <div className={styles.jogosItem}>
                    <img src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000013704/918c0badde3aeba760e2185f382a2402248a1292322cf540fd8d098eeb292e1e" alt="Produto 10" />
                    <h3>Sid Meier’s Civilization® VI</h3>
                    <p>Civilization VI é o mais novo episódio da Franquia Civilization, vencedora de diversos prêmios. Expanda seu império, avance sua cultura e vá de encontro aos maiores líderes da história. Será que sua civilização sobreviverá ao teste do tempo?</p>
                    <p><strong>Gênero:</strong> ESTRATEGIA</p>
                    <p><strong>Preço:</strong> R$ 99,90</p>
                    <p><strong>Desconto:</strong> 10%</p>
                    <p><strong>Preço com desconto:</strong> R$ 89,91</p>
                </div>

            </div>

        <Footer />
        </>
    );
}