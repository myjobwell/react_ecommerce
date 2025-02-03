import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import formatarModeda from '../utils/formatarMoeda';


// Preicisa importar o navigate e declarar o mesmo como 
// const pra poder validar o codigo


function Conteudo({ quantidadeItens }) {
    const [produtos, setProducts] = useState([]);
    const navigate = useNavigate(); 

    //carrega a quantidade padrão de itens a serem exibidos, se vier vazio exibe 8 itens
    const getQuantidadeItens = (quantidade = 8) => quantidade;

    // Buscar os dados da API
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();

            const qtd = getQuantidadeItens(quantidadeItens);
            setProducts(data.slice(0, qtd));
        };
        fetchData();
    }, [quantidadeItens]); // Recarrega se a quantidade mudar

    // redireciona pagina
    const redirDetalhes = (id) => {
        navigate(`/detalhes/${id}`);
    };

        return (
        <div className='w-[1140px] flex flex-col justify-start pt-5'>
            <h1 className='text-2xl text-slate-600 font-bold'>Ofertas Especiais</h1>
            <h3 className='text-1xl text-slate-600'>Os melhores preços</h3>

            <div className='grid grid-cols-4 gap-1 mt-3'>
                {produtos.map((produto) => (
                    <div key={produto.id} 
                        //o cursr pointer adiciona um icone de mãozinha para indicar que é clicavel
                        className='bg-[#fff] p-4 rounded-lg m-3 flex flex-col cursor-pointer' 
                        onClick={() => redirDetalhes(produto.id)}
                    >
                        <div className='h-48'>
                            <img src={produto.image} alt="Imagem do produto" className='w-full h-full object-contain'/>
                        </div>
                        <h2 className='text-1xl font-bold'>{produto.title}</h2>
                        <span className='text-yellow-500'>
                            {'★'.repeat(Math.floor(produto.rating.rate))}
                        </span>
                        <div className='grid grid-cols-2 gap-2 items-center justify-between'>
                            <div>
                                <h1 className='text-1xl font-semibold'>{formatarModeda(produto.price, 'BRL')}</h1>
                                <span className='text-[12px] font-extralight'>10 x de {formatarModeda((produto.price / 10), 'BRL')}
                                </span>
                            </div>
                            <div className='flex justify-end'>
                                <p><Heart fill="red" stroke="none"/></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Conteudo;





// import React, { useEffect, useState } from 'react';
// import { Heart } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// function Conteudo() {
//     const [produtos, setProducts] = useState([]);

//     //para buscar os dados da APO
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch('https://fakestoreapi.com/products');
//             const data = await response.json();

//             const listaProdutos = data.slice(0, 8); //limita a quantidade de produtos a serem exibidos          
            
//             const ComValorParcela = listaProdutos.map((produto) => {
//                 return {
//                     ...produto,
//                     parcela: valorParcela(produto.price)
//                 }
//             });

//             setProducts(ComValorParcela);

//         };

//         fetchData();

//     }, []); //vazio faz com que o busca ocorra apenas uma vez


//     const valorParcela = (preco) => {
//         return (preco / 10)
//     }



//     const redirDetalhes = (id) => {
//         navigate(`/Detalhes/${id}`);
//     }


  
//     return (
//         <div className='w-[1140px] flex flex-col justify-start p-10'>
//             <h1 className='text-2xl text-slate-600 font-bold'>Ofertas Especiais</h1>
//             <h3 className='text-1xl text-slate-600 '>Os melhores precos</h3>

//             <div className='grid grid-cols-4 gap-1 mt-3'>


//                 {/* //montagem de elemento por elemento, produtos.map vai percorrer o array trazendos os conteudos do json, 
//                 // vou precisar fechar a quantidade em 8 itens para nao ficar exibindo todos na tela */}

//                 {produtos.map((produto) => (

                   
//                 <div key={produto.id} 
//                     className='bg-[#fff] p-4 rounded-lg m-3 flex flex-col cursor-pointer'
//                     onClick={() => redirDetalhes(produto.id)}
//                     >
//                     <div className='h-48'>
//                     <img src={produto.image} alt="Imagem do produto" className='w-full h-full object-contain'/>
//                     </div>
//                     <h2 className='text-1xl font-bold'>{produto.title}</h2>
//                     <span className='text-yellow-500'>
//                         {'★'.repeat(Math.floor(produto.rating.rate))}
//                     </span>

//                     <div className='grid grid-cols-2 gap-2 items-center justify-between'>
//                         <div>
//                             {/* Procurar como transformar os valores para o formato de reais  */}
//                             <h1 className='text-1xl font-semibold'>R$ {produto.price}</h1>
//                             {/* Precirso pegar o preço do produto e fazer a divisão pela quantidade de parcelas para exbir apenas o valor da parcela */}
//                             <span className='text-[12px]  font-extralight'>10 x de {produto.parcela.toFixed(2)}</span>
//                         </div>
//                         <div className='flex justify-end'>
//                         <p><Heart fill="red" stroke="none"/></p>
//                         </div>
//                     </div>
 
//                 </div>
                

                

//                 ))}

//                 {/* //encerra o carregamento dos dados de forma dinamica para contruir o elemento */}

//             </div>
            
            
//         </div>
//     );
// }

// export default Conteudo;








// import React, { useEffect, useState } from 'react';
// import { Heart } from 'lucide-react';

// function Conteudo() {
//     const [produtos, setProducts] = useState([]);

//     //para buscar os dados da APO
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch('https://fakestoreapi.com/products');
//             const data = await response.json();

//             const listaProdutos = data.slice(0, 8); //limita a quantidade de produtos a serem exibidos          
            
//             const ComValorParcela = listaProdutos.map((produto) => {
//                 return {
//                     ...produto,
//                     parcela: valorParcela(produto.price)
//                 }
//             });

//             setProducts(ComValorParcela);

//         };

//         fetchData();

//     }, []); //vazio faz com que o busca ocorra apenas uma vez


//     const valorParcela = (preco) => {
//         return (preco / 10)
//     }


  
//     return (
//         <div className='w-[1140px] flex flex-col justify-start p-10'>
//             <h1 className='text-2xl text-slate-600 font-bold'>Ofertas Especiais</h1>
//             <h3 className='text-1xl text-slate-600 '>Os melhores precos</h3>

//             <div className='grid grid-cols-4 gap-1 mt-3'>


//                 {/* //montagem de elemento por elemento, produtos.map vai percorrer o array trazendos os conteudos do json, 
//                 // vou precisar fechar a quantidade em 8 itens para nao ficar exibindo todos na tela */}

//                 {produtos.map((produto) => (

                   
//                 <div key={produto.id} className='bg-[#fff] p-4 rounded-lg m-3 flex flex-col'>
//                     <div className='h-48'>
//                     <img src={produto.image} alt="Imagem do produto" className='w-full h-full object-contain'/>
//                     </div>
//                     <h2 className='text-1xl font-bold'>{produto.title}</h2>
//                     <span className='text-yellow-500'>
//                         {'★'.repeat(Math.floor(produto.rating.rate))}
//                     </span>

//                     <div className='grid grid-cols-2 gap-2 items-center justify-between'>
//                         <div>
//                             {/* Procurar como transformar os valores para o formato de reais  */}
//                             <h1 className='text-1xl font-semibold'>R$ {produto.price}</h1>
//                             {/* Precirso pegar o preço do produto e fazer a divisão pela quantidade de parcelas para exbir apenas o valor da parcela */}
//                             <span className='text-[12px]  font-extralight'>10 x de {produto.parcela.toFixed(2)}</span>
//                         </div>
//                         <div className='flex justify-end'>
//                         <p><Heart fill="red" stroke="none"/></p>
//                         </div>
//                     </div>
 
//                 </div>
                

                

//                 ))}

//                 {/* //encerra o carregamento dos dados de forma dinamica para contruir o elemento */}

//             </div>
            
            
//         </div>
//     );
// }

// export default Conteudo;
