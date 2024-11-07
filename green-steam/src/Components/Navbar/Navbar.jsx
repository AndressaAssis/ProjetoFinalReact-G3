import React from "react";
import styles from "./Navbar.module.css";
import ps1_logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate(); 
  const nome = localStorage.getItem('nome'); // Obtém o nome do cliente do localStorage

  const handleNavigation = () => navigate("/home");
  const handleNavigation1 = () => navigate("/login");
  const handleNavigation2 = () => navigate("/criarConta");
  const handleNavigation3 = () => navigate("/carrinho");
  const handleNavigation4 = () => navigate("/suporte");
  const handleNavigation5 = () => navigate("/sobreOsDevs");
  const handleNavigation6 = () => navigate("/adicionarJogos");
  const handleNavigation7 = () => navigate("/nossos-clientes");

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    navigate("/login");
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.imagemContainer}>
          <img className={styles.imagemLogo} src={ps1_logo} alt="imagem-logo" />
        </div>
        <div className={styles.navList}>
          <ul>
            <li className={styles.botao}>
              <button onClick={handleNavigation}>Home</button>
            </li>
            <li className={styles.botao}>
              <span className={styles.welcomeMessage}>Olá, {nome ? nome : "visitante"}</span>
            </li>
            {nome ? (
              <li className={styles.botao}>
                <button onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <>
                <li className={styles.botao}>
                  <button onClick={handleNavigation1}>Login</button>
                </li>
                <li className={styles.botao}>
                  <button onClick={handleNavigation2}>Criar Conta</button>
                </li>
              </>
            )}
            <li className={styles.botao}>
              <button onClick={handleNavigation3}>Carrinho</button>
            </li>
            <li className={styles.botao}>
              <button onClick={handleNavigation4}>Suporte</button>
            </li>
            <li className={styles.botao}>
              <button onClick={handleNavigation5}>Sobre os DEV's</button>
            </li>
            <li className={styles.botao}>
              <button onClick={handleNavigation6}>Adicionar Jogos</button>
            </li>
            <li className={styles.botao}>
              <button onClick={handleNavigation7}>Nossos Clientes</button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
