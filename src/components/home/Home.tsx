import React from 'react';
import styled from 'styled-components';
import PageTitle from './PageTitle';
import Guitar from './../home/guitar.png';
import FadeIn from 'react-fade-in';

const Container = styled.div`

    margin-bottom: 300px;
    text-align: center;
`;

const TitleContent = styled.div`

    padding-top: 50px;
    padding-bottom: 15px;
`;

const Image = styled.img`

    height: 10%;
    width: 10%;
`;

const Home = () => {

    return (

        <Container id='Home'>
            <FadeIn>
            <TitleContent>
            
                <PageTitle />
            
            </TitleContent>

            <Image src={ Guitar } />
        </FadeIn>
        </Container>
    );
}

export default Home;