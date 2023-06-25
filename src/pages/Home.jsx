import React from "react";
import { Link } from 'react-router-dom';
import Logo from '../assets/img/altes-logo-pastell-zuschnitt.jpg';
import { heading1, heading2 } from "../services/styles";
import { motion } from 'framer-motion';


function Home() {

    return (
        <motion.div
            className="container mx-auto bg-white flex flex-col justify-center items-center w-full md:w-3/4 min-h-screen"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: {duration: 0.3} }}
        >

            <Link to="/aktuell">
                <img
                    title="Logo: Sascha Knorr"
                    src={Logo}
                    alt="Baumlogo Shiatsu Leipzig"
                    className="mx-auto w-3/4 md:w-1/2 -mt-40 md:mt-20 xl:-mt-40 md:scale-90 xl:scale-75 rounded-full border-2 border-gray-300 shadow-xl"
                />
            </Link>

            <div className="mt-10 xl:-mt-10">
                <h1 className={`${heading1}`}>Franziska Tansinne</h1>
                <h2 className={`${heading2}`}>Shiatsu-Therapeutin <br /> Ganzheitliche Körpertherapie aus der TCM</h2>
            </div>

        </motion.div>
    );
};

export default Home;