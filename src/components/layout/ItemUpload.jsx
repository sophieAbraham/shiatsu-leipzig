import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { convertToBase64 } from "../../services/api-helpers.js";
import avatar from '../../assets/img/flowersBlogPhoto.jpg'
import * as Styles from "../../services/styles.js";
import axios from 'axios';


const url = "http://localhost:5000/uploads"


function ItemUpload() {

    const [postImage, setPostImage] = useState({ myFile: "" })
    

        const createPost = async (newImage) => {
            try {
                await axios.post(url, newImage);
                toast.success("Upload erfolgreich !", {
                    position: toast.POSITION.TOP_CENTER
                });

            } catch (error) {
                console.log(error);
                if (error) {
                    toast.error("Upload nicht möglich, Bild zu groß !", {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            }
 
        }


        const handleSubmit = (e) => {
            e.preventDefault();
            createPost(postImage);
            console.log('Uploaded')

        }

        const handleFileUpload = async (e) => {
            const file = e.target.files[0];
            const base64 = await convertToBase64(file);
            console.log(base64);
            setPostImage({ ...postImage, myFile: base64 });
        }


        return (

            <div className={`${Styles.uploadItemBox}`}>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="file-upload" className=''>
                        <img src={postImage.myFile || avatar} alt="Bild aus der Natur" className='mx-auto mb-4' />
                    </label>

                    <input
                        type="file"
                        label='image'
                        name="myFile"
                        accept='.jpeg, .png, .jpg'
                        onChange={(e) => handleFileUpload(e)}
                    />

                    <button type='submit' className={`${Styles.button}`}>Upload</button>
                    <ToastContainer />

                </form>

            </div>

        );
    }


    export default ItemUpload;
