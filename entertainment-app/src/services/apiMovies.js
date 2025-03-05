export async function getMovieGenre() {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/genre/movie/list?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );

    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getTrendingOfWeek() {
  try {
    const req = await fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/trending/movie/week?language=en&api_key=${import.meta.env.VITE_API_KEY}`
    );
    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getPopularMovies() {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/movie/popular?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getTopRatedMovies() {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/movie/top_rated?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function getNowPlayingMovies() {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/movie/now_playing?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getUpComingMovies() {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/movie/upcoming?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
