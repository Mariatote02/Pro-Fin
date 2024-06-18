import { useEffect, useState } from "react";
import { getAllLibros } from "../services/libros";

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
      <h1>Libros</h1>
      <div>
        { libros.map((libro) => (
          <p key={libro.id}>{libro.nombre}</p>
        )) 
        }
        <section className="Bibli">
          <h1 className="Bibli-titulo">Bibliote</h1>
          <div className="Bibli-contenedor">
            <div className="Bibli-contenedor-ficha">
              <h4 className="Bibli-contenedor-ficha-title">titulo libro</h4>
              <img className="Bibli-contenedor-ficha-img" src="../img/perfil.jpeg" alt="" />
              <p className="Bibli-contenedor-ficha-descrip">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magnam autem delectus maxime cumque dicta temporibus repellendus molestiae.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}