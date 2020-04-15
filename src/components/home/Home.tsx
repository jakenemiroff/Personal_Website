import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';
import WelcomeMessage from './WelcomeMessage';

const Container = styled.div`

    margin: 75px 0;
    height: 400px;
    background-color: ${Constants.LIGHT_BLUE};
    text-align: center;
`;

const Home = () => {

    return (

        <Container> 

            <WelcomeMessage message={ Constants.INTRO } />

        </Container>
    );
}

export default Home;