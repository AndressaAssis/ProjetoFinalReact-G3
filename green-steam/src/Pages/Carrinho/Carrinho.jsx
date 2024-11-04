import React, { useContext } from "react";
import { CarrinhoContext } from "../../Contexts/carrinhoContext";
import styles from "../Carrinho/Carrinho.module.css"
import { useNavigate } from "react-router-dom"; 

export function Carrinho() {
    const {
        itensCarrinho,
        removerItem,
        limparCarrinho,
        incrementarQuantidade,
        decrementarQuantidade,
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

    const calcularValorTotalComDesconto = () => {
        return itensCarrinho.reduce((total, item) => {
            const precoComDesconto = item.preco * (1 - item.desconto / 100);
            return total + (precoComDesconto * item.quantidade);
        }, 0);
    };

    const valorTotalComDesconto = calcularValorTotalComDesconto();

    return (
        <>
            <div className={styles.carrinhoContainer}>
                <h1>Carrinho de Compras</h1>
                {itensCarrinho.length === 0 ? (
                    <p>Seu carrinho está vazio.</p>
                ) : (
                    <>
                        <ul>
                            {itensCarrinho.map((item) => {
                                const precoComDesconto = item.preco * (1 - item.desconto / 100);
                                return (
                                    <li className={styles.carrinho} key={item.id}>
                                        <img src={item.imagem} alt={item.nome} />
                                        <h3>{item.nome}</h3>
                                        <p>Quantidade: {item.quantidade}</p>
                                        <p>Preço sem desconto: R$ {item.preco.toFixed(2)}</p>
                                        <p>Desconto: {item.desconto}%</p>
                                        <p>Preço com desconto: R$ {precoComDesconto.toFixed(2)}</p>
                                        <p>Subtotal: R$ {(precoComDesconto * item.quantidade).toFixed(2)}</p>
                                      <div className={styles.buttonCarrinho}>
                                        <button  onClick={() => decrementarQuantidade(item.id)} disabled={item.quantidade <= 1}>-</button>
                                        <button onClick={() => incrementarQuantidade(item.id)}>+</button>
                                        <button onClick={() => handleRemoverItem(item.id)}>Remover</button>
                                      </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <p>Valor Total com Desconto: R$ {valorTotalComDesconto.toFixed(2)}</p>
                        <button onClick={handleLimparCarrinho}>Limpar Carrinho</button>
                        <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
                        <button onClick={handleContinuarComprando}>Continuar Comprando</button>
                    </>
                )}
            </div> 
        </>
    );
}

export default Carrinho;
