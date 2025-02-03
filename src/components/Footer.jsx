import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo_tce from '../assets/logo_tce.png';

function Footer() {
    return (
        <footer className=" flex justify-center items-center bg-[#148787] w-full shadow-md py-4">
            <div className="w-[1140px] flex justify-center">
                

                
                <p className="text-white text-sm text-center pr-2">
                    © Wellington@com.br
                </p>

                
                <div className="flex justify-end gap-3">
                    <Link to="#" className="text-white hover:text-gray-300 transition">
                        <Facebook size={20} />
                    </Link>
                    <Link to="#" className="text-white hover:text-gray-300 transition">
                        <Instagram size={20} />
                    </Link>
                    <Link to="#" className="text-white hover:text-gray-300 transition">
                        <Twitter size={20} />
                    </Link>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
