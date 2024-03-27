const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;

const getUrl = (endpoint, param) => {
    const qs = new URLSearchParams(param);
    return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };
