const BASE_URL = "http://localhost:3000/api/v1";
// TO DO : Add env var API_BASE_URL on the .env file

const getAllAutores = async () => {
  // const response = await fetch(`${BASE_URL}/autores`) 
  const response = await fetch(`${BASE_URL}/autores`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  const { data } = await response.json();
  console.log(data)
  return data
}

const createAutor = async (autor) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${BASE_URL}/autores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(autor),
  });

  return response;
}


export { getAllAutores, createAutor }