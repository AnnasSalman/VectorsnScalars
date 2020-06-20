import React from 'react';
import Menu from '@material-ui/core/Menu';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Box, Typography} from '@material-ui/core';
import SideButton from "./SideButton/SideButton";
import SideMenuItem from "./SideMenuItem/SideMenuItem"
import Flooring from '../../../resources/icons/woodenandvinyl.jpg'
import Blinds from '../../../resources/icons/blinds.jpg'
import Wallpapers from '../../../resources/icons/wallpaper1.png'
import upvc from '../../../resources/icons/upvc.jpeg'
import wpc from '../../../resources/icons/wpc.jpg'
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const Indoor = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <SideButton
                variant={(anchorEl===null)?'contained':'outlined'}
                onclick={handleClick}
                text='Indoors'
                className={classes.sideButton}
            >
                <HomeWorkIcon className={classes.icon}/>
            </SideButton>
            <Menu
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "center", horizontal: -200 }}
                transformOrigin={{ vertical: "center", horizontal: "center" }}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className={classes.menu}
            >
                <Box display='flex' flexDirection='column' component='div' className={classes.menu} onMouseLeave={handleClose}>
                    <Box display='flex' flexDirection='row' component='div'>
                        <SideMenuItem text='Wooden & Vinyl Flooring' image={Flooring} className={classes.items}/>
                        <SideMenuItem text='Blinds' image={Blinds}>
                        </SideMenuItem>
                    </Box>
                    <Box display='flex' flexDirection='row' component='div'>
                        <SideMenuItem text='Wallpapers & Wallpanels' image={Wallpapers}/>
                        <SideMenuItem text='UPVC Windows & Doors' image={upvc}/>
                    </Box>
                    <Box display='flex' flexDirection='row' component='div'>
                        <SideMenuItem text='Wood Plastic Composite' image={wpc} className={classes.fullWidth}/>
                    </Box>
                </Box>
            </Menu>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        color: 'white',
        fontSize: 40
    },
    sideButton: {
        backgroundColor: '#009e60'
    },
    fullWidth: {
        width: 400
    }
}));

export default Indoor;
