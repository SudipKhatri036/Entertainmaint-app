const localUrl = import.meta.env.VITE_LOCAL_URL;

export async function getGenre(type) {
  try {
    const req = await fetch(`${import.meta.env.VITE_LOCAL_URL}/${type}/genre`);

    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();

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
      `${localUrl}/discover/${typeOfData}?&with_genres=${genreId}&name=${name}&page=${pageParam}`
    );

    if (!req.ok) throw new Error("Error getting movie detail from genre");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getListFromQuery(query) {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_LOCAL_URL}/search/movie?&searchQuery=${query}`
    );
    if (!req.ok) throw new Error(`No result Found!`);
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getBookmarkList() {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_LOCAL_URL}/bookmark/getBookmark`,
      { credentials: "include" }
    );
    if (!req.ok) throw new Error(`No result Found!`);
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
