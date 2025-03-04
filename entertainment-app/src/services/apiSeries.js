export async function getSeriesGenre() {
  try {
    const req = await fetch(
      `https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTrendingOfWeekS() {
  try {
    const req = await fetch(
      `https://api.themoviedb.org/3/trending/tv/week?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPopularSeries() {
  try {
    const req = await fetch(
      `https://api.themoviedb.org/3/tv/popular?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTopRatedSeries() {
  try {
    const req = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getTodayAiringSeries() {
  try {
    const req = await fetch(
      `https://api.themoviedb.org/3/tv/airing_today?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUpcomingAiringSeries() {
  try {
    const req = await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?language=en&api_key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    if (!req.ok) throw new Error("Error getting genre list");
    const data = await req.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
