const BASE_URL = "http://localhost:3000/api/v1";

const getAllLibros = async () => {
  // const response = await fetch(`${BASE_URL}/libros`)
  const response = await fetch(`${BASE_URL}/libros`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data } = await response.json();
  console.log(data);
  return data;
};

export { getAllLibros }