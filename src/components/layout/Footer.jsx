import { Link, useLocation } from 'react-router-dom';
import { navLink, activeNav } from '../../services/styles.js';
import { BiCopyright } from 'react-icons/bi';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';


function Footer() {

    const location = useLocation();
    let isAdmin;
    let isImpressum;

    (location.pathname === '/login' ? isAdmin = activeNav : isAdmin = "");
    (location.pathname === '/impressum' ? isImpressum = activeNav : isImpressum = "");

    return (

        <footer className='fixed bottom-0 left-0 flex justify-center items-center w-full md:h-20 z-40 text-olivedunkel bg-transparent'  >

            <ul className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full lg:w-3/4 h-full tracking-widest">
                <li className={`${navLink} ${isAdmin}`} title='Admin' >
                    <Link to="/login">
                        <MdOutlineAdminPanelSettings className="text-3xl" />
                    </Link>
                </li>

                <li>Shiatsu Leipzig</li>
                
                <li className="flex justify-center items-center">
                    <BiCopyright className="text-3xl mr-1" />
                    Copyright 2023
                </li>

                <li>Alle Rechte vorbehalten</li>

                <li className={`${navLink} ${isImpressum}`}>
                    <Link to="/impressum">
                        Impressum
                    </Link>
                </li>
            </ul>

        </footer>

    )
}

export default Footer;