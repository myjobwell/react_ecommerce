import React, { useEffect, useState } from "react";
import { Heart, Send } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Conteudo from "./Conteudo";
import { useCarrinho } from "./CarrinhoContext";
import formatarModeda from '../utils/formatarMoeda';


function Detalhes() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { adicionarAoCarrinho } = useCarrinho(); //esse trecho adiciona itens ao carrinho
    const [produto, setProduto] = useState(null);
    const [loading, setLoading] = useState(true); //aparece o loading quando a pag nao for totalmente carregada

    useEffect(() => {
        const fetchProduto = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduto(data);
            } catch (error) {
                console.error("Erro ao buscar o produto:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProduto();
    }, [id]);

    if (loading) return <div className="text-center mt-10">Carregando...</div>;
    if (!produto) return <div className="text-center mt-10">Produto não encontrado!</div>;


    //adiciona uma condição que vai direto para sacola e outra que consiga add produto e ainda continuar comprando
    const handleAdicionarAoCarrinho = () => {
        adicionarAoCarrinho(produto);
        navigate("/carrinho"); 
    };



        return (
        <div className="w-[1140px] flex flex-col justify-start p-10">

            <h1 className="text-2xl text-slate-600 font-bold">{produto.title}</h1>

            <div className="grid grid-cols-2 gap-4 mt-5 pt-12" key={produto.id}>
                
                
                <div className="w-[500px] h-[300px] flex items-center justify-center bg-white rounded-lg shadow-md">
                    <img src={produto.image} alt={produto.title} className="w-[250px] h-[250px] object-contain" />
                </div>


                <div className="flex flex-col">
                    
                    {/* bloco descrição e coração */}
                    <div className='grid grid-cols-[80%_20%] gap-1 items-center '>
                        <div>
                            <p className="text-gray-600 mt-2">{produto.description}</p>
                            <span className="text-yellow-500">
                                {'★'.repeat(Math.floor(produto.rating.rate))}
                            </span>
                        </div>
                        <div className='flex justify-center'>
                            <p><Heart fill="red" stroke="none" size={32}/></p>
                        </div>
                    </div>



                    <div className='grid grid-cols-[80%_20%] gap-1 items-center '>
                        <div >  
                            <p className="text-xl font-bold text-slate-700 mt-2">Preço: {formatarModeda(produto.price, 'BRL')}
                                <span> à vista</span>
                            </p>
                            <span className="text-gray-500 text-sm">10x de R$ {formatarModeda((produto.price / 10), 'BRL')} sem juros</span>
                        </div>
                        <div className='flex justify-center'>
                            <Send  />
                        </div>
                    </div>

                    <button className='w-full bg-[#148787] text-xl text-slate-50 p-4 mt-3 rounded-md 
                                        hover:bg-[#7ccfcf] hover:scale-105 transition duration-300'
                                        onClick={handleAdicionarAoCarrinho}
                                        >
                                            Comprar
                                            </button>

                    <button className='w-full bg-[#fff] border-2 border-[#148787] text-[14px]  text-[#148787] p-4 mt-3 rounded-md
                                        hover:bg-[#e0e0e0] hover:scale-105 transition duration-300'
                                        onClick={handleAdicionarAoCarrinho}
                                        >Adicionar a sacola</button>


                </div>
            </div>




            <div className='flex flex-col pb-10'>
                <Conteudo quantidadeItens={4} />
            </div>



        </div>
    );




    // return (
    //     <div className="w-[1140px] flex flex-col justify-start p-10">
    //         <h1 className="text-2xl text-slate-600 font-bold">{produto.title}</h1>

    //         <div className="grid grid-cols-2 gap-4 mt-5 pt-12">
    //             <div className="w-[500px] h-[300px] flex items-center justify-center bg-white rounded-lg shadow-md">
    //                 <img src={produto.image} alt={produto.title} className="w-[250px] h-[250px] object-contain" />
    //             </div>

    //             <div className="flex flex-col">
    //                 <div className="grid grid-cols-[80%_20%] gap-1 items-center ">
    //                     <div>
    //                         <p className="text-gray-600 mt-2">{produto.description}</p>
    //                         <span className="text-yellow-500">
    //                             {"★".repeat(Math.floor(produto.rating.rate))}
    //                         </span>
    //                     </div>
    //                     <div className="flex justify-center">
    //                         <Heart fill="red" stroke="none" size={32} />
    //                     </div>
    //                 </div>

    //                 {/* ✅ Botão para adicionar ao carrinho */}
    //                 <button
    //                     className="w-full bg-[#148787] text-xl text-slate-50 p-4 mt-3 rounded-md 
    //                     hover:bg-[#7ccfcf] hover:scale-105 transition duration-300"
    //                     onClick={handleAdicionarAoCarrinho}
    //                 >
    //                     Adicionar ao Carrinho
    //                 </button>
    //             </div>
    //         </div>
    //     </div>
    // );
}

export default Detalhes;


// import React, { useEffect, useState } from 'react';
// import { Heart } from 'lucide-react';
// import { Send } from 'lucide-react';
// import { useParams } from 'react-router-dom';
// import Conteudo from './Conteudo';
// import { useNavigate } from 'react-router-dom'; 

// function Detalhes() {
//     const { id } = useParams(); // ✅ Obtém o ID da URL
//     const [produto, setProduto] = useState(null);
//     const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
//     const navigate = useNavigate(); 
//     // Buscar os detalhes do produto com base no ID
//     useEffect(() => {
//         const fetchProduto = async () => {
//             try {
//                 const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//                 const data = await response.json();
//                 setProduto(data); // Armazena o produto específico no estado
//             } catch (error) {
//                 console.error("Erro ao buscar o produto:", error);
//             } finally {
//                 setLoading(false); // ✅ Finaliza o carregamento quando os dados chegam
//             }
//         };

//         fetchProduto();
//     }, [id]); // Atualiza os detalhes sempre que o ID mudar

//     // Se os dados ainda estiverem carregando, exibir um loading
//     if (loading) {
//         return <div className="text-center mt-10">Carregando...</div>;
//     }

//     // Se o produto não for encontrado (exemplo: ID inválido)
//     if (!produto) {
//         return <div className="text-center mt-10">Produto não encontrado!</div>;
//     }

//     const redirCarrinho = (id) => {
//         navigate(`/carrinho/${id}`);
//     };





//     return (
//         <div className="w-[1140px] flex flex-col justify-start p-10">

//             <h1 className="text-2xl text-slate-600 font-bold">{produto.title}</h1>

//             <div className="grid grid-cols-2 gap-4 mt-5 pt-12" key={produto.id}>
                
                
//                 <div className="w-[500px] h-[300px] flex items-center justify-center bg-white rounded-lg shadow-md">
//                     <img src={produto.image} alt={produto.title} className="w-[250px] h-[250px] object-contain" />
//                 </div>


//                 <div className="flex flex-col">
                    
//                     {/* bloco descrição e coração */}
//                     <div className='grid grid-cols-[80%_20%] gap-1 items-center '>
//                         <div>
//                             <p className="text-gray-600 mt-2">{produto.description}</p>
//                             <span className="text-yellow-500">
//                                 {'★'.repeat(Math.floor(produto.rating.rate))}
//                             </span>
//                         </div>
//                         <div className='flex justify-center'>
//                             <p><Heart fill="red" stroke="none" size={32}/></p>
//                         </div>
//                     </div>



//                     <div className='grid grid-cols-[80%_20%] gap-1 items-center '>
//                         <div >  
//                             <p className="text-xl font-bold text-slate-700 mt-2">Preço: R$ {produto.price}
//                                 <span> à vista</span>
//                             </p>
//                             <span className="text-gray-500 text-sm">10x de R$ {(produto.price / 10).toFixed(2)} sem juros</span>
//                         </div>
//                         <div className='flex justify-center'>
//                             <Send  />
//                         </div>
//                     </div>

//                     <button className='w-full bg-[#148787] text-xl text-slate-50 p-4 mt-3 rounded-md 
//                                         hover:bg-[#7ccfcf] hover:scale-105 transition duration-300'
//                                         onClick={() => redirCarrinho(produto.id)}
//                                         >
//                                             Comprar
//                                             </button>

//                     <button className='w-full bg-[#fff] border-2 border-[#148787] text-[14px]  text-[#148787] p-4 mt-3 rounded-md
//                                         hover:bg-[#e0e0e0] hover:scale-105 transition duration-300'
//                                         onClick={() => redirCarrinho(produto.id)}
//                                         >Adicionar a sacola</button>



//                 </div>
//             </div>




//             <div className='flex flex-col pb-10'>
//                 <Conteudo quantidadeItens={4} />
//             </div>



//         </div>
//     );
// }

// export default Detalhes;







// import React, { useEffect, useState } from 'react';
// import { Heart } from 'lucide-react';
// import { Send } from 'lucide-react';
// import { useParams } from 'react-router-dom';
// import Conteudo from './Conteudo';
// import { useNavigate } from 'react-router-dom'; 

// function Detalhes() {
//     const { id } = useParams(); // ✅ Obtém o ID da URL
//     const [produto, setProduto] = useState(null);
//     const [loading, setLoading] = useState(true); // Estado para controlar o carregamento
//     const navigate = useNavigate(); 
//     // Buscar os detalhes do produto com base no ID
//     useEffect(() => {
//         const fetchProduto = async () => {
//             try {
//                 const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//                 const data = await response.json();
//                 setProduto(data); // Armazena o produto específico no estado
//             } catch (error) {
//                 console.error("Erro ao buscar o produto:", error);
//             } finally {
//                 setLoading(false); // ✅ Finaliza o carregamento quando os dados chegam
//             }
//         };

//         fetchProduto();
//     }, [id]); // Atualiza os detalhes sempre que o ID mudar

//     // Se os dados ainda estiverem carregando, exibir um loading
//     if (loading) {
//         return <div className="text-center mt-10">Carregando...</div>;
//     }

//     // Se o produto não for encontrado (exemplo: ID inválido)
//     if (!produto) {
//         return <div className="text-center mt-10">Produto não encontrado!</div>;
//     }

//     const redirCarrinho = (id) => {
//         navigate(`/carrinho/${id}`);
//     };





//     return (
//         <div className="w-[1140px] flex flex-col justify-start p-10">

//             <h1 className="text-2xl text-slate-600 font-bold">{produto.title}</h1>

//             <div className="grid grid-cols-2 gap-4 mt-5 pt-12" key={produto.id}>
                
                
//                 <div className="w-[500px] h-[300px] flex items-center justify-center bg-white rounded-lg shadow-md">
//                     <img src={produto.image} alt={produto.title} className="w-[250px] h-[250px] object-contain" />
//                 </div>


//                 <div className="flex flex-col">
                    
//                     {/* bloco descrição e coração */}
//                     <div className='grid grid-cols-[80%_20%] gap-1 items-center '>
//                         <div>
//                             <p className="text-gray-600 mt-2">{produto.description}</p>
//                             <span className="text-yellow-500">
//                                 {'★'.repeat(Math.floor(produto.rating.rate))}
//                             </span>
//                         </div>
//                         <div className='flex justify-center'>
//                             <p><Heart fill="red" stroke="none" size={32}/></p>
//                         </div>
//                     </div>



//                     <div className='grid grid-cols-[80%_20%] gap-1 items-center '>
//                         <div >  
//                             <p className="text-xl font-bold text-slate-700 mt-2">Preço: R$ {produto.price}
//                                 <span> à vista</span>
//                             </p>
//                             <span className="text-gray-500 text-sm">10x de R$ {(produto.price / 10).toFixed(2)} sem juros</span>
//                         </div>
//                         <div className='flex justify-center'>
//                             <Send  />
//                         </div>
//                     </div>

//                     <button className='w-full bg-[#148787] text-xl text-slate-50 p-4 mt-3 rounded-md 
//                                         hover:bg-[#7ccfcf] hover:scale-105 transition duration-300'
//                                         onClick={() => redirCarrinho(produto.id)}
//                                         >
//                                             Comprar
//                                             </button>

//                     <button className='w-full bg-[#fff] border-2 border-[#148787] text-[14px]  text-[#148787] p-4 mt-3 rounded-md
//                                         hover:bg-[#e0e0e0] hover:scale-105 transition duration-300'
//                                         onClick={() => redirCarrinho(produto.id)}
//                                         >Adicionar a sacola</button>



//                 </div>
//             </div>




//             <div className='flex flex-col pb-10'>
//                 <Conteudo quantidadeItens={4} />
//             </div>



//         </div>
//     );
// }

// export default Detalhes;

















// import { Heart } from 'lucide-react';
// import { Star } from 'lucide-react';
// import geladera from '../assets/geladeira.jpg';
// // import logo_tce from '../assets/logo_tce.png';

// function Conteudo() {
//     return (
//         <div className='w-[1140px] flex flex-col justify-start p-10'>
//             <h1 className='text-2xl text-slate-600 font-bold'>Ofertas especiais</h1>
//             <h3 className='text-1xl text-slate-600 '>Os melhores conteudos</h3>
            
//             <div className='grid grid-cols-4 gap-1  mt-3'>
               
//                <div className='bg-slate-50 p-4 rounded-lg m-3'>
//                     <img src={geladera} alt="Produto" />
//                     <h1 className='text-1xl font-bold'>Geladeira</h1>
//                     <span className='flex gap-1'>
//                         <Star fill="orange" stroke="none" size={15} />
//                         <Star fill="orange" stroke="none" size={15} />
//                         <Star fill="orange" stroke="none" size={15} />
//                         <Star fill="orange" stroke="none" size={15} />
//                         <Star fill="orange" stroke="none" size={15} />
//                     </span>
//                     <div className='grid grid-cols-2 gap-2 items-center justify-between'>
//                             <div>
//                                 <h1 className='text-1xl font-semibold'>R$ 3.599</h1>
//                                 <span className='text-[12px]  font-extralight'>10x de R$ 250</span>
//                             </div>
//                             <div className='flex justify-end'>
//                                 <p><Heart fill="red" stroke="none"/></p>
//                             </div>
//                     </div>
//                </div>

               


//             </div>


//         </div>
//     );
    
// }

// export default Conteudo;