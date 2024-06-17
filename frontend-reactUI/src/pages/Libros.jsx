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
      </div>
    </>
  )
}