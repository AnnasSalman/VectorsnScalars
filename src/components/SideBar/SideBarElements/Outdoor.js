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
import Fixed from '../../../resources/icons/fixed.jpg'



const Outdoor = () => {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        console.log('handle click')
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        console.log('handleclose')
        setAnchorEl(null);
    };

    return (
        <Box>
            <SideButton
                variant={(anchorEl===null)?'contained':'outlined'}
                onclick={handleClick}
                text='Outdoors'
            >
                <WbSunnyIcon className={classes.icon}/>
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
                        <SideMenuItem text='Car Parks' image={CarPark}/>
                        <SideMenuItem text='Fixed Structures' image={Fixed}>
                        </SideMenuItem>
                    </Box>
                    <Box display='flex' flexDirection='row' component='div'>
                        <SideMenuItem text='Retractable Structures' image={Retractable}/>
                        <SideMenuItem text='Awnings' image={Awning}/>
                    </Box>
                    <Box display='flex' flexDirection='row' component='div'>
                        <SideMenuItem text='Sail Shades' image={SailShade}/>
                        <SideMenuItem text='Garden Furniture' image={GardenFurniture}/>
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
    items: {
    }
}));

export default Outdoor;
