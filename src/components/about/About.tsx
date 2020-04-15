import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';
// import Image from './Jake_Nemiroff.jpg';

const Container = styled.div`
    
    height: 400px;
`;

const Title = styled.h3`

    text-align: center;
    padding: 20px 0;
    font-size: 24px;
    margin: 0;
`;

const BodyContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.p`

    padding: 0 50px;
    width: 50%;
    line-height: 1.3;
    font-size: 20px;
`;

const StyledImage = styled.img`

    height: 300px;
    width: 300px;
`;

const About = () => {

    return (

        <Container>
            
            <Title>{ Constants.ABOUT_ME }</Title>
            
            <BodyContainer>

                <Text>{ Constants.ABOUT_CONTENT }</Text>
                
                {/* <StyledImage src={ Image } /> */}

            </BodyContainer>

        </Container>
    );
}

export default About;