import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cabecalho from './components/Cabecalho'
import Detalhes from "./components/Detalhes";
import Conteudo from "./components/Conteudo";
import Carrinho from "./components/Carrinho";
import { CarrinhoProvider } from "./components/CarrinhoContext"; // Importa o contexto do carrinho, disponibilizando para toda a aplicação
import Footer from "./components/Footer";

function App() {
    return (
        <CarrinhoProvider> {/* toda a aplicação tem acesso ao carrinho */}
            <Router>
                <div className="flex h-full flex-col items-center justify-center bg-gray-100">
                <Cabecalho />
                <div className='mt-20 w-full h-full flex flex-grow justify-center'>
                          <Routes>
                              <Route path="/" element={<Conteudo />} />
                              <Route path="/detalhes/:id" element={<Detalhes />} />
                              <Route path="/carrinho" element={<Carrinho />} />
                          </Routes>
                          </div> 
                </div>
                <Footer />
            </Router>
        </CarrinhoProvider>
    );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
// import Cabecalho from './components/Cabecalho'
// import Conteudo from './components/Conteudo';
// import Detalhes from './components/Detalhes'; // Importe a página de detalhes
// import Carrinho from './components/Carrinho';


// function App() {
//   return ( 

 
//         <Router>
//           <div className="flex flex-col items-center justify-center bg-gray-100">
//             <Cabecalho /> {/* Cabecalho sempre visível */}
//             <div className='mt-20 w-full h-screen flex justify-center'>
//             <Routes>
//               <Route path="/" element={<Conteudo />} />
//               <Route path="/detalhes/:id" element={<Detalhes />} />
//               <Route path="/carrinho/:id" element={<Carrinho />} />
//             </Routes>
//             </div>
//           </div>
//         </Router>
   
//   )

// }

// export default App;