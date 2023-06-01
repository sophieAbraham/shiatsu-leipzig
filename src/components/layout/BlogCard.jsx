import { React, useState, useEffect } from "react"
import * as Styles from "../../services/styles.js";
import { AiOutlineTags, AiOutlineClockCircle } from "react-icons/ai";
//import avatar from '../../assets/img/flowersBlogPhoto.jpg'


function BlogCard({ title, description, date }) {

    const [image, setImage] = useState([]);

    date = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch('http://localhost:5000/uploads/', {
                    method: 'GET'
                })

                const data = await res.json();
                setImage(data);

            } catch (error) {
                console.log(error);
            }
        }
        return getData;

    }, []);

    let postImage = image[image.length - 1];


    return (

        <div className='w-full flex flex-col justify-center items-center rounded-lg p-5 bg-slate-50 shadow-lg'>

            <div className='w-full flex flex-col justify-center items-center'>

                {!postImage ? <h2 className={`${Styles.heading2box}`}></h2> :

                    <img
                        key={postImage._id}
                        src={postImage.myFile}
                        alt='Naturbild'
                        className="w-fit self-center rounded-2xl mt-3 mb-1 opacity-60 hover:opacity-90"
                    />
                }

            </div>

            <div className='w-3/4 flex flex-col justify-center items-center'>
                <div className='self-start mt-5'>
                    <AiOutlineTags className='text-gray-500 text-4xl' />
                </div>

                <h3 className={`${Styles.heading2blog}`}>{title}</h3>
                {/* <h3 className={`${Styles.heading2box}`}>Frühlingserwachen</h3> */}

                <p className='text-xl md:text-3xl text-gray-400 text-center leading-relaxed md:leading-loose'>{description}</p>
                {/* <p className={`${Styles.paragraph}`}>Ankommen und Weitergehen mit der Kraft des Shiatsu. Zeit für Dich!</p> */}
                {/* <p className={`${Styles.paragraph}`}>Preis: 60-80 {'\u20AC'} {'\u007C'} 2. {'\u002B'} 3. Termin: 15 {'\u20AC'} Rabatt</p> */}

                <div className='flex justify-center items-center'>
                    <AiOutlineClockCircle className='text-gray-500 mr-5' />
                    <label className={`${Styles.paragraph}`}>{date.toLocaleDateString("de-DE", options)}</label>
                </div>
            </div>
        </div>

    )
};

export default BlogCard;
