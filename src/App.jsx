import './App.css'


/* ------- Components ---------------- */
import Nav from './components/layout/Nav.jsx';
import AnimatedRoutes from './components/layout/AnimatedRoutes';


function App() {


  return (
    <div className="App w-full bg-white font-Mukta">
      <div className='container h-screen mx-auto'>

        <Nav />

        <AnimatedRoutes />

      </div>
    </div>
  )
}

export default App;