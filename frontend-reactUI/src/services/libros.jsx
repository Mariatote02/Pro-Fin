const BASE_URL = "http://localhost:3000/api/v1";
// TO DO : Add env var API_BASE_URL on the .env file

const getAllLibros = async () => {
  // const response = await fetch(`${BASE_URL}/libros`) 
  const response = await fetch(`${BASE_URL}/libros`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  const { data } = await response.json();
  console.log(data)
  return data
}

const createLibro = async (libro) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('No token provided');
  }

  const response = await fetch(`${BASE_URL}/libros`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(libro),
  });

  const existingLibros = await response.json();

  if (existingLibros.find((l) => l.title === libro.title)) {
    throw new Error('Libro already exists');
  }

  const responseCreate = await fetch(`${BASE_URL}/libros`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(libro),
  });

  const { data } = await responseCreate.json();
  console.log(data);
  return data;
};

//eliminar libro
const deleteLibro = async (id) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${BASE_URL}/libros/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  const { data } = await response.json();
  console.log(data);
  return data;
};
//actualizar libros
const updateLibro = async (id, libro) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${BASE_URL}/libros/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(libro),
  });

  const { data } = await response.json();
  console.log(data);
  return data;
};

export { getAllLibros, createLibro, deleteLibro, updateLibro };