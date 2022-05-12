import { styled } from 'stiches.config';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';
import { RiCheckboxBlankCircleFill, RiCheckboxBlankCircleLine, RiMoonFill, RiSunLine } from 'react-icons/ri';



const Name = styled('p', {
    fontSize:"x-large",
    fontWeight:200,
    color:"$gray11",
    cursor:"pointer"
})
const NavContainer = styled(`div`, {
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
})





const IconSlot = styled('div', {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    opacity: 1,
    transistion:"0.6s ease all",
    marginRight:5
    
})


const IconButton = styled('div', {
    display:"flex",
    alignItems:"center",
    cursor:"pointer",
    transition:"0.4s ease all",
    color:"$gray11",
    padding:'2px 5px',
    borderRadius:8,
    border:"1px solid $gray4",
  
    // background:"$gray2",
    transition:'0.4s ease all',
    '&:hover':{
        transition:'0.4s ease all',
        textDecoration:"underline",
        textDecorationLine:"line-through",
        textDecorationColor:"$mauve9",
        background:"$grayA2"
    }

})



const NavLinkContainer = styled('div', {
    display:'flex',
    flexDirection:'row',
})


const StyledLink = styled(`div`, {
    marginRight:'10px',
    transition: '0.2s ease all',
    color: '$mauve12',
    '&:hover': {
        color: '$mauve12',
    }
})

export default function Nav(){
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return <NavContainer>
        
        <Link href='/'>
        <Name>Felix Tran</Name>
        </Link>
        <IconButton onClick={toggleTheme}>
            <IconSlot>{theme === 'light' ? <RiSunLine/>:<RiMoonFill/>} </IconSlot>
            {theme}  </IconButton>
        {/* <NavLinkContainer>
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
        </NavLinkContainer> */}
    </NavContainer> 
}