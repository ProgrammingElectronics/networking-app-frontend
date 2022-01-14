import React, { useEffect, useState } from 'react'
import HackerNewsAPI from '../../api/HackerNewsAPI'

import './HackerNewsStyles.css'
const StoryComp = (props) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        HackerNewsAPI.getStory(props.storyId).then(data => data && data.url && setStory(data));
    }, []);

    return (
        <div>
            <a href={story.url}><p>{story.title}</p></a>
            <p className='by-line'>By: {story.by}</p>
        </div>
    )
}

export default StoryComp
