import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';
import Image from './Me_And_Ozzie.jpg';

const Container = styled.div`

    margin: 600px 0;
`;
    
const Title = styled.h3`

    text-align: center;
    font-size: 36px;
    letter-spacing: 0.125em;
    margin: 0;
    color: ${ Constants.TEXT_COLOR };
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
    letter-spacing: 0.125em;
    font-size: 20px;
    color: ${ Constants.TEXT_COLOR };
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