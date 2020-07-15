import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {withStyles, MenuItem} from "@material-ui/core";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import menuItems from "../../constants/menuItems";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import ProductsScreen from "./ProductsScreen/ProductsScreen";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import SignInSide from "../../components/SignInSide/SignInSide";

const StyledListItem = withStyles({
    root: {
        backgroundColor: '#121212',
        "&$selected": {
            backgroundColor: "red"
        },
    },
    selected: {}
})(ListItem);

const drawerWidth = 240;

function AdminScreen(props) {
    // return (
    //     <SignInSide/>
    // )
    let { path } = useRouteMatch();
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [openIndoor, setOpenIndoor] = React.useState(true);
    const [openOutdoor, setOpenOutdoor] = React.useState(true);
    const [selected, setSelected] = React.useState('Dashboard');

    const handleClick = (source) => {
        if(source==='OUTDOOR'){
            setOpenOutdoor(!openOutdoor)
        }
        else if(source==='INDOOR'){
            setOpenIndoor(!openIndoor)
        }
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const updateSelected = (selectedIndex) => {
        console.log('selected')
        setSelected(selectedIndex);
    }

    const productSelectedHandler = (product) => {
        props.history.push(`${path}/products/`+ product.replace(/\s/g, '-').toLowerCase(), {name: product})
        updateSelected(product)
    }

    const drawer = (
        <SimpleBar style={{maxHeight: '100%'}}>
        <div>
            <div className={classes.toolbar} />
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                // subheader={
                //     //Add back button
                // }
            >
                {menuItems.admin.map((item)=>{
                    return(
                        <MenuItem
                            key={item.name}
                            classes={{
                                root: classes.menuItemRoot,
                                selected: classes.menuItemSelected
                            }}
                            className={classes.listItem} onClick={()=>updateSelected(item.name)} selected={selected===item.name}>
                            <ListItemIcon className={classes.listItem}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </MenuItem>
                    )
                })}
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
                                <MenuItem
                                    key={product}
                                    button
                                    className={classes.nested}
                                    classes={{
                                          root: classes.menuItemRoot,
                                          selected: classes.menuItemSelected
                                    }}
                                    className={classes.listItem} onClick={()=>productSelectedHandler(product)} selected={selected===product}>
                                    <ListItemText primary={product} />
                                </MenuItem>
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
                                <MenuItem
                                    selected
                                    key={product}
                                    button
                                    classes={{
                                        root: classes.menuItemRoot,
                                        selected: classes.menuItemSelected
                                    }}
                                    className={classes.listItem}
                                    onClick={()=>productSelectedHandler(product)} selected={selected===product}>
                                    <ListItemText primary={product} />
                                </MenuItem>
                            )
                        })}
                    </List>
                </Collapse>
            </List>
        </div>
        </SimpleBar>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component='div'>
                        <Typography component='span' variant='h5' className={classes.titleLeft}>
                            Vectors
                        </Typography>
                        <Typography component='span' variant='h5' className={classes.titleMid}>
                            n'
                        </Typography>
                        <Typography component='span' variant='h5' className={classes.titleMid}>
                            Scalars
                        </Typography>
                        <Typography component='span' variant='h5' className={classes.titleAdmin}>
                            ADMIN
                        </Typography>
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route path={`${path}/products/:name`} component={ProductsScreen}/>
                </Switch>
            </main>
        </div>
    );
}

AdminScreen.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100vh'
    },
    drawer: {
        backgroundColor: theme.palette.background,
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        backgroundColor: theme.palette.background,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        backgroundColor: theme.palette.background,
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    icon: {
        color: 'white',
        fontSize: 40,
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.0rem',
        }
    },
    listItem: {
        color: theme.palette.pri,
        paddingLeft: theme.spacing(1),
    },
    titleLeft: {
        marginLeft: theme.spacing(2),
        flexGrow: 1,
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(1),
        },
    },
    titleMid: {
        marginLeft: theme.spacing(0),
        flexGrow: 1,
        color: theme.palette.ter
    },
    titleRight: {
        flexGrow: 1,
        color: theme.palette.pri
    },
    titleAdmin: {
        marginLeft: theme.spacing(1),
        flexGrow: 1,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: theme.palette.pri
    },
    nav:{
        display: 'flex',
        flexDirection: 'row'
    },
    list:{
        width: 250,
        height: '100%',
        backgroundColor: theme.palette.background,
    },
    menuItemRoot: {
        "&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover": {
            backgroundColor: theme.palette.sec
        }
    },
    menuItemSelected: {}
}));

export default AdminScreen;
