import './App.css'
//import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
//import Enrutamiento from './componentes/Enrutamiento'
import RoutesIndex from './routes/RoutesIndex'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext';
import NavBar from './components/NavBar';


function App() {
  

  return (
    <>
      <BrowserRouter>
      {/* 2.3 Uso el componente que tiene al Provider del contexto */}
        <AuthContextProvider >
          {/* Hijos / Children */}
            <NavBar /> 
            <RoutesIndex />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
