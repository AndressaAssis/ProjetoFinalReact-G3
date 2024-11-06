import React, { useContext } from "react";
import { CarrinhoContext } from "../../Contexts/carrinhoContext";
import styles from "./Carrinho.module.css";
import { useNavigate } from "react-router-dom"; 

export function Carrinho() {
  const {
    itensCarrinho,
    removerItem,
    limparCarrinho,
    incrementarQuantidade,
    decrementarQuantidade,
    valorTotal
  } = useContext(CarrinhoContext);
  const navigate = useNavigate();

  const handleRemoverItem = (id) => {
    removerItem(id);
  };

  const handleLimparCarrinho = () => {
    limparCarrinho();
  };

  const handleFinalizarCompra = () => {
    navigate("/finalizar-compra");
  };

  const handleContinuarComprando = () => {
    navigate("/home");
  };

  return (
    <div className={styles.carrinhoContainer}>
      <h1>Carrinho de Compras</h1>
      {itensCarrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {itensCarrinho.map((item) => (
              <li className={styles.carrinhoItem} key={item.id}>
                <img src={item.imagemUrl} alt={item.nome} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <h3>{item.nome}</h3>
                  <p>Quantidade: {item.quantidade}</p>
                  <p>Preço: R$ {item.precoUnitario.toFixed(2)}</p>
                 <br /> <strong><p>Subtotal: R$ {(item.precoUnitario * item.quantidade).toFixed(2)}</p></strong><br />
                </div>
                <div className={styles.buttonGroup}>
                  <button onClick={() => decrementarQuantidade(item.id)} disabled={item.quantidade <= 1}>-</button>
                  <button onClick={() => incrementarQuantidade(item.id)}>+</button>
                  <button onClick={() => handleRemoverItem(item.id)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.totalContainer}>
            <p className={styles.totalText}>Valor Total: R$ {valorTotal.toFixed(2)}</p>
          </div>
          <div className={styles.actionButtons}>
            <button onClick={handleLimparCarrinho}>Limpar Carrinho</button>
            <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
            <button onClick={handleContinuarComprando}>Continuar Comprando</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrinho;
