import styles from './Footer.module.css';

export function Footer() {

    return(

        <footer className={styles.footer}>
        <div className="footer-info">
          <h4>Sobre Nós</h4>
          <p>Todos os direitos reservados &copy; Green Steam 2024</p>
        </div>
  
        <div className="footer-politicas">
          <h4>Políticas</h4>
          <ul>
            <li><a href="/politica-privacidade">Política de Privacidade</a></li>
            <li><a href="/politica-reembolso">Política de Reembolso</a></li>
            <li><a href="/comunidade">Comunidade</a> </li>
            <li><a href="/cartao-presente">Cartão Presente</a></li>
          </ul>
        </div>
  
        <div className="footer-sociais">
          <h4>Redes Sociais</h4>
          <ul>
            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </footer> 
    )
}
