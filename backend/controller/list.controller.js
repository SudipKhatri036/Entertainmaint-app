const { fetchWithErrorHandlingForHome } = require("../utility");

const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

const getListsFromGenre = async (req, res) => {
  const { with_genres: genreId, name, page: pageParam } = req.query;
  const typeOfData = req.params?.typeOfData || "movie";
  try {
    const results = await fetchWithErrorHandlingForHome({
      url: `${baseUrl}/discover/${typeOfData}?&api_key=${apiKey}&with_genres=${genreId}&page=${pageParam}`,
      label: `${name} ${typeOfData}"`,
      type: "movie",
    });

    res.status(200).json({
      ...results,
      ...results.data,
    });
  } catch (error) {
    console.error("Error in fetch operations: ", error);
    res.status(500).send("Error running fetch operations");
  }
};

const getLists = async (req, res) => {
  const { name, page: pageParam } = req.query;
  const typeOfData = req.params?.typeOfData || "movie";
  try {
    let spaceRemoved =
      name.split(" ").length > 1
        ? name.split(" ").join("_").toLowerCase()
        : name.toLowerCase();

    if (name.toLowerCase() === "trending") {
      results = await fetchWithErrorHandlingForHome({
        url: `${baseUrl}/trending/${typeOfData}/week?language=en&api_key=${apiKey}&page=${pageParam}`,
        label: `${name} ${typeOfData}`,
        type: typeOfData,
      });
    } else if (spaceRemoved === "up_coming") {
      results = await fetchWithErrorHandlingForHome({
        url: `${baseUrl}/${typeOfData}/upcoming?language=en&api_key=${apiKey}&page=${pageParam}`,
        label: `${name} ${typeOfData}`,
        type: typeOfData,
      });
    } else if (spaceRemoved === "on_air") {
      results = await fetchWithErrorHandlingForHome({
        url: `${baseUrl}/${typeOfData}/on_the_air?language=en&api_key=${apiKey}&page=${pageParam}`,
        label: `${name} ${typeOfData}`,
        type: typeOfData,
      });
    } else {
      results = await fetchWithErrorHandlingForHome({
        url: `${baseUrl}/${typeOfData}/${spaceRemoved}?language=en&api_key=${apiKey}&page=${pageParam}`,
        label: `${name} ${typeOfData}`,
        type: typeOfData,
      });
    }

    res.status(200).json({
      ...results,
      ...results.data,
    });
  } catch (error) {
    console.error("Error in fetch operations: ", error);
    res.status(500).send("Error running fetch operations");
  }
};

const getDataDetail = async (req, res) => {
  const { typeOfData, id } = req.params || {};
  console.log(typeOfData, id);

  try {
    const dataResults = await fetchWithErrorHandlingForHome({
      url: `${baseUrl}/${typeOfData}/${id}?&api_key=${apiKey}`,
      label: id,
      type: typeOfData,
    });
    const castsResults = await fetchWithErrorHandlingForHome({
      url: `${baseUrl}/${typeOfData}/${id}/credits?language=en&&api_key=${apiKey}`,
      label: id,
      type: typeOfData,
    });

    res.status(200).json({ ...dataResults, casts: castsResults?.data?.cast });
  } catch (error) {
    console.error("Error in fetch operations: ", error);
    res.status(500).send("Error running fetch operations");
  }
};

module.exports = { getListsFromGenre, getLists, getDataDetail };
