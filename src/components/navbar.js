import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react"
export const Navbar = () => {
    return (
    <NavbarStyled>
    <div class="navbar">
        <div class="links">
            <Link to="/"> Shop </Link>
            <Link to="/cart"> 
                {" "}
                <ShoppingCart size={32}/>
            </Link>
        </div>
    </div>
    </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
.navbar{
    width: 100%;
    height: 6vh;
    display: flex;
    justify-content: right;
    background-color: black;
}
.links{
    align-items: center;
    display: flex;
}
.links a{
    color: white;
    margin-right: 5vw;
    text-decoration: none;
}
`
