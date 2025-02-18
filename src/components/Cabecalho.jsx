import logo_tce from '../assets/logo_tce.png';
import { Link } from 'react-router-dom';
import ButtonCarrinho from './ButtonCarrinho';

function Cabecalho() {
    return (
        <header className="flex justify-center items-center gap-2 bg-[#148787] w-full
                            shadow-md z-50 fixed top-0 left-0 mb-5 ">
            <div className='w-[1140px] grid grid-cols-[20%_60%_20%] justify-between items-center'>
                <Link to='/'>
                <img src={logo_tce} alt="Logo TCE" className="max-h-10"/>
                </Link>

                <div className='flex flex-row gap-4  items-center'    >
                    <h1 className='text-2xl text-slate-50 font-bold'>TCE-COMMERCE</h1>
                    <a href="/cadastrar" className='text-slate-50'>Cadastar Produto</a>
                </div>

                
                <ButtonCarrinho />
            </div>
        </header>
    );
    
}

export default Cabecalho;