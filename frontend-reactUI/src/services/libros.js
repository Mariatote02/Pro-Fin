const BASE_URL = "http://localhost:3000/api/v1";


// crear libros
const createLibro = async (libro) => {
  const response = await fetch(`${BASE_URL}/libros`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(libro),
  });

  const { data } = await response.json();
  console.log(data);
  return data;
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
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

//elimianr libros
const deleteLibro = async (id) => {
  const response = await fetch(`${BASE_URL}/libros/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data } = await response.json();
  console.log(data);
  return data;
};

//actualizar libros
const updateLibro = async (id, libro) => {
  const response = await fetch(`${BASE_URL}/libros/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(libro),
  });

  const { data } = await response.json();
  console.log(data);
  return data;
};
export { createLibro, getAllLibros, deleteLibro, updateLibro };