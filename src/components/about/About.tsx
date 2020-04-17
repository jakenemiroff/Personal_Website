import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';
import Image from './Me_And_Ozzie.jpg';

const Container = styled.div`
    
    height: 800px;
`;
    
const Title = styled.h3`

    text-align: center;
    font-size: 24px;
    margin: 0;
    color: ${Constants.TEXT_COLOR};
    padding-top: 50px;
`;

const BodyContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.p`

    padding: 0 50px;
    width: 50%;
    line-height: 2;
    font-size: 20px;
    color: ${Constants.TEXT_COLOR};
`;

const StyledImage = styled.img`

    height: 400px;
    width: 200px;
`;

const About = () => {

    return (

        <Container id='About'>

                <Title>{ Constants.ABOUT_ME }</Title>
                
                <BodyContainer>

                    <Text>{ Constants.ABOUT_CONTENT }</Text>
                    
                    <StyledImage src={ Image } />

                </BodyContainer>
            

        </Container>
    );
}

export default About;