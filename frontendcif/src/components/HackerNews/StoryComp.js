import React, { useEffect, useState } from 'react'
import { Container, Link } from 'react-bootstrap'
import HackerNewsAPI from '../../api/HackerNewsAPI'

import './HackerNewsStyles.css'
const StoryComp = (props) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        HackerNewsAPI.getStoryAPI(props.storyId).then(data => data && data.url && setStory(data));
    }, []);

    return (
        <div>
            <a href={story.url}><p>{story.title}</p></a>
        </div>
    )
}

export default StoryComp
