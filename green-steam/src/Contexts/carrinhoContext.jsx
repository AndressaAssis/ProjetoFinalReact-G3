import React, { useState, createContext } from "react";

const CarrinhoContext = createContext();

const CarrinhoProvider = (props) => {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  const adicionarAoCarrinho = (novoProduto) => {
    const produtoExistente = itensCarrinho.find(item => item.id === novoProduto.id);
    let novosItens;

    if (produtoExistente) {
      novosItens = itensCarrinho.map(item => {
        if (item.id === novoProduto.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        }
        return item;
      });
    } else {
      novosItens = [...itensCarrinho, { ...novoProduto, quantidade: 1 }];
    }

    setItensCarrinho(novosItens);
    calcularValorTotal(novosItens);
  };

  const removerItem = (id) => {
    const novosItens = itensCarrinho.filter(item => item.id !== id);
    setItensCarrinho(novosItens);
    calcularValorTotal(novosItens);
  };

  const limparCarrinho = () => {
    setItensCarrinho([]);
    setValorTotal(0);
  };

  const calcularValorTotal = (itens) => {
    let total = 0;
    itens.forEach((item) => {
      total += item.quantidade * item.precoUnitario;
    });
    setValorTotal(total);
  };

  const incrementarQuantidade = (id) => {
    const novosItens = itensCarrinho.map(item => {
      if (item.id === id) {
        return { ...item, quantidade: item.quantidade + 1 };
      }
      return item;
    });
    setItensCarrinho(novosItens);
    calcularValorTotal(novosItens);
  };

  const decrementarQuantidade = (id) => {
    const novosItens = itensCarrinho.map(item => {
      if (item.id === id) {
        const novaQuantidade = item.quantidade > 1 ? item.quantidade - 1 : 1;
        return { ...item, quantidade: novaQuantidade };
      }
      return item;
    });
    setItensCarrinho(novosItens);
    calcularValorTotal(novosItens);
  };

  return (
    <CarrinhoContext.Provider
      value={{
        itensCarrinho,
        valorTotal,
        adicionarAoCarrinho,
        removerItem,
        limparCarrinho,
        incrementarQuantidade,
        decrementarQuantidade,
      }}
    >
      {props.children}
    </CarrinhoContext.Provider>
  );
};

export { CarrinhoContext, CarrinhoProvider };
