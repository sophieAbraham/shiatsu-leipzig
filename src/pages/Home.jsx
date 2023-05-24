import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/img/altes-logo-pastell-zuschnitt.jpg';
import { heading1, heading2 } from "../services/styles";
import { motion } from 'framer-motion';


function Home() {

    return (
        <motion.div
            className="container flex flex-col justify-center items-center h-screen"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: {duration: 0.5} }}
        >

            <Link to="/aktuell">
                <img
                    title="Shiatsu Leipzig: Franziska Tansinne"
                    src={Logo}
                    alt="Baumlogo Shiatsu Leipzig"
                    className="mx-auto w-3/4 md:w-1/2 md:scale-75 rounded-full border-2 border-gray-300 shadow-xl -mt-40"
                />
            </Link>

            <div>
                <h1 className={`${heading1}`}>Franziska Tansinne</h1>
                <h2 className={`${heading2}`}>Shiatsu-Therapeutin <br /> Ganzheitliche Körpertherapie aus der TCM</h2>
            </div>

        </motion.div>
    );
};

export default Home;