// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";
// import { loginUser } from "../services/auth";




// export default function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     // navigation
//     const navigate = useNavigate();
//     // context
//     // const authContext = useContext(AuthContext);
//     const { setIsLogedIn, setToken } = useContext(AuthContext);

//     const handleSubmit = async (event) => {
//         event.preventDefault(); // evita que se refresque la página y se envíe el formulario

//         const data = {
//         email: email,
//         password
//         };
        
//         try {
//         setError('');
//         const response = await loginUser(data, setIsLogedIn, setToken);
//         // Limpiar el formulario y redirigir a alguna otra página
//         console.log(response);
//         setEmail('');
//         setPassword('');
//         navigate('/autores');
//         } catch (error) {
//         // Mostrar el error
//         setError(error.message);
//         console.log(error);
//         }
//     }

//     return (
//         <>
//             <section className='main-section'>
//                 <h1 className='section-title'>Iniciar Sesión</h1>
//                 <form onSubmit={handleSubmit}>
//                 <div className="form-floating mb-3">
//                     <input
//                     type="email"
//                     className="form-control"
//                     id="floatingInput"
//                     placeholder="name@example.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <label htmlFor="floatingInput">Email address</label>
//                 </div>
//                 <div className="form-floating">
//                     <input
//                     type="password"
//                     className="form-control"
//                     id="floatingPassword"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <label htmlFor="floatingPassword">Password</label>
//                 </div>
//                 {/* Errores */}
//                 <div>{error}</div>
//                 <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
//                 </form>
            
//             </section>
//         </>
//     );
// }