import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';

const Container = styled.hgroup`

    width: 100%;
    padding: 0 16px;
    margin-top: 50px;
`;

const Title = styled.h1`

    color: ${Constants.TITLE_COLOR};
    margin: 0;
    font-style: normal;
    letter-spacing: 0.125em;
    text-align: center;
    text-transform: uppercase;
    font-size: 9vw;
    font-weight: 100;
    line-height: 1;
    font-family: 'Josefin Sans', sans-serif;
`;

const SubTitle = styled.h2`

    color: ${Constants.TITLE_COLOR};
    margin: 16px 0 0;
    font-style: normal;
    letter-spacing: 0.125em;
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-family: "Josefin Sans", sans-serif;
`;

const Header = () => {

    return (
        <Container>

            <Title>Jake Nemiroff</Title>
            <SubTitle>The story of a young developer</SubTitle>
            
        </Container>
    );
}

export default Header;