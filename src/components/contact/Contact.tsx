import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';

const Container = styled.div`

    margin-top: 600px;
    margin-bottom: 200px;
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

    display: block;
    text-align: center;
`;

const Text = styled.p`

    margin: auto;
    padding: 50px;
    width: 50%;
    line-height: 2;
    letter-spacing: 0.125em;
    font-size: 20px;
    color: ${ Constants.TEXT_COLOR };
`;

const ContactButton = styled.a`

    display: block;
    line-height: 2.3;
    margin: auto;
    font-size: 24px;
    letter-spacing: 0.125em;
    height: 55px;
    width: 155px;
    color: ${ Constants.CONTACT_BUTTON_COLOR };
    border: 1px solid ${ Constants.CONTACT_BUTTON_COLOR };
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;

    :hover {
        background-color: ${ Constants.CONTACT_BUTTON_HOVER_COLOR };
    }
`;


const About = () => {

    return (

        <Container id='Contact'>

                <Title>{ Constants.CONTACT_ME }</Title>
                
                <BodyContainer>

                    <Text>{ Constants.CONTACT_CONTENT }</Text>

                    <ContactButton href="mailto:jakenemiroff@gmail.com">{ Constants.CONTACT_BUTTON_TEXT }</ContactButton>

                </BodyContainer>
            

        </Container>
    );
}

export default About;