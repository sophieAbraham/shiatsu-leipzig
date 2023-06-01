import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthStore from '../hooks/useAuthStore';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Styles from "../services/styles.js";
import { motion } from 'framer-motion';
import Logo2 from '../assets/img/logo-shiatsu-leipzig.jpg';
import Footer from '../components/layout/Footer.jsx';
//import ProtectedPage from './ProtectedPage';


function AdminLogin() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const authStore = useAuthStore();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        console.log('location.state:', location.state);
    }, []);


    async function submitHandler(evt) {
        evt.preventDefault();

        let body = {
            username: username,
            email: email,
            password: password
        };

        if ((username.length < 1) || (email.length < 1) || password.length < 1) {
            let errorsSet = new Set(errors);

            errorsSet.add('Username, Email und Passwort müssen befüllt sein');

            setErrors([...errorsSet]);
            return;
        }

        try {
            let resp = await axios.post('http://localhost:5000/auth/login', body);
            // {widthCredentials: true}
            console.log(resp);

            authStore.authenticate(resp.data);
            // localStorage.setItem('token', resp.data.token);
            // sessionStorage.setItem('token', resp.data.token);

            setUsername('');
            setEmail('');
            setPassword('');
            setErrors([]);

            console.log('Success: token stored in localStorage and sessionStorage');

            // Falls es einen Referrer (dt. Verweiser) gibt navigiere zurueck zu diesem
            if (location.state?.from) navigate(location.state.from);

        } catch (error) {
            console.error(error);
            setErrors([error.response.data.message]);
        }
    }

    const loginSuccess = <p className='text-green-600 tracking-widest'>Login erfolgreich!</p>;
    const errorBox = errors.map((error, idx) => {
        return <li key={idx}>{error}</li>;
    });



    return (
        <motion.div
            className=""
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        >
            {authStore.isAuthenticated() && loginSuccess}

            {
                authStore.isAuthenticated() ?
                    (
                        <div>
                            <div className={`${Styles.contentBox}`}>

                                <h2 className={`${Styles.heading2box}`}>Willkommen in deinem Adminbereich!</h2>

                                <div className="w-full flex justify-center items-center">
                                    <img src={Logo2} alt="Logo Shiatsu Leipzig"
                                        className="w-3/4 md:w-1/2 rounded-full mt-3 mb-3" />
                                </div>

                                <div className='flex flex-col justify-center items-center'>
                                    <button className={`${Styles.button}`}><a href="/post">Neuer Post</a></button>
                                    <button onClick={evt => authStore.logout()} className={`${Styles.button}`}>Logout</button>
                                </div>

                            </div>

                            <Footer />
                            
                        </div>
                    )

                    :

                    (
                        <div className={`${Styles.contentBox}`}>

                            <h2 className={`${Styles.heading2box}`}>Adminbereich</h2>
                            <h3 className={`${Styles.heading3box}`}>Bitte logge dich ein.</h3>

                            <form onSubmit={submitHandler} className="flex flex-col justify-start items-center mx-auto w-full h-full md:w-1/2 rounded-md">

                                {(errors.length > 0) && (<ul className='bg-red-400 rounded-xl text-white p-2'>{errorBox}</ul>)}

                                <div className="w-full border-b border-gray-400 mb-4 p-4">
                                    <input
                                        type="text"
                                        name="mail"
                                        value={username}
                                        onChange={evt => setUsername(evt.target.value)}
                                        className='w-full p-4 outline-1 outline-lavendeldunkel text-gray-500'
                                        placeholder="Username"
                                    />
                                </div>

                                <div className="w-full border-b border-gray-400 mb-4 p-4">
                                    <input
                                        type="mail"
                                        name="mail"
                                        value={email}
                                        onChange={evt => setEmail(evt.target.value)}
                                        className='w-full p-4 outline-1 outline-lavendeldunkel text-gray-500'
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="w-full border-b border-gray-400 mb-4 p-4">
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={evt => setPassword(evt.target.value)}
                                        className='w-full p-4 outline-1 outline-lavendeldunkel text-gray-500'
                                        placeholder="Passwort"
                                    />
                                </div>

                                {/*  <a href="" className="text-gray-400 mb-4">Passwort vergessen?</a> */}

                                <button className={`${Styles.button}`} >Einloggen</button>

                            </form>

                        </div>
                    )
            }

            <Footer />

        </motion.div>
    )
};

export default AdminLogin;