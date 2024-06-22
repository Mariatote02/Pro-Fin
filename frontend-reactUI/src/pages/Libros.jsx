import { useEffect, useState } from "react";
import { getAllLibros } from "../services/libros";
import img from '../img/perfil.jpeg'

export default function Libros() {
  const [libros, setLibros] = useState([]);

  const obtenerLibros = async () => {
    const libros = await getAllLibros();
    console.log(libros);
    setLibros(libros);
  }

  useEffect(() => {
    obtenerLibros();
  }, []);


  return (
    <>
      
        <section className="Bibli">
          <h1 className="Bibli-titulo"> Tú biblioteca</h1>
          <div className="Bibli-contenedor">
          { libros.map((libro) => (
            <div key={libro.id} className="Bibli-contenedor-ficha">
              <h4 className="Bibli-contenedor-ficha-title">{libro.nombre}</h4>
              <img className="Bibli-contenedor-ficha-img" src={img} alt="libro" />
              <h3 className="Bibli-contenedor-ficha-auto">Autor:</h3>
              <p className="Bibli-contenedor-ficha-descrip">{libro.autor}</p>
            </div>
            )) 
          }
            
          </div>
        </section>

    </>
  )
}