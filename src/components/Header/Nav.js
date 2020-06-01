import React,{Fragment} from "react";
import styled from '@emotion/styled';


const NavContainer = styled.nav`
    background: #b97d10;
`;

const Nav = () => {
    return (
        <Fragment>
            <NavContainer className="navbar">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png" width="200" alt=""/>
                </a>               
            </NavContainer>
        </Fragment>        
    );
};

export default Nav;