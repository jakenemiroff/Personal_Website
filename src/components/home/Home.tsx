import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';
import PageTitle from './PageTitle';
import Image from '../home/millennium_falcon.png';

const Container = styled.div`

    height: 800px;
    text-align: center;
`;

const TitleContent = styled.div`

    padding-top: 50px;
    padding-bottom: 15px;
`;

const Home = () => {

    return (

        <Container id='Home'>
            <TitleContent>
                <PageTitle />
            </TitleContent>
            <img src={Image} />
        </Container>
    );
}

export default Home;