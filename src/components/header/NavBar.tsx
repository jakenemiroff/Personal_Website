import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';
import { Link } from "react-scroll";
import Pdf from './resume.pdf';

const Navbar = styled.nav`

    height: 48px;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: ${ Constants.BACKGROUND_NAVBAR_COLOR };
    box-shadow: 0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    z-index: 42;
`;

const NavItem = styled.div`

    font-size: 16px;
    cursor: pointer;
    color: ${ Constants.NAV_TEXT_COLOR };
    line-height: 48px;

    :hover {
        color: ${ Constants.ACTIVE_NAV_LINK_COLOR };
        border-bottom: 4px solid ${ Constants.ACTIVE_NAV_LINK_COLOR };
    }

    .active {
        color: ${ Constants.ACTIVE_NAV_LINK_COLOR };
    }
`;

const StyledLink = styled(Link)`

    display: block;
    height: inherit;
    padding: 0 16px;
    font-family: "ubuntu", monospace;
`;

const ResumeLink = styled.a`

    display: block;
    height: inherit;
    padding: 0 16px;
    font-family: "ubuntu", monospace;
    text-decoration: none;
    color: ${ Constants.NAV_TEXT_COLOR };
`;

const NavBar = () => {

    return (
        <Navbar>

            <NavItem>
                <StyledLink
                    activeClass="active"
                    to={ Constants.HOME }
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration= {800}
                >
                    { Constants.HOME }
                </StyledLink>
            </NavItem>
            <NavItem>
                <StyledLink
                    activeClass="active"
                    to={ Constants.ABOUT }
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration= {800}
                >
                    { Constants.ABOUT }
                </StyledLink>
            </NavItem>
            <NavItem>
                <StyledLink
                    activeClass="active"
                    to={ Constants.WORK }
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration= {800}
                >
                    { Constants.WORK }
                </StyledLink>
            </NavItem>
            <NavItem>
                <StyledLink
                    activeClass="active"
                    to={ Constants.PROJECTS }
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration= {800}
                >
                    { Constants.PROJECTS }
                </StyledLink>
            </NavItem>
            <NavItem>
                <StyledLink
                    activeClass="active"
                    to={ Constants.CONTACT }
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration= {800}
                >
                    { Constants.CONTACT }
                </StyledLink>
            </NavItem>
            <NavItem>
                <ResumeLink href={ Pdf } target = "_blank" rel="noopener noreferrer">{ Constants.RESUME }</ResumeLink>
            </NavItem>

        </Navbar>
    );
}

export default NavBar;