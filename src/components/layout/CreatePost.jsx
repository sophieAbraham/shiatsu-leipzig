import { React, useState, useEffect } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import * as Styles from "../../services/styles.js";
//import axios from "axios";
import Footer from "./Footer.jsx";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { addPost } from "../../services/api-helpers.js";
import ItemUpload from "./ItemUpload.jsx";


function CreatePost() {

    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        date: "",
    });

    const navigate = useNavigate();


    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onResReceived = (data) => {
        console.log(data);
        navigate("/aktuell");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        addPost(inputs)
            .then(onResReceived)
            .catch((err) => console.log(err));
    };

    return (
        <motion.div
            className="container mx-auto bg-center bg-no-repeat bg-cover bg-logo-bg h-screen"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >

            <div className={`${Styles.contentBox}`}>
                <h2 className={`${Styles.heading2box}`}>Hier kannst du einen neuen Post erstellen</h2>

                <IoIosAddCircleOutline className="md:ml-24 text-4xl text-gray-400"/>
                <ItemUpload className='mb-4' />

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-start items-center mx-auto w-full h-full md:w-3/4 p-4 rounded-md"
                >

                    <div className="w-full mb-4 text-gray-400">
                        <input
                            type="text"
                            name="title"
                            placeholder='Titel'
                            value={inputs.title}
                            onChange={handleChange}
                            className='w-full p-4 outline-1 outline-lavendeldunkel text-gray-500'
                        />
                    </div>

                    <textarea
                        cols='48'
                        rows='10'
                        type="text"
                        name="description"
                        placeholder='Gib hier deinen Text ein ...'
                        value={inputs.description}
                        onChange={handleChange}
                        className="w-full border border-gray-400 outline-1 outline-lavendeldunkel resize-none text-gray-500 p-4"
                    >
                    </textarea>

                    <div className="flex flex-col justify-start items-start w-full mb-4 p-4">
                        <label className="p-4 text-gray-400">Datum</label>
                        <input
                            type="date"
                            name="date"
                            placeholder='Datum'
                            value={inputs.date}
                            onChange={handleChange}
                            className='w-full p-4 outline-1 outline-lavendeldunkel text-gray-500 cursor-pointer'
                        />
                    </div>

                    <button type="submit" className={`${Styles.button} mb-40 md:mb-20`}>Post erstellen</button>
                </form>

            </div>

            <Footer />

        </motion.div>

    )
};

export default CreatePost;