import styles from "./Navbar.module.css";
import ps1_logo from "../../assets/logo1.png";
export function Navbar() {
    

  const navigate = useNavigate(); 

  const handleNavigation=()=> navigate("/home");

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
            <li><Link to="/sobre">Sobre os DEV's</Link></li>
            <li>Suporte</li>
            <li><Link to="/cadastro">Criar Conta</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/carrinho">Carrinho</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
}
