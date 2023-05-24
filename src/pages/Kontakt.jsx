import React from "react";
import { FaPaperPlane } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { contentBox, headingsContact, contactIcons } from "../services/styles";
import Logo2 from '../assets/img/logo-shiatsu-leipzig.jpg';
import Footer from '../components/layout/Footer.jsx';
import { motion } from 'framer-motion';


function Kontakt() {

    return (

        <motion.div
            className='bg-center bg-no-repeat bg-cover bg-logo-bg h-screen'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: {duration: 0.5} }}
        >

            <div className={`${contentBox}`}>
                {/* <h2 className={`${heading2box}`}>Kontakt</h2> */}

                <div className="w-full flex justify-center items-center">
                    <img src={Logo2} alt="Logo Shiatsu Leipzig"
                        className="w-3/4 md:w-1/2 rounded-full mt-3 mb-3" />
                </div>

                <div>
                    <div className="flex justify-center items-center">
                        <FaPaperPlane className={`${contactIcons} mr-4`} />
                        <h3 className={`${headingsContact} hover:text-violet-400`}>
                            <a href="mailto:tansinne.f@posteo.de">tansinne.f{'\u0040'}posteo.de</a>
                        </h3>
                    </div>

                    <div className="flex justify-center items-center">
                        <MdPhoneIphone className={`${contactIcons} mr-4`} />
                        <h3 className={`${headingsContact}`}>{'\u002B'}49176 845 078 21</h3>
                    </div>

                    <h3 className={`${headingsContact} -mt-4`}>Walter-Heinze-Straße 22 {'\u007C'} Hinterhof</h3>
                    <h3 className={`${headingsContact} mt-4`}>(Familienzentrum Plagwitz)</h3>
                    <h3 className={`${headingsContact}`}>MO {'\u002B'} FR 9-14.30 Uhr</h3>
                </div>
                
            </div>

            <Footer />

        </motion.div>
    );
};

export default Kontakt;