const { fetchWithErrorHandlingForHome } = require("../utility");

const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

const urls = [
  {
    url: `${baseUrl}/trending/movie/week?language=en&api_key=${apiKey}`,
    label: "Trending",
    type: "movie",
  },
  {
    url: `${baseUrl}/movie/popular?language=en&api_key=${apiKey}`,
    label: "Popular",
    type: "movie",
  },
  {
    url: `${baseUrl}/movie/top_rated?language=en&api_key=${apiKey}`,
    label: "Top Rated",
    type: "movie",
  },
  {
    url: `${baseUrl}/movie/now_playing?language=en&api_key=${apiKey}`,
    label: "Now Playing",
    type: "movie",
  },
  {
    url: `${baseUrl}/movie/upcoming?language=en&api_key=${apiKey} `,
    label: "Up Coming",
    type: "movie",
  },
  {
    url: `${baseUrl}/trending/tv/week?language=en&api_key=${apiKey} `,
    label: "Trending",
    type: "tv",
  },
  {
    url: `${baseUrl}/tv/popular?language=en&api_key=${apiKey} `,
    label: "Popular",
    type: "tv",
  },
  {
    url: `${baseUrl}/tv/top_rated?language=en&api_key=${apiKey} `,
    label: "Top Rated",
    type: "tv",
  },
  {
    url: `${baseUrl}/tv/airing_today?language=en&api_key=${apiKey} `,
    label: "Airing Today",
    type: "tv",
  },
  {
    url: `${baseUrl}/tv/on_the_air?language=en&api_key=${apiKey} `,
    label: "On Air",
    type: "tv",
  },
];
// Get Home Date
const getHomeData = async (req, res) => {
  try {
    // Create an array of promises
    const fetchPromises = urls.map((l) => fetchWithErrorHandlingForHome(l));

    // Wait for all fetch operations to settle
    const results = await Promise.all(fetchPromises);

    // Send the results back as the response
    res.status(200).json(results);
  } catch (error) {
    console.error("Error in fetch operations: ", error);
    res.status(500).send("Error running fetch operations");
  }
};

// Get Movie Genre
const getMovieGenre = async (req, res) => {
  try {
    const results = await fetchWithErrorHandlingForHome({
      url: `${baseUrl}/genre/movie/list?language=en&api_key=${apiKey}`,
      label: "Movie Genre",
      type: "movie",
    });

    res.status(200).json(results);
  } catch (error) {
    console.error("Error in fetch operations: ", error);
    res.status(500).send("Error running fetch operations");
  }
};

// Get Movie Genre
const getTvGenre = async (req, res) => {
  try {
    const results = await fetchWithErrorHandlingForHome({
      url: `${baseUrl}/genre/movie/list?language=en&api_key=${apiKey}`,
      label: "Tv Genre",
      type: "tv",
    });

    res.status(200).json(results);
  } catch (error) {
    console.error("Error in fetch operations: ", error);
    res.status(500).send("Error running fetch operations");
  }
};

module.exports = { getHomeData, getMovieGenre, getTvGenre };
