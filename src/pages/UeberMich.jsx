import React from "react";
import { contentBox, heading2box, paragraph } from "../services/styles";
import Portrait from '../assets/img/f1 bear1-zuschnitt-300.jpg';
import Logo from '../assets/img/altes-logo-pastell-zuschnitt.jpg';
import { motion } from 'framer-motion';



function UeberMich() {

    return (
        <motion.div
            className=''
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >

            <div className={`${contentBox}`}>
                <h2 className={`${heading2box}`}>Ankommen und Weitergehen</h2>

                <div className="w-full flex justify-center items-center">
                    <img src={Portrait} alt="Ein Portrait von Franziska Tansinne"
                        className="w-1/2 md:w-fit border border-gray-300 rounded-full shadow-lg mt-3 mb-3" />
                </div>

                <p className={`${paragraph}`}>
                    Leben heißt Wachstum ... im steten Wandel aus Licht und Dunkelheit, Aktivität und Ruhe,
                    Entfaltung und Rückzug. Auch wir folgen diesen Rhythmen. Doch was ist, wenn wir aus dem
                    Gleichgewicht geraten? Wo und wie können wir uns wieder anbinden an unsere eigene Kraft?
                </p>

                <p className={`${paragraph} mt-4`}>
                    Ich glaube, dass Berührungen heilsam sein können. <br />
                    Über Berührung finden wir eine universelle Sprache der Begegnung - ursprünglich und konkret. <br />
                    Sie überwindet die Grenzen der Sprache und knüpft eine tiefe empathische Verbindung. <br />
                    Shiatsu ermöglicht durch feinfühlige Berührungen Bedürfnisse erfahrbar zu machen.
                    Das Fühlen des eigenen So-Seins schafft einen Moment des Ankommens, der uns erlaubt weiterzugehen.
                </p>

                <p className={`${paragraph} mt-4`}>
                    Meine Zen-Shiatsu-Ausbildung in der Tradition von Shizuto Masunaga habe ich am Europäischen
                    Shiatsu Institut Berlin abgeschlossen.
                </p>

                <p className={`${paragraph} mt-4`}>
                    Das Europäische Shiatsu Institut (ESI) ist eine der führenden Shiatsuschulen in Deutschland, 
                    Österreich und Italien. Die dreijährige Ausbildung entspricht den Standards der Gesellschaft 
                    für Shiatsu in Deutschland e.V. (GSD).
                </p>

                <div className="p-3 md:-ml-6 md:-mr-6">
                    <img
                        title="Shiatsu Leipzig: Franziska Tansinne"
                        src={Logo}
                        alt="Baumlogo Shiatsu Leipzig"
                        className="w-1/2 md:w-1/2 md:scale-75 mx-auto rounded-full shadow-xl md:-my-10"
                    />
                </div>

            </div>

        </motion.div>
    );
};

export default UeberMich;