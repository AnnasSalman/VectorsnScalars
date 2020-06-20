import React from 'react';
import Menu from '@material-ui/core/Menu';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Box, Typography} from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SideButton from "./SideButton/SideButton";
import SideMenuItem from "./SideMenuItem/SideMenuItem"
import CarPark from '../../../resources/icons/carpark2.jpg'
import SailShade from '../../../resources/icons/sailshade.jpg'
import Awning from '../../../resources/icons/awning.jpg'
import GardenFurniture from '../../../resources/icons/gardenfurniture.jpg'
import Retractable from '../../../resources/icons/retractable.jpg'
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
