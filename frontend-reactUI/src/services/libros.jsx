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

  const response = await fetch(`${BASE_URL}/libros`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(libro),
  });

  const { data } = await response.json();
  console.log(data);
  return data;
}

export { getAllLibros, createLibro }