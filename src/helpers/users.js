import axios from "axios";
const APIURL = process.env.REACT_APP_APIURL;
const APIURLSEARCH = process.env.REACT_APP_APIURLSEARCH;
const APIURLSEARCHREPOSITORIES = process.env.REACT_APP_APIURLSEARCHREPOSITORIES;
let token = process.env.REACT_APP_GITHUB_TOKEN;
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const getUsers = async () => {
  return await axios.get(APIURL, config);
};
export const getUser = async (username) => {
  const { data } = await axios.get(APIURL + "/" + username, config);
  return data;
};
export const searchUsers = async (query) => {
  const { data } = await axios.get(`${APIURLSEARCH}?q=${query}`);
  return data;
};
export const searchRepos = async () => {
  const { data } = await axios.get(`${APIURLSEARCHREPOSITORIES}`);

  return data;
};
