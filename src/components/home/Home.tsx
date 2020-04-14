import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';
import WelcomeMessage from './WelcomeMessage';

const Container = styled.div`

    margin: 75px;
    border: solid 1px white;
    height: 400px;
`;

const Home = () => {

    return (

        <Container> 

            <WelcomeMessage message={ Constants.INTRO } />

        </Container>
    );
}

export default Home;