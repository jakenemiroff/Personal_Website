import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';
import { animateScroll as scroll} from "react-scroll";
import BackToTop from './back_to_top.png';
import Octocat from './octocat.png';
import LinkedIn from './linkedin.png';

const StyledFooter = styled.footer`

    height: 150px;
    width: 100%;
    bottom: 0;
    position: relative;
    background-color: ${ Constants.FOOTER_BACKGROUND_COLOR };
    box-shadow: 0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
`;

const Icon = styled.img`

    height: 100px;
    width: 100px;
    cursor: pointer;
    margin: auto
`;

const StyledLink = styled.a`

    margin: auto;
`;

const Footer = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <StyledFooter>

            <StyledLink href={ Constants.GITHUB_HOME } rel="noopener noreferrer" target="_blank">
                <Icon src={ Octocat }  />
            </StyledLink>

                <Icon src={ BackToTop } onClick={ scrollToTop } />

            <StyledLink href={ Constants.LINKEDIN_HOME } rel="noopener noreferrer" target="_blank">
                <Icon src={ LinkedIn } />
            </StyledLink>

        </StyledFooter>
    );
}

export default Footer;