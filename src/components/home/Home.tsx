import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';
import WelcomeMessage from './WelcomeMessage';

const Container = styled.div`

    height: 400px;
    background-color: ${Constants.DARK_BLUE};
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