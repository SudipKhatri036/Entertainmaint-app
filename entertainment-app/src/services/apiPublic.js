export async function getDetail(type, id) {
  try {
    const req = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error("Error getting movie detail");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCasts(type, id) {
  try {
    const req = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/credits?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error("Error getting movie detail");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getLists(isSeries, name) {
  let typeOfData = isSeries === "series" ? "tv" : "movie";
  let spaceRemoved =
    name.split(" ").length > 1
      ? name.split(" ").join("_").toLowerCase()
      : name.toLowerCase();

  try {
    let req;
    if (name.toLowerCase() === "trending") {
      req = await fetch(
        `https://api.themoviedb.org/3/${spaceRemoved}/${typeOfData}/week?language=en&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
    } else if (spaceRemoved === "up_coming") {
      req = await fetch(
        `https://api.themoviedb.org/3/${typeOfData}/upcoming?language=en&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
    } else {
      req = await fetch(
        `https://api.themoviedb.org/3/${typeOfData}/${spaceRemoved}?language=en&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      );
    }
    console.log(req);
    if (!req.ok) throw new Error("Error getting movie detail");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getListsFromGenre(isSeries, id) {
  let typeOfData = isSeries === "series" ? "tv" : "movie";
  try {
    const req = await fetch(
      `https://api.themoviedb.org/3/discover/${typeOfData}?api_key=${
        import.meta.env.VITE_API_KEY
      }&with_genres=${id}`
    );
    if (!req.ok) throw new Error("Error getting movie detail from genre");
    const data = await req.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
