import React from "react";
import tavares from "../../assets/tavares.png";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import styles from "./Sobre.module.css";

export function SobreOsDevs() {

    return(
        <>
        <Navbar />

        <div className={styles.containerDev}>
            <h1>Desenvolvedores do Projeto</h1>
            <div className={styles.listaDesenvolvedores}>

                {/* Desenvolvedor 1 */}
                <div className={styles.desenvolvedor}>
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQGD_tsu95q1ZQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710159400215?e=1735776000&v=beta&t=CrZZp9yTob0DbLB3zxwezwaSsfhyKSIKjLEm0HRKC8o" alt="Desenvolvedor 1" className={styles.foto} />
                    <h2>Andressa Jandre</h2>
                    <p><strong>Qualidades e Expertises:</strong> JlbwÇKLMEB</p>
                </div>

                {/* Desenvolvedor 2 */}
                <div className={styles.desenvolvedor}>
                    <img src={tavares} alt="Desenvolvedor 2" className={styles.foto} />
                    <h2>Desenvolvedor 2</h2>
                    <p><strong>Qualidades e Expertises:</strong> ergrgrg</p>
                </div>

                {/* Desenvolvedor 3 */}
                <div className={styles.desenvolvedor}>
                    <img src="https://media.licdn.com/dms/image/v2/C4D03AQFZNmMueWQJRA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1600806669278?e=1735776000&v=beta&t=lz6-Ftt9YzNvJxMidH4CIOQs9A-AaYs_yctbpU4v37Q" alt="Desenvolvedor 3" className={styles.foto} />
                    <h2>Luiz Fernando</h2>
                    <p><strong>Qualidades e Expertises:</strong> AnfIO^mv</p>
                </div>

                {/* Desenvolvedor 4 */}
                <div className={styles.desenvolvedor}>
                    <img src="https://media.licdn.com/dms/image/v2/C4E03AQEgfuuADyrGSw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1562018294124?e=1735776000&v=beta&t=lhOvo1DmVSE5ehVwwdNNCTArZZpuKNgzvh3s4ShZ69U" alt="Desenvolvedor 3" className={styles.foto} />
                    <h2>Milton Rodrigues</h2>
                    <p><strong>Qualidades e Expertises:</strong> BFUIBFQOIf</p>
                </div>

                {/* Desenvolvedor 5 */}
                <div className={styles.desenvolvedor}>
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQGbcv5d4j7PhQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726230239282?e=1735776000&v=beta&t=B2fIkt_D87f75ovTyK7muMVpPUeGk7KjNiHtp-W-g1Y" alt="Desenvolvedor 2" className={styles.foto} />
                    <h2>Tiago Ventura</h2>
                    <p><strong>Qualidades e Expertises:</strong> NVioANUIbc</p>
                </div>
                
                {/* Desenvolvedor 6 */}
                <div className={styles.desenvolvedor}>
                    <img src="https://avatars.githubusercontent.com/u/177690905?v=4" alt="Desenvolvedor 1" className={styles.foto} />
                    <h2>Romulo Lourenço</h2>
                    <p><strong>Qualidades e Expertises:</strong> jbvefboqui</p>
                </div>

            </div>
        </div>
        
        <Footer />
        </>
    )
}