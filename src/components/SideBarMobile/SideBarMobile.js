import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from "@material-ui/core";
import PeopleOutline from "@material-ui/icons/PeopleOutline";
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import menuItems from "../../constants/menuItems";

const StyledListItem = withStyles({
    root: {
        backgroundColor: '#121212',
        "&$selected": {
            backgroundColor: "red"
        },
    },
    selected: {}
})(ListItem);

const useStyles = makeStyles((theme)=>({
    list: {
        width: 250,
        height: '100%',
        backgroundColor: theme.palette.background,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        width: '100%',
        maxWidth: 360,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    icon: {
        color: 'white',
        fontSize: 40,
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.0rem',
        }
    },
    listItem: {
        color: theme.palette.pri
    }

}));

export default function SideBarMobile() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });
    const [openIndoor, setOpenIndoor] = React.useState(true);
    const [openOutdoor, setOpenOutdoor] = React.useState(true);


    const handleClick = (source) => {
        if(source==='OUTDOOR'){
            setOpenOutdoor(!openOutdoor)
        }
        else if(source==='INDOOR'){
            setOpenIndoor(!openIndoor)
        }
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                // subheader={
                //     //Add back button
                // }
                className={classes.root}
            >
                <StyledListItem button className={classes.listItem} onClick={()=>handleClick('OUTDOOR')}>
                    <ListItemIcon className={classes.listItem}>
                        <WbSunnyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Outdoor Products" />
                    {openOutdoor ? <ExpandLess /> : <ExpandMore />}
                </StyledListItem>
                <Collapse in={openOutdoor} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {menuItems.products.outdoorProducts.map((product)=>{
                            return(
                                <StyledListItem key={product}
                                          button
                                          className={classes.nested}
                                          onClick={()=>handleClick(product.toUpperCase())}>
                                    <ListItemText primary={product} />
                                </StyledListItem>
                            )
                        })}
                    </List>
                </Collapse>
                <StyledListItem button className={classes.listItem} onClick={()=>handleClick('INDOOR')}>
                    <ListItemIcon className={classes.listItem}>
                        <HomeWorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Indoor Products" />
                    {openIndoor ? <ExpandLess /> : <ExpandMore />}
                </StyledListItem>
                <Collapse in={openIndoor} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {menuItems.products.indoorProducts.map((product)=>{
                            return(
                                <StyledListItem
                                    key={product}
                                    button
                                    className={classes.nested}
                                    onClick={()=>handleClick(product.toUpperCase())}>
                                    <ListItemText primary={product} />
                                </StyledListItem>
                            )
                        })}
                    </List>
                </Collapse>
                <StyledListItem className={classes.listItem} button>
                    <ListItemIcon className={classes.listItem}>
                        <StoreMallDirectoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Projects" />
                </StyledListItem>
                <StyledListItem button className={classes.listItem}>
                    <ListItemIcon className={classes.listItem}>
                        <PeopleOutline />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </StyledListItem>
                <StyledListItem button className={classes.listItem}>
                    <ListItemIcon className={classes.listItem}>
                        <HeadsetMicIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact us" />
                </StyledListItem>
            </List>
        </div>
    );

    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}>
                <MenuIcon className={classes.icon}/>
            </Button>
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                {list('left')}
            </Drawer>
        </div>
    );
}
