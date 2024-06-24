const BASE_URL = "http://localhost:3000/api/v1";


// crear libros
const createLibro = async (libro) => {
  try {
    const response = await fetch(`${BASE_URL}/libros`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(libro),
    });
    const data = await response.json();
    console.log("Libro creado:", data);
    return data;
  } catch (error) {
    console.error("Error al crear libro:", error);
    throw error;
  }
};

//traer libros
const getAllLibros = async () => {
  try {
    const response = await fetch(`${BASE_URL}/libros`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { data } = await response.json();
    console.log(data);
    console.log("Libros obtenidos:", data);
    return data;
  } catch (error) {
    console.error("Error al obtener libros:",error);
    throw error;
  }
};

//elimianr libros
const deleteLibro = async (id) => {
  try {
    console.log("Eliminando libro con ID:", id);
    const response = await fetch(`${BASE_URL}/libros/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data } = await response.json();
    console.log("Libro eliminado:", data);
    return data;
  } catch (error) {
    console.error("Error al eliminar libro:", error);
    throw error;
  }
};

//actualizar libros
const updateLibro = async (id, libro) => {
  try {
    console.log("Actualizando libro con ID:", id);
    const response = await fetch(`${BASE_URL}/libros/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(libro),
    });
    const { data } = await response.json();
    console.log("Libro actualizado:", data);
    return data;
  } catch (error) {
    console.error("Error al actualizar libro:", error);
    throw error;
  }
};
export { createLibro, getAllLibros, deleteLibro, updateLibro };