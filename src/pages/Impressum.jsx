import React from "react";
import { motion } from 'framer-motion';
import { impressumBox, pImprbox, heading2box, heading3box } from "../services/styles";
import Footer from "../components/layout/Footer";


function Impressum() {

    return (
        <motion.div
            className=''
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >
            <div className={`${impressumBox} pb-48 md:pb-20`}>
                <h1 className={`${heading2box}`}>Impressum</h1>

                <h2 className={`${heading3box}`}>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                <p className={`${pImprbox}`}>Franziska Tansinne<br />
                    Shiatsu Leipzig<br />
                    Groitzscher Stra&szlig;e 16<br />
                    04179 Leipzig</p>

                <h2 className={`${heading3box}`}>Kontakt</h2>
                <p className={`${pImprbox}`}>Telefon: +49 (0) 17684507821<br />
                    E-Mail: tansinne.f@posteo.de</p>

                <h2 className={`${heading3box}`}>Umsatzsteuer-ID</h2>
                <p className={`${pImprbox}`}>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
                    DE-232-542-09007</p>

                <h2 className={`${heading3box}`}>Redaktionell verantwortlich</h2>
                <p className={`${pImprbox}`}>Franziska Tansinne<br />
                    Groitscher Stra&szlig;e 16<br />
                    04179 Leipzig</p>

                <h3 className={`${heading3box}`}>Bildrechte</h3>
                <p className={`${pImprbox}`}>
                    Baumlogo {'\u007C'} Sascha Knorr <br />
                    Airlogo {'\u007C'} Franziska Tansinne <br />
                    Behandlungsbilder {'\u007C'} Jonas Müller, Franziska Tansinne <br />
                    Webentwicklung {'\u007C'} Sophie Abraham
                </p>

                <h3 className={`${heading3box}`}>Haftung für Links</h3>
                <p className={`${pImprbox}`}>
                    Ich setze Links um weitere Informationsmöglichkeiten aufzuzeigen und/oder zur Netzwerkarbeit. 
                    Dabei übernehme ich jedoch keine Gewähr für die fremden Inhalte Dritter. Die Verantwortung dieser 
                    Inhalte liegen bei*m jeweiligen Betreiber*in der Seite. Zum Zeitpunkt der Verlinkung waren keine 
                    Rechtsverstöße erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch 
                    ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von 
                    Rechtsverletzungen werde ich derartige Links umgehend entfernen.
                </p>


                <h2 className={`${heading3box}`}>EU-Streitschlichtung</h2>
                <p className={`${pImprbox}`}>
                    Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
                    <a
                        href="https://ec.europa.eu/consumers/odr/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://ec.europa.eu/consumers/odr/
                    </a>.<br />
                    Meine E-Mail-Adresse finden Sie oben im Impressum.</p>

                <h2 className={`${heading3box}`}>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
                <p className={`${pImprbox}`}>Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                <p className={`${pImprbox}`}>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>

                <h1 className={`${heading2box} mt-4`}>Urheberrechtshinweis</h1>

                <p className={`${pImprbox}`}>
                    Alle Inhalte dieser Website, insbesondere Texte, Fotografien und Grafiken, sind urheberrechtlich geschützt.
                    Das Urheberrecht liegt, soweit nicht ausdrücklich anders gekennzeichnet, bei Franziska Tansinne.
                    Bitte fragen Sie mich, falls Sie die Inhalte dieses Internetangebotes verwenden möchten.

                    Unter der „Creative Commons“-Lizenz“ veröffentlichte Inhalte, sind als solche gekennzeichnet.
                    Sie dürfen entsprechend den angegebenen Lizenzbedingungen verwendet werden.

                    Wer gegen das Urheberrecht verstößt (z.B. Bilder oder Texte unerlaubt kopiert),
                    macht sich gem. §§ 106 ff UrhG strafbar, wird zudem kostenpflichtig abgemahnt und muss Schadensersatz leisten
                    (§ 97 UrhG).
                </p>
            </div>

            <Footer />
        </motion.div>
    );
};

export default Impressum;