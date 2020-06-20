import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Box, Typography} from '@material-ui/core';
import SideButton from "./SideButton/SideButton";
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';



const ContactUs = () => {

    const classes = useStyles();

    const handleClick = (event) => {
        console.log('handle click')
    };

    return (
        <Box>
            <SideButton
                variant='contained'
                onclick={handleClick}
                text='Contact us'
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
        fontSize: 40
    },
    sideButton:{
        backgroundColor: '#1b4d3e'
    }
}));

export default ContactUs;
