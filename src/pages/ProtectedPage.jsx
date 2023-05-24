import { useState } from 'react';
import axios from 'axios';
import useAuthStore from '../hooks/useAuthStore';
//import { Outlet } from 'react-router-dom';
import AdminDashboard from '../components/admin/AdminDashboard';


function ProtectedPage() {
    const [protectedData, setProtectedData] = useState('Hier werden nur Daten fuer eingeloggte Benutzer angezeigt.');
    const token = useAuthStore(state => state.getToken());
    const logout = useAuthStore(state => state.logout);


        async function clickHandler(evt) {
            // Hole Token aus local- oder sessionStorage
            // const token = localStorage.getItem('token');
            // const token = sessionStorage.getItem('token');

            try {
                // Fuehre axios Request auf protected Route durch
                // und definiere im options Objekt die Authorization, wo der Token reinkommt
                const resp = await axios.get('http://localhost:5000/protected', {
                    // withCredentials: true
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                console.log(resp);

                setProtectedData(JSON.stringify(resp.data));

            } catch (error) {
                // Logge den Nutzer aus, denn Token ist abgelaufen
                logout();
                // setProtectedData(error.message);
            }
        }

        return (
            <>

                <AdminDashboard />

            </>
        );
    }

    export default ProtectedPage;