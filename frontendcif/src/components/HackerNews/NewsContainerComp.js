import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import HackerNewsAPI from '../../api/HackerNewsAPI';
import StoryComp from './StoryComp';

//style
import './HackerNewsStyles.css'

const NewsContainerComp = () => {
    const [ storyIds, setStoryIds ] = useState([])
    
    useEffect (() => {
        HackerNewsAPI.getStories().then(data => data && setStoryIds(data))
        // console.log('data', data)
    }, [])  

    // <p>{JSON.stringify(props.news)}</p>
    return (
        <div>
            <Container className="hacker-container"> 
                <h3>Top Hacker News Stories</h3>
                <div className='hacker-content'>
                    {storyIds.slice(0, 50).map(storyId => (
                    <StoryComp key={storyId} storyId={storyId} />
                    ))}
                </div>
            </Container>
        </div>
       
    )
}

export default NewsContainerComp
