import { React, useEffect, useState } from "react";
import * as Styles from "../services/styles.js";
import { motion } from 'framer-motion';
import BlogCard from "../components/layout/BlogCard";
import Blumenbild from '../assets/img/summer-dakota-roos-unsplash.jpg';
import { AiOutlineTags, AiOutlineClockCircle } from "react-icons/ai";



function Aktuell() {

    const [posts, setPosts] = useState([]);

    let date = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('http://localhost:5000/posts/', {
                    method: 'GET'
                })

                const data = await res.json();
                setPosts(data);

            } catch (error) {
                console.log(error);
            }
        }
        return getData;

    }, []);

    let post = posts[posts.length - 1];


    return (
        <motion.div
            className=''
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
        >

            <div className={`${Styles.blogBox}`}>
                <h2 className={`${Styles.heading2blog}`}>Neuigkeiten und Angebote</h2>

                {!post

                    ?

                    <div className=''>
                        <img src={Blumenbild} alt="Blumenbild" title="Foto: Dakota Roos Unsplash.com" className="mt-3 opacity-60 hover:opacity-90" />

                        <div className='mx-auto w-full md:w-3/4 flex flex-col justify-center items-center'>
                            <div className='self-start'>
                                <AiOutlineTags className='text-gray-500 text-3xl md:text-4xl mt-10 ml-3 md:ml-0' />
                            </div>

                            <h3 className={`${Styles.heading2blog}`}>Sommerzeit</h3>
                            <p className='text-2xl md:text-3xl text-gray-400 text-center leading-relaxed md:leading-loose'>Ankommen und Weitergehen mit der Kraft des Shiatsu.</p>
                            <p className={`${Styles.paragraph}`}>Zeit für dich!</p>
                            <p className={`${Styles.paragraph}`}>Preis: 60-80 {'\u20AC'} {'\u007C'} 2. {'\u002B'} 3. Termin: 15 {'\u20AC'} Rabatt</p>

                            <div className='flex justify-center items-center'>
                                <AiOutlineClockCircle className='text-gray-500 mr-5' />
                                <label className={`${Styles.paragraph}`}>{date.toLocaleDateString("de-DE", options)}</label>
                            </div>
                        </div>
                    </div>


                    :

                    <BlogCard
                        date={post.date}
                        id={post._id}
                        description={post.description}
                        title={post.title}
                        key={post._id}
                    />
                }


                {/*  {!posts ? <h2 className={`${Styles.heading2box}`}>Loading ...</h2> :

                    posts.map((post) => {
                        console.log(post)

                        return <BlogCard
                            date={post.date}
                            description={post.description}
                            id={post._id}
                            title={post.title}
                            key={post._id}
                        />
                    })
                } 
                */}

            </div>

        </motion.div>
    );
};

export default Aktuell;
