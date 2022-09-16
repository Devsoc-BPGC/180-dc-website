import React, { useState,useEffect } from 'react'
import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

const Navbar = () => {
    const [width,setWidth] = useState(window.innerWidth)

    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWidth(window.innerWidth)
        })
    },[])

    return (
        <React.Fragment>
            {width>750 ? <NavbarDesktop /> : <NavbarMobile/>}
        </React.Fragment>
    );
}

export default Navbar;