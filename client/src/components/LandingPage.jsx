import React from "react";
import {Button, Container} from 'react-bootstrap'


const LandingPage = () =>{
    return(
        <Container className="mt-5">
            <h1>MERN boilerplate for building web applications</h1>
            <p>This boilerplate is using MongoDB, ExpressJs, ReactJs and NodeJS</p>
            <p>On the frontend it is using <u>react-bootstrap</u> for styling and <u>react-router-dom</u> for navigation</p>
            <p>To begin just click the button below and clone the git repository</p>
            <Button>Go to Repo</Button>
        </Container>
    )
}


export default LandingPage;