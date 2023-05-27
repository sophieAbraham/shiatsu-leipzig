import React from "react";
import { contentBox, heading2box, button } from "../../services/styles.js";
import Logo2 from '../../assets/img/logo-shiatsu-leipzig.jpg';
import Footer from '../../components/layout/Footer.jsx';
//import CreatePost from '../../components/layout/CreatePost.jsx';

import { motion } from 'framer-motion';


function AdminDashboard(user) {

    function buttonHandler(evt) {
        console.log(evt);
    }

    return (

        <motion.div
            className='bg-center bg-no-repeat bg-cover bg-logo-bg h-screen'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >

            <div className={`${contentBox}`}>

                <h2 className={`${heading2box}`}>Liebe ${user.username}, willkommen in deinem Adminbereich!</h2>

                <div className="w-full flex justify-center items-center">
                    <img src={Logo2} alt="Logo Shiatsu Leipzig"
                        className="w-3/4 md:w-1/2 rounded-full mt-3 mb-3" />
                </div>

                <button onClick={buttonHandler} className={`${button}`}>Post bearbeiten</button>

            </div>

            <Footer />

        </motion.div>

    )
}


export default AdminDashboard;