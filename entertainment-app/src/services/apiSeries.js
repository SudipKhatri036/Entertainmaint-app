export async function getSeriesGenre() {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/genre/tv/list?language=en&api_key=${
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

export async function getTrendingOfWeekS() {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/trending/tv/week?language=en&api_key=${
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

export async function getPopularSeries() {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/tv/popular?language=en&api_key=${
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

export async function getTopRatedSeries() {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/tv/top_rated?language=en&api_key=${
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
export async function getTodayAiringSeries() {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/tv/airing_today?language=en&api_key=${
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

export async function getUpcomingAiringSeries() {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_BASE_URL}/tv/on_the_air?language=en&api_key=${
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
