import { React, useEffect, useState } from "react";
import * as Styles from "../services/styles.js";
import { motion } from 'framer-motion';
import BlogCard from "../components/layout/BlogCard";
import Blumenbild from '../assets/img/flowersBlogPhoto.jpg'



function Aktuell() {

    const [posts, setPosts] = useState([]);

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
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >

            <div className={`${Styles.blogBox}`}>
                <h2 className={`${Styles.heading2box}`}>Neuigkeiten und Angebote</h2>

                {!post

                    ?

                    <div className='bg-white'>
                        <img src={Blumenbild} alt="Blumenbild" className="mt-3 opacity-60 hover:opacity-90"/>
                        <BlogCard
                            date={Date.now()}
                            title={'Frühlingserwachen'}
                            description={`Ankommen und Weitergehen mit der Kraft des Shiatsu. Zeit für Dich! Preis: 60-80 ${'\u20AC'} ${'\u007C'} 2. ${'\u002B'} 3. Termin: 15 ${'\u20AC'} Rabatt`}
                        />
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
