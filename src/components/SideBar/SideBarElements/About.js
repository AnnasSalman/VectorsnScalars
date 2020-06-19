import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Box, Typography} from '@material-ui/core';
import SideButton from "./SideButton/SideButton";
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';



const About = () => {

    const classes = useStyles();

    const handleClick = (event) => {
        console.log('handle click')
    };

    return (
        <Box>
            <SideButton
                variant='contained'
                onclick={handleClick}
                text='About'
                className={[classes.sideButton]}
            >
                <HeadsetMicIcon className={classes.icon}/>
            </SideButton>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        color: 'white',
        fontSize: 25
    },
    sideButton:{
        backgroundColor: '#004225'
    }
}));

export default About;
