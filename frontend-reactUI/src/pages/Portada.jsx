import perfil from '../img/perfil.jpeg'
import clara from '../img/libreria.jpeg'
import { Link } from 'react-router-dom'

export default function Portada() {
  return (    <>
    

     <div className='cont'>
        <div className='glass'>
          <h1 className='cont-title'>Bitacora lectura</h1>
        </div>
      </div>
      <div className='section'>
        <img className='section-img' src={perfil} alt="libro" />
        <p className='section-text'>busca todos los libros que desees y ten los siempre a tu alcance cuando quieras nuestra plataforma te ayuda a encontrarlos y tenerlos en orden para que siempre puedas leer a tu gusto!! </p>
      </div>
      <div className='Hero'>
        <p className='Hero-texto'>Crea tu bitacora de libros, <br /> para llevar tu lectura en orden!</p>
        <div className='Hero-cont'>
          <Link to="/Registro" className='Hero-cont-buton'>
            <p>Registrarme</p>
          </Link>
          <Link to="/Libros" className='Hero-cont-buton'>
            <p>Login</p>
          </Link>
        </div>
      </div>
      <div className='pictu'>
        <img className='pictu-img' src={clara} alt="biblioteca" />
      </div>
      <footer className='Footer'>
        <div className='Footer-copy'>
          <p className='Footer-copy-text'>copy rigth 2024</p>
          </div>
        <div className='Footer-cont'>
          <p className='Footer-cont-texto'>Creado por:
          </p>
          <p className='Footer-cont-texto'>nombre 1jsahfskjd aiosfhacha</p>
          <p className='Footer-cont-texto'>Nombre2 sdkahfc ahjs</p>
        </div>
      </footer>
    </>
    )
}