import React from 'react';
import styled from 'styled-components';
import PageTitle from './PageTitle';
import Guitar from './../home/guitar.png';

const Container = styled.div`

    margin-bottom: 150px;
    text-align: center;
`;

const TitleContent = styled.div`

    padding-top: 50px;
    padding-bottom: 15px;
`;

const Image = styled.img`

    height: 400px;
    width: 150px;
`;

const Home = () => {

    return (

        <Container id='Home'>
            
            <TitleContent>
            
                <PageTitle />
            
            </TitleContent>

            <Image src={ Guitar } />

        </Container>
    );
}

export default Home;