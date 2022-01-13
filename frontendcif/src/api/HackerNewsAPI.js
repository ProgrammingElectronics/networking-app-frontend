import axios from 'axios'

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://hacker-news.firebaseio.com/v0/';
const TOP_STORIES_URL = 'newstories.json'

const getStoriesAPI = async () => {
    const result = await axios
      .get(BASE_URL + TOP_STORIES_URL).then(({data}) => data);
  
    return result;
};

export default getStoriesAPI