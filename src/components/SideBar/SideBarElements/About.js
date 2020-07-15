import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from '@material-ui/core';
import SideButton from "./SideButton/SideButton";
import PeopleOutline from "@material-ui/icons/PeopleOutline";


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
                <PeopleOutline className={classes.icon}/>
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
        backgroundColor: '#004225'
    }
}));

export default About;
