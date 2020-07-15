import React from "react";
import Outdoor from "./SideBarElements/Outdoor";
import {Box} from '@material-ui/core';
import Indoor from "./SideBarElements/Indoor";
import Projects from "./SideBarElements/Projects";
import ContactUs from "./SideBarElements/ContactUs";
import About from "./SideBarElements/About";
import logo from '../../resources/icons/logoenhanced-removebg.png'
import {useSpring, animated} from "react-spring";
import {makeStyles} from "@material-ui/core/styles";

const SideBar = () => {
    const classes = useStyles()

    const animProps = useSpring(
        {
            config:{
                tension: 120, friction: 14, mass: 1.5
            },
            opacity: 1,
            transform: "translate(0%, 0%)",
            from: { opacity: 1, transform: "translate(0px, 20px)" }
        })

    return(
        <animated.div style={animProps}>
            <Box className={classes.sideBar}>
                    <img src={logo} alt='' style={{
                        width:'100%',
                        height: '100%'
                    }}/>
                <Outdoor/>
                <Indoor/>
                <Projects/>
                <About/>
                <ContactUs/>
            </Box>
        </animated.div>
    )
}

const useStyles = makeStyles((theme) => ({
    sideBar:{
        // position: 'absolute',
        // right: 0,
        // top: '0vh',
        // width: '9vw',
    }
}))

export default SideBar
