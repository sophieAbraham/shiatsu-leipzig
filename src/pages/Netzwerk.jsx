import React from "react";
import { contentBox, heading2box, headingsContact } from "../services/styles";
import Footer from '../components/layout/Footer.jsx';
import { motion } from 'framer-motion';


function Netzwerk() {

    return (

        <motion.div
            className='bg-center bg-no-repeat bg-cover bg-logo-bg h-screen'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >

            <div className={`${contentBox}`}>
                <h2 className={`${heading2box}`}>Inspiration und Kooperation</h2>

                <div>
                    <div className="flex justify-center items-center">
                        <h3 className={`${headingsContact} hover:text-lavendel`}>
                            <a href="https://www.nadjalasbeck.com/" target="_blank">Nadja Lasbeck {'\u007C'} Paar- und Sexualberatung</a>
                        </h3>
                    </div>

                    <div className="flex justify-center items-center">
                        <h3 className={`${headingsContact} hover:text-lavendel`}>
                            <a href="https://sharlachstudio.com/" target="_blank">Scharlach Studio {'\u007C'} Poster Screenprint Illustration</a>
                        </h3>
                    </div>

                    <div className="flex justify-center items-center">
                        <h3 className={`${headingsContact} hover:text-lavendel`}>
                            Sophie Abraham {'\u007C'} CodeShip
                        </h3>
                    </div>
                </div>
            </div>

            <Footer />

        </motion.div>
    );
};

export default Netzwerk;