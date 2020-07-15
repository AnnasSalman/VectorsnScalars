import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from '@material-ui/core';
import SideButton from "./SideButton/SideButton";
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';



const Projects = () => {

    const classes = useStyles();

    const handleClick = (event) => {
        console.log('handle click')
    };

    return (
        <Box>
            <SideButton
                variant='contained'
                onclick={handleClick}
                text='Projects'
                className={[classes.sideButton]}
            >
                <StoreMallDirectoryIcon className={classes.icon}/>
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
        backgroundColor: '#228b22'
    }
}));

export default Projects;
