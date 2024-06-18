import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { logoutUser } from '../services/auth';


const NavBar = () => {
  // navigation
  const navigate = useNavigate();
  // 3. Consumiendo el contexto
  const authContext = useContext(AuthContext);
  // console.log(authContext);
  function handleLogout() {
    // cerrar la sesión en el estado global
    logoutUser(authContext.setToken, authContext.setIsLogedIn);
    // redirect hacia Home
    navigate('/');
  }

  return (
    <nav>
      <section>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          {
              authContext.isLogedIn ?
                <>
                  <li>
                    <NavLink to="/libros/crear">Crear Libro</NavLink>
                  </li>
                </>
              :
                ''
          }
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <NavLink to="/registro">Registro de usuario</NavLink>
          </li>
          <li>
            {
              authContext.isLogedIn ?
                <a href="#" onClick={handleLogout}>Cerrar Sesión</a>
                :
                <NavLink to="/login">Iniciar Sesión</NavLink>
            }
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default NavBar;