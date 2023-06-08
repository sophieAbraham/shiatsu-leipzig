import './App.css'
import { useLocation } from 'react-router-dom';

/* ------- Components ---------------- */
import Nav from './components/layout/Nav.jsx';
import AnimatedRoutes from './components/layout/AnimatedRoutes';
import { notHome, home } from './services/styles';


function App() {

  const location = useLocation();
  let isHome;

  (location.pathname === '/' ? isHome = home : isHome = notHome);


  return (
    <div className={`App w-full min-h-screen font-Mukta ${isHome}`}>
      <div className='container w-full h-screen mx-auto'>

        <Nav />

        <AnimatedRoutes />

      </div>
    </div>
  )
}

export default App;