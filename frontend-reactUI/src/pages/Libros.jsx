import { useEffect, useState, React } from "react";
import { getAllLibros, createLibro, deleteLibro, updateLibro} from "../services/libros";
import img from '../img/perfil.jpeg'

export default function Libros() {

  //key
const Libro = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    getAllLibros().then(libros => setLibros(libros));
  }, []);

  return (
    <div>
      {libros.map(libro => (
        <div key={libro._id}>
          <h2>{libro.titulo}</h2>
          <p>{libro.autor}</p>
        </div>
      ))}
    </div>
  );
};

  const [libros, setLibros] = useState([]);

  const obtenerLibros = async () => {
    const libros = await getAllLibros();
    console.log(libros);
    setLibros(libros);
  }

  useEffect(() => {
    obtenerLibros();
  }, []);

  const handleCreateLibro = async () => {
    try {
      const newLibro = await createLibro(libros);
      console.log(newLibro);
      // actualizar la lista de libros o mostrar un mensaje de éxito
    } catch (error) {
      console.error(error);
      // mostrar un mensaje de error
    }
  };

  const handleUpdateLibro = async () => {
    try {
      const updatedLibro = await updateLibro(libros.id, libros);
      console.log(updatedLibro);
      // actualizar la lista de libros o mostrar un mensaje de éxito
    } catch (error) {
      console.error(error);
      // mostrar un mensaje de error
    }
  };


  return (
    <>
      
        <section className="Bibli">
        <div className="Bibli-header">
          <h1 className="Bibli-titulo">Tú biblioteca</h1>
          <div className="Bibli-botones">
            <button className="btn btn-primary" onClick={handleCreateLibro}>
              Crear libro
            </button>
            <button className="btn btn-success" onClick={handleUpdateLibro}>
            Actualizar biblioteca
            </button>
          </div>
        </div>
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