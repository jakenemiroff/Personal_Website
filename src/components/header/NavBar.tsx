import React from 'react';
import styled from 'styled-components';
import * as Constants from '../../Constants';
import { Link } from "react-scroll";

const Navbar = styled.nav`

    height: 48px;
    width: 100%;
    position: fixed;
    top: 0;
    background-color: ${Constants.BACKGROUND_NAVBAR};
    box-shadow: 0 7px 20px 0 rgba(0,0,0,0.2), 0 4px 10px 0 rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
`;

const NavItem = styled.div`

    font-size: 16px;
    cursor: pointer;
    color: ${Constants.NAV_TEXT};
    line-height: 48px;

    :hover {
        color: ${Constants.ACTIVE_NAV_LINK};
        border-bottom: 4px solid ${Constants.ACTIVE_NAV_LINK};
    }

    .active {
        color: ${Constants.ACTIVE_NAV_LINK};
    }
`;

const StyledLink = styled(Link)`

    display: block;
    height: inherit;
    padding: 0 16px;
    font-family: "ubuntu", monospace;
`;

const NavBar = () => {

    return (
        <Navbar>

            <NavItem>
                <StyledLink
                    activeClass="active"
                    to={Constants.HOME}
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration= {800}
                >
                    {Constants.HOME}
                </StyledLink>
            </NavItem>
            <NavItem>
                <StyledLink
                    activeClass="active"
                    to={Constants.ABOUT}
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration= {800}
                >
                    {Constants.ABOUT}
                </StyledLink>
            </NavItem>
            <NavItem>
                <StyledLink
                    activeClass="active"
                    to={Constants.WORK}
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration= {800}
                >
                    {Constants.WORK}
                </StyledLink>
            </NavItem>
            <NavItem>
                <StyledLink
                    activeClass="active"
                    to={Constants.PROJECTS}
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration= {800}
                >
                    {Constants.PROJECTS}
                </StyledLink>
            </NavItem>
            <NavItem>
                <StyledLink
                    activeClass="active"
                    to={Constants.CONTACT}
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration= {800}
                >
                    {Constants.CONTACT}
                </StyledLink>
            </NavItem>
            <NavItem>
                <StyledLink
                    activeClass="active"
                    to={Constants.TERMINAL}
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration= {800}
                >
                    {Constants.TERMINAL}
                </StyledLink>
            </NavItem>
            <NavItem>
                <StyledLink
                    activeClass="active"
                    to={Constants.RESUME}
                    spy={true}
                    smooth={true}
                    offset={-48}
                    duration= {800}
                >
                    {Constants.RESUME}
                </StyledLink>
            </NavItem>

        </Navbar>
    );
}

export default NavBar;