import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';

const StyledHeader = styled.div`

    height: 100px;
    width: inherit;
    border: solid 1px black;
    background-color: cornflowerblue;
`;

const Banner = styled.div`
    
    display: flex; 
    height: inherit;
    float: right;
`;

const NavText = styled.p`
    
    margin: auto; /* Important */
    padding-right: 30px;
`;

const Header = () => {

    return (
        <StyledHeader>

            <Banner>
                <NavText>{ Constants.ABOUT }</NavText>
                <NavText>{ Constants.WORK }</NavText>
                <NavText>{ Constants.PROJECTS }</NavText>
                <NavText>{ Constants.CONTACT }</NavText>
                <NavText>{ Constants.TERMINAL }</NavText>
            </Banner>

        </StyledHeader>
    );
}

export default Header;