import { createContext, useState, useContext } from "react";

//Criamos o contexto do carrinho
const CarrinhoContext = createContext();

//provider que gerencia os produtos no carrinho
export const CarrinhoProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    //Adiciona um produto ao carrinho
    const adicionarAoCarrinho = (produto) => {
        setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
    };

    //Remove um produto do carrinho pelo ID
    const removerDoCarrinho = (id) => {
        setCarrinho((prevCarrinho) => prevCarrinho.filter((produto) => produto.id !== id));
    };

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
};

// informação para acessar o carrinho de qualquer parte da aplicação
export const useCarrinho = () => useContext(CarrinhoContext);
