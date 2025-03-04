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
