
import { React } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


/* ------- PAGES ---------------- */
import Home from '../../pages/Home.jsx';
import PrivateRoute from "../../services/PrivateRoute.jsx";
import ProtectedPage from "../../pages/ProtectedPage.jsx";
import AdminLogin from '../../pages/AdminLogin.jsx';
import Shiatsu from '../../pages/Shiatsu.jsx';
import Behandlung from '../../pages/Behandlung.jsx';
import UeberMich from '../../pages/UeberMich.jsx';
import Kontakt from '../../pages/Kontakt.jsx';
import Netzwerk from '../../pages/Netzwerk.jsx';
import Impressum from '../../pages/Impressum.jsx';
import Aktuell from "../../pages/Aktuell.jsx";
import AdminDashboard from "../admin/AdminDashboard.jsx";
import CreatePost from "./CreatePost.jsx";


function AnimatedRoutes() {

    const location = useLocation();

    return (

        <AnimatePresence>

            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />

                <Route element={<PrivateRoute />}>
                    <Route path='/protected' element={<ProtectedPage />} />
                    <Route path='/admin' element={<AdminDashboard />} />
                    <Route path='/post' element={<CreatePost />} />
                  {/*   <Route exact path='/post' element={user ? <CreatePost user={user} /> : <Navigate to={'/login'} />} /> */}
                </Route>

                <Route path='/login' element={<AdminLogin />} />
                <Route path='/aktuell' element={<Aktuell />} />
                <Route path='/shiatsu' element={<Shiatsu />} />
                <Route path='/behandlung' element={<Behandlung />} />
                <Route path='/uebermich' element={<UeberMich />} />
                <Route path='/kontakt' element={<Kontakt />} />
                <Route path='/netzwerk' element={<Netzwerk />} />
                <Route path='/impressum' element={<Impressum />} />
            </Routes>
            
        </AnimatePresence>
    );
};

export default AnimatedRoutes;