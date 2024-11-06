import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../Pages/FinalizarCompras/FinalizarCompras.module.css";
import { CarrinhoContext } from "../../Contexts/carrinhoContext"; 

export function FinalizarCompra() {
  const navigate = useNavigate();
  const { limparCarrinho } = useContext(CarrinhoContext); 

  const handleVoltarParaHome = () => {
    
    limparCarrinho();
    navigate("/home");
  };

  return (
    <div className={styles.finalizarCompraContainer}>
      <div className={styles.box}>
        <h1>Obrigado por comprar conosco!!!</h1>
        <p>Até a próxima. Divirta-se!!</p>
        <button onClick={handleVoltarParaHome}>Voltar pra Home</button>
      </div>
    </div>
  );
}

export default FinalizarCompra;
