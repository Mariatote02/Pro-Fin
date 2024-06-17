

const url = [
  {
    name: 'Login',
    reacthref: '/login',
  },
  {
    name: 'Registro',
    reacthref: '/registro',
  },
];

function Enrutamiento() {
  return (
    <>
       <div className='Hero-cont'>
             <div className='Hero-cont-buton'>
                 {url.map()} 
             </div>
        </div>
    </>
  );
}

export default Enrutamiento


//
// import { Link } from 'react-router-dom'

// const url = [
//     {
//         name: "Login",
//         href: "/Login",
//     },
//     {
//         name: "Registro",
//         href: "/registro",
//     },
// ];

// function Nav() {
//   return (
//     <>
//         <div className='Hero-cont'>
//             <div className='Hero-cont-buton'>
//                 {url.map( x => (
//                     <Link to={x.href}>{x.name}</Link>
//                 ))}
                
//             </div>
//         </div>
//     </>
//   );
// }