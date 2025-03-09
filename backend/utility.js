const fetchWithErrorHandlingForHome = async (url) => {
  try {
    const response = await fetch(url.url);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${url.url}`);
    }

    return {
      success: true,
      data: await response.json(),
      label: url.label,
      type: url.type,
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = { fetchWithErrorHandlingForHome };
