import React, { useState } from "react";
import { contentBox, heading2box, headingInfobox, heading3box, paragraph, pInfobox, button } from "../services/styles";
//import Image1 from '../assets/img/DSC03652-300.jpg';
//import Image2 from '../assets/img/DSC03649-300.jpg';
//import Image3 from '../assets/img/IMG_20220520_110105-300.jpg';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { motion } from 'framer-motion';
import ImageSlider from "../components/layout/ImageSlider";
import { sliderData } from '../components/layout/sliderData.js';
import '../../src/index.css';


function Behandlung() {

    let [boxOpen, setBoxOpen] = useState(true);

    return (

        <motion.div
            className=''
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >

            <div className={`${contentBox}`}>
                <h2 className={`${heading2box}`}>Behandlung</h2>

                <p className={`${paragraph}`}>
                    Ich arbeite mit Daumen, Fingern, Handflächen, Ellbogen, Knien und dem eigenem Körpergewicht.
                    Die Ausrichtung des eigenen Körpers und die Verlagerung des Körpergewichtes spielen
                    eine zentrale Rolle. Die Behandlung findet daher traditionell auf dem Boden statt.
                    Die Klienten liegen bekleidet auf einer dünnen Matte, dem Futon. Die Behandlung eignet
                    sich für jedes Alter und dauert inkl. Vor- und Nachgespräch zwischen 60-90 Min.
                </p>

                <ImageSlider slides={sliderData} className='' />


                {
                    boxOpen ?

                        <div>
                            <div className="">
                                <h3 className={`${heading3box}`}>Heilmassage</h3>

                                <p className={`${paragraph}`}>
                                    Jede Behandlung wird entsprechend Ihres momentanen IST- Zustandes gestaltet. 
                                    Der Fokus wird vor jeder Behandlung neu gesetzt:  Je nachdem, ob es Beruhigung, 
                                    Öffnung, Zentrierung oder Bewegung braucht, kommen dynamisch - vitalisierende 
                                    Techniken für das Verteilen von Energie oder tonisierende Haltetechniken für 
                                    den Aufbau und das Beruhigen von Energie zum Einsatz. In der Meridianarbeit 
                                    sind dabei weniger einzelne definierte Punkte als vielmehr der gesamte 
                                    Meridianverlauf von Bedeutung.
                                </p>
                            </div>

                            <button className={`${button}`} onClick={() => setBoxOpen(!boxOpen)}>Mehr Info</button>
                        </div>

                        :

                        <div className={`w-3/4 mx-auto mt-5 ${!boxOpen ? '' : 'hidden'}`}>
                            <div>
                                <h3 className={`${headingInfobox}`}>Anamnese</h3>
                                <p className={`${pInfobox}`}>
                                    In einem Gespräch vor Beginn der Behandlung berichten Sie mir,
                                    wo Ihre Problematik liegt, bzw. was Sie als Unterstützung benötigen.
                                </p>
                            </div>

                            <div>
                                <h3 className={`${headingInfobox}`}>Hara-Diagnose</h3>
                                <p className={`${pInfobox}`}>
                                    Die Behandlung wird mit der Hara-Diagnose eröffnet, einem feinfühligen
                                    Ertasten des Bauchraumes, in dem sich alle Meridianqualitäten zeigen.
                                </p>
                            </div>

                            <div>
                                <h3 className={`${headingInfobox}`}>Bo-Shin „Betrachte dein Gegenüber“</h3>
                                <p className={`${pInfobox}`}>
                                    Neben dem Hara-Befund integriere ich Erkenntnisse aus dem Bo Shin, der
                                    Wahrnehmung von Körperhaltung, dem Klang der Stimme, Färbungen der Haut etc.
                                </p>
                            </div>

                            <button className={`${button}`} onClick={() => setBoxOpen(!boxOpen)}><HiArrowNarrowLeft /></button>
                        </div>
                }

            </div>

        </motion.div>

    );
};

export default Behandlung;