'use client'

import { NavBar } from "../components/NavBar";
import { HeroParallaxHome } from "../components/Hero_Parllelax_Home";
import { TimeLine } from "../components/TimeLine";
import FooterLevel from "../components/Footer";



const about = () => {
    return (
        <>
        <NavBar/>
        <HeroParallaxHome/>
        {/* <TimeLine/> */}
        <FooterLevel/>
        </>
    )
}

export default about;