import React from 'react'
import { Container } from 'react-bootstrap'

//style
import './HackerNewsStyles.css'

const NewsContainerComp = (props) => {

    

    return (
        <Container className="hack-container">
            <p>{JSON.stringify(props.news)}</p>
        </Container>
    )
}

export default NewsContainerComp
