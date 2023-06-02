import './App.css'


/* ------- Components ---------------- */
import Nav from './components/layout/Nav.jsx';
import AnimatedRoutes from './components/layout/AnimatedRoutes';


function App() {


  return (
    <div className="App w-full bg-center bg-no-repeat bg-cover bg-logo-bg min-h-screen font-Mukta">
      <div className='container h-screen mx-auto'>

        <Nav />

        <AnimatedRoutes />

      </div>
    </div>
  )
}

export default App;