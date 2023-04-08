import urls from "../utils/urls";

const getNewsList = () => {
  return fetch(urls.newListUrl)
    .then(response => response.json())
    .then(json => {
      return json.articles;
    })
    .catch(error => {
      console.error(error);
    });
}

export {
  getNewsList
}

