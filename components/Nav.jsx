import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';


const NavContainer = styled.div`

`

const NavLinkContainer = styled.div`
    display:flex;
    flex-direction:row;

`


const StyledLink = styled.div`
    margin-right:10px;
    transition: 0.2s ease all;
    color: #222;
    &:hover {
        color: #6e6e6e;
    }
`

export default function Nav(){
    return <NavContainer>
        <h2>felixtr</h2>
        <NavLinkContainer>
            <StyledLink>
                <Link href='/about'>
                    about
                </Link>
            </StyledLink>
            <StyledLink>
                <Link href='/'>
                    posts
                </Link>
            </StyledLink>
        </NavLinkContainer>
    </NavContainer> 
}