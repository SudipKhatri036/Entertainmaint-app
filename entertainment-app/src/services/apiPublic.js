import { useParams, useSearchParams } from "react-router-dom";

const localUrl = import.meta.env.VITE_LOCAL_URL;

export async function getGenre(type) {
  try {
    const req = await fetch(`${import.meta.env.VITE_LOCAL_URL}/${type}/genre`);

    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getHomeData() {
  try {
    const req = await fetch(`${localUrl}`);
    if (!req.ok) throw new Error(`Failed to get  ${localUrl}`);
    const data = await req.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getDetail(typeOfData, id) {
  try {
    const req = await fetch(`${localUrl}/${typeOfData}/detail/${id}`);
    if (!req.ok) throw new Error(`Error getting ${typeOfData} detail`);
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getCasts(type, id) {
  try {
    const req = await fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/${type}/${id}/credits?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error(`Error Getting ${type} casts detail`);
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getLists({ typeOfData, name, pageParam = 1 }) {
  try {
    let req = await fetch(
      `${localUrl}/${typeOfData}?name=${name}&page=${pageParam}`
    );

    if (!req.ok) throw new Error(`Error getting ${typeOfData} Lists`);
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getListsFromGenre({
  typeOfData,
  genreId,
  name,
  pageParam = 1,
}) {
  try {
    const req = await fetch(
      `${localUrl}/discover/${typeOfData}&with_genres=${genreId}&name=${name}&page=${pageParam}`
    );

    if (!req.ok) throw new Error("Error getting movie detail from genre");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getListMovieQuery(query) {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/search/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&query=${query}`
    );
    if (!req.ok) throw new Error(`No result Found!`);
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function getListSeriesByQuery(query) {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/search/tv?api_key=${
        import.meta.env.VITE_API_KEY
      }&query=${query}`
    );
    if (!req.ok) throw new Error(`No result Found!`);
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
