import React from 'react';
import { useCarrinho } from "./CarrinhoContext";
import { ShoppingCart } from 'lucide-react';
import './ButtonCarrinho.css';

function ButtonCarrinho() {

    const { carrinho } = useCarrinho();

    return (
        <button type='button'  className='cart_button'>
            <ShoppingCart />
            <span className='cart_status'>{carrinho.length}</span>
        </button>
        

    );
    
}

export default ButtonCarrinho;

