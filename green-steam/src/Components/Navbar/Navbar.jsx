import styles from "./Navbar.module.css";
import ps1_logo from "../../assets/logo.png";
export function Navbar() {
    
  return (
    <>
      <header className={styles.header}>
        <div className={styles.imagemContainer}>
          <img className={styles.imagemLogo} src={ps1_logo} alt="imagem-logo" />
        </div>
        <div className={styles.navList}>
          <ul>
            <li>Home</li>
            <li>Comunidade</li>
            <li>Sobre os DEV's</li>
            <li>Suporte</li>
            <li>Criar Conta</li>
            <li>Carrinho</li>
          </ul>
        </div>
      </header>
    </>
  );
}
