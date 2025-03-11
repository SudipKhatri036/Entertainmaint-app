const { fetchWithErrorHandlingForHome } = require("../utility");

const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

const getDataByQuery = async (req, res) => {
  const { searchQuery } = req.query;

  try {
    const results = await fetchWithErrorHandlingForHome({
      url: `${baseUrl}/search/movie?api_key=${apiKey}&query=${searchQuery}`,
      label: `search results`,
      type: "movie",
    });

    res.status(200).json(results);
  } catch (error) {
    console.error("Error in fetch operations: ", error);
    res.status(500).send("Error running fetch operations");
  }
};
exports.getDataByQuery = getDataByQuery;
