import React from "react";
import { useCarrinho } from "./CarrinhoContext";
import formatarModeda from '../utils/formatarMoeda';
import { useNavigate } from 'react-router-dom';
import { Trash2 } from "lucide-react";

function Carrinho() {

    const navigate = useNavigate();
    const { carrinho, removerDoCarrinho } = useCarrinho(); 

    //esse trecho usa o reduce e um acumulaor para ir somando o preço de cada produto e retornar o preco total no final
    const precoTotal = carrinho.reduce((acc, produto) => acc + produto.price, 0);


    const comprarMais = () => {
        navigate('/');
    };
    





    return (
        <div className="w-[1140px] h-screen flex flex-col justify-start p-10 ">

            <div className="grid grid-cols-[6fr_2fr_2fr] gap-4 items-center">
                <h1 className="text-2xl text-slate-600 font-bold">Meu Carrinho</h1>
                <div>
                    <h1 className="text-2xl text-slate-600 font-bold">TOTAL: {formatarModeda(precoTotal, 'BRL')}</h1>
                </div>

                <button className='w-full bg-[#148787] text-[14px] text-slate-50 p-3  rounded-md 
                                        hover:bg-[#7ccfcf] hover:scale-105 transition duration-300'
                                        onClick={() => comprarMais()}

                                        >
                                            COMPRAR +
                                            </button>


            </div>



            {carrinho.length === 0 ? (
                <p className="text-gray-500 mt-5">O carrinho está vazio.</p>

            ) : (
                <div className="grid grid-cols-2 gap-4 mt-5">
                    {carrinho.map((produto) => (


                        <div key={produto.id} className="p-4 bg-white rounded-lg shadow-md grid grid-cols-2 gap-4 mt-5">

                            <div className="w-[150px] h-[150px] flex items-center justify-center ">
                                                <img src={produto.image} alt={produto.title} className="w-[100px] h-[100px] object-contain" />
                            </div>

                            <div>
                            <h2 className="text-xl font-bold">{produto.title}</h2>
                            <p className="text-gray-600">{formatarModeda(produto.price, 'BRL')}</p>

                            {/* <button
                                className="w-full bg-red-500 text-white p-2 mt-2 rounded-md 
                                hover:bg-red-700 transition duration-300"
                                onClick={() => removerDoCarrinho(produto.id)}
                            >
                                Remover
                            </button> */}


                            <button
                                className="w-full flex items-center justify-center gap-2 bg-[#ffaf3c] text-white p-2 mt-2 rounded-[50px] 
                                hover:bg-[#c58e47] transition duration-300"
                                onClick={() => removerDoCarrinho(produto.id)}
                            >
                                <Trash2 size={20} />
                                Remover
                            </button>      



                            </div>



                            





                        </div>

                    ))}
                </div>
            )}
        </div>
    );
}

export default Carrinho;


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';


// function Carrinho() {
    
//     return (
//         <div className=" h-screen flex flex-col justify-start p-10 ">
//             <h1 className="text-2xl text-slate-600 font-bold">Cesto de Compras</h1>
            
//             <div className="grid grid-cols-2 gap-4 mt-5 pt-12  bg-white rounded-lg shadow-md">
//                 <div className="w-[500px] h-[300px] flex items-center justify-center ">
//                     <img src="" alt="" className="w-[250px] h-[250px] object-contain" />
//                 </div>


//                 <div className="flex flex-col p-10">
//                     {/* bloco descrição e coração */}
//                     <div className='grid grid-cols-[80%_20%] gap-1 items-center '>
//                         <div>
//                             <p className="text-2xl text-slate-600 font-bold">Titulo</p>
//                         </div>
//                     </div>

//                     <div className='grid grid-cols-[80%_20%] gap-1 items-center '>
//                         <div >
//                             <p className="text-xl font-bold text-slate-700 mt-2">Preço</p>
//                             <span className="text-gray-500 text-sm">Quantidade xx</span>
//                         </div>
//                     </div>

//                     <button className='w-full bg-[#c46e27] text-xl text-slate-50 p-4 mt-3 rounded-md 
//                                         hover:bg-[#daa637] hover:scale-105 transition duration-300'>
//                         REMOVE
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Carrinho;


