import { useParams, useSearchParams } from "react-router-dom";

export async function getDetail(type, id) {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/${type}/${id}?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error(`Error getting ${type} detail`);
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
      }${type}/${id}/credits?language=en&api_key=${
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

export async function getLists({ isSeries, name, pageParam = 1 }) {
  let typeOfData = isSeries === "series" ? "tv" : "movie";
  let spaceRemoved =
    name.split(" ").length > 1
      ? name.split(" ").join("_").toLowerCase()
      : name.toLowerCase();

  try {
    let req;
    if (name.toLowerCase() === "trending") {
      req = await fetch(
        `${
          import.meta.env.VITE_BASE_URL
        }${spaceRemoved}/${typeOfData}/week?language=en&api_key=${
          import.meta.env.VITE_API_KEY
        }&page=${pageParam}`
      );
    } else if (spaceRemoved === "up_coming") {
      req = await fetch(
        `${
          import.meta.env.VITE_BASE_URL
        }${typeOfData}/upcoming?language=en&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
    } else {
      req = await fetch(
        `${
          import.meta.env.VITE_BASE_URL
        }${typeOfData}/${spaceRemoved}?language=en&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
    }

    if (!req.ok) throw new Error(`Error getting ${typeOfData} Lists`);
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getListsFromGenre({ isSeries, genreId, pageParam = 1 }) {
  let typeOfData = isSeries === "series" ? "tv" : "movie";

  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/discover/${typeOfData}?api_key=${
        import.meta.env.VITE_API_KEY
      }&with_genres=${genreId}&page=${pageParam}`
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
