const API_KEY = "51296765-04b420861981deb3de14174dd";

export default async function fetchPixabay(query) {
  const response = await fetch(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&per_page=10`
  );
  const data = await response.json();
  return data.hits.map((hit) => hit.webformatURL);
}
