import axios from 'axios'

const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
const TOP_STORIES_URL = 'newstories.json'
const STORY_URL = 'item/'

const getStories = async () => {
    const result = await axios.get(BASE_URL + TOP_STORIES_URL).then(({data}) => data);
  
    return result;
};

const getStory = async (storyID) => {
    const result = await axios
        .get(`${BASE_URL + STORY_URL + storyID}.json`).then(({data}) => data);
  
    return result;
};

export default {
    getStories,
    getStory
}