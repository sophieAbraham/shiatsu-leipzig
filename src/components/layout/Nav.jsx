import { Link, useLocation } from 'react-router-dom';
import { nav, navIcons, navList, navLink, activeNav } from '../../services/styles.js';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdArrowCircleUp } from 'react-icons/md';



function Nav() {

    let [open, setOpen] = useState(false);

    const closeSideBar = () => {
        setOpen(false)
    }

    const location = useLocation();
    let isStart
    let isAktuell
    let isShiatsu;
    let isBehandlung;
    let isUeberMich;
    let isKontakt;
    let isNetzwerk;


    (location.pathname === '/' ? isStart = activeNav : isStart = "");
    (location.pathname === '/aktuell' ? isAktuell = activeNav : isAktuell = "");
    (location.pathname === '/shiatsu' ? isShiatsu = activeNav : isShiatsu = "");
    (location.pathname === '/behandlung' ? isBehandlung = activeNav : isBehandlung = "");
    (location.pathname === '/uebermich' ? isUeberMich = activeNav : isUeberMich = "");
    (location.pathname === '/kontakt' ? isKontakt = activeNav : isKontakt = "");
    (location.pathname === '/netzwerk' ? isNetzwerk = activeNav : isNetzwerk = "");


    return (

        <nav className={`${nav}`}>

            {
                open ?
                    <AiOutlineCloseCircle className={`${navIcons}`} onClick={() => setOpen(!open)} />
                    :
                    <RxHamburgerMenu className={`${navIcons}`} onClick={() => setOpen(!open)} />
            }

            <ul className={`${navList} ${!open ? 'right-[-100%]' : 'right-0'}`}>

                <li className={`${navLink} ${isAktuell}`}>
                    <Link to="/aktuell" className='py-5 inline-block' onClick={closeSideBar}>
                        Aktuell
                    </Link>
                </li>

                <li className={`${navLink} ${isShiatsu}`}>
                    <Link to="/shiatsu" className='py-5 inline-block' onClick={closeSideBar}>
                        Shiatsu
                    </Link>
                </li>

                <li className={`${navLink} ${isBehandlung}`}>
                    <Link to="/behandlung" className='py-5 inline-block' onClick={closeSideBar}>
                        Behandlung
                    </Link>
                </li>

                <li className={`${navLink} ${isUeberMich}`}>
                    <Link to="/uebermich" className='py-5 inline-block' onClick={closeSideBar}>
                        Über mich
                    </Link>
                </li>

                <li className={`${navLink} ${isKontakt}`}>
                    <Link to="/kontakt" className='py-5 inline-block' onClick={closeSideBar}>
                        Kontakt
                    </Link>
                </li>

                <li className={`${navLink} ${isNetzwerk}`}>
                    <Link to="/netzwerk" className='py-5 inline-block' onClick={closeSideBar}>
                        Netzwerk
                    </Link>
                </li>

                <li className={`${navLink} ${isStart}`}>
                    <Link to="/" className='py-5 inline-block' onClick={closeSideBar}>
                        <MdArrowCircleUp className='text-4xl -mb-7' title='Home' />
                    </Link>
                </li>

            </ul>
        </nav>
    );
}



export default Nav;