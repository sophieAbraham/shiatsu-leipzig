import React, { useState } from "react";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { contentBox, heading2box, heading3box, headingInfobox, paragraph, pInfobox, list, button } from "../services/styles";
import { motion } from 'framer-motion';


function Shiatsu() {

    let [boxOpen, setBoxOpen] = useState(true);

    return (

        <motion.div
            className=''
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >

            <div className={`${contentBox}`}>
                <h2 className={`${heading2box}`}>Zen-Shiatsu</h2>

                <p className={`${paragraph}`}>
                    <i className=''>Ursprung in der traditionell chinesischen Medizin/Menschenbild.</i><br />
                    Als ganzheitliche Körpertherapie aus der traditionell chinesischen Medizin (TCM) schöpft Shiatsu
                    aus einer mehr als 2000 Jahren alten Erfahrung.
                    In der TCM richten wir den Blick auf den gesamten Menschen. Als zusammenhängendes System sind
                    alle Körperteile, Organe und Emotionen durch Energiebahnen (Meridiane) miteinander verbunden und
                    werden mit Lebensenergie (Qi) versorgt. Ziel ist der ungehinderte Fluss unseres Qi in
                    seinen unterschiedlichen Qualitäten. Vital und kraftvoll können wir uns von Krankheiten
                    erholen und vor einem erneuten Erkranken schützen.
                </p>

                <h3 className={`${heading3box}`}>Einzigartigkeit des Shiatsu </h3>

                <p className={`${paragraph}`}>
                    Mit tiefen und sanften Berührungen entlang der Meridiane stellt Shiatsu die Energieflüsse wieder
                    her und wirkt regenerativ auf das vegetative Nervensystem. <br />
                    Shiatsu bietet damit eine schmerzlose Alternative zu Akupunktur und Akupressur,
                    insbesondere für sensitive, reizempfindliche Menschen.
                </p>

                {
                    boxOpen ?

                        <div className="w-3/4 mx-auto">
                            <h3 className={`${heading3box}`}>Umfassende Wirkkraft</h3>

                            <p className='text-xl md:text-2xl text-yellow-500 text-justify leading-relaxed md:leading-loose'>
                                Shiatsu hilft auf diese Weise sich selbst wieder besser zu
                                spüren und achtsam zu werden für die Signale, die uns unser Körper sendet.
                                Als unterstützende Behandlung:
                            </p>

                            <ul className={`${list}`}>
                                <li>von akuten oder wiederkehrenden Schmerzen, die auf Stress und Verspannung beruhen</li>
                                <li>fördert es die Beweglichkeit bei Gelenkproblemen</li>
                                <li>wirkt es ausgleichend und stabilisierend bei Erschöpfung, Schlafstörungen und <br /> innerer Unruhe</li>
                                <li>begleitet es die vielfältigen Veränderungsprozesse in der Schwangerschaft und bereitet auf
                                    wohltuende und entlastende Weise auf eine entspannte Geburt vor
                                </li>
                            </ul>

                            <button className={`${button}`} onClick={() => setBoxOpen(!boxOpen)}>Mehr Info</button>
                        </div>

                        :

                        <div className={`w-3/4 mx-auto mt-10 ${!boxOpen ? '' : 'hidden'}`}>
                            <h3 className={`${headingInfobox}`}>Masunagas Mitgefühl</h3>
                            <p className={`${pInfobox}`}>
                                In der Tradition von Shizuto Masunaga findet die Behandlung in einer ruhigen,
                                meditativen Atmosphäre statt. Die Berührungen sind flexibel und interaktiv - und
                                Ausdruck einer mitfühlenden Verbindung. Unsere Lebenssituation ist umfassend und
                                einzigartig. Sie befindet sich in stetiger Veränderung. Somit zeigt sie sich in
                                unterschiedlichen Meridianqualitäten. Ich behandele die Meridiane, die das stärkste
                                energetische Ungleichgewicht (kyo und jitsu) aufweisen. Zen-Shiatsu ist somit Beziehung,
                                Erkunden und Behandeln zugleich.
                            </p>

                            <button className={`${button}`} onClick={() => setBoxOpen(!boxOpen)}><HiArrowNarrowLeft /></button>
                        </div>

                }

            </div>

        </motion.div>

    );
};

export default Shiatsu;