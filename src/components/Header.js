import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavBarProducts from "./NavBar/NavBarProducts";
import NavBarProjects from "./NavBar/NavBarProjects";
import NavBarAbout from "./NavBar/NavBarAbout";
import NavBarContact from "./NavBar/NavBarContact";
import {useSpring, animated} from "react-spring";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SideBarMobile from "./SideBarMobile/SideBarMobile";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar:{
        height: 130,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "transparent",
        [theme.breakpoints.down('sm')]: {
            height: 100,
        },
    },
    appBar1:{
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "#383838",
        opacity: 0.9,
        [theme.breakpoints.down('sm')]: {
            height: 70,
        },
    },
    menu: {
        marginRight: theme.spacing(0),
        color: 'white',
    },
    menuButton: {
        fontSize: 40,
        [theme.breakpoints.down('xs')]: {
            fontSize: 35,
        },
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
        marginLeft: theme.spacing(1),
        flexGrow: 1,
        color: theme.palette.ter
    },
    titleRight: {
        flexGrow: 1,
        color: theme.palette.pri
    },
    nav:{
        display: 'flex',
        flexDirection: 'row'
    }

}));

const Header = props => {
    const classes = useStyles();
    const mdDown = useMediaQuery(theme => theme.breakpoints.down('sm'));

    const smallNav = () => {
        if(mdDown){
            return{
                logoLeft: <Box className={classes.menu}><SideBarMobile/></Box>,
                logoBottom: null
            }
        }
        else{
            return{
                logoLeft: null,
                logoBottom:
                    <Box className={classes.nav}>
                        <NavBarProducts/>
                        <NavBarProjects/>
                        <NavBarContact/>
                        <NavBarAbout/>
                    </Box>
            }
        }
    }

    const animImgProps = useSpring(
        {
            config:{
                tension: 120, friction: 14, mass: 1.5
            },
            transform: "translate(0%, 0%)",
            from: { transform: "translate(-20%, 0%)" }
            // opacity: 1, marginTop: '50%', from: {opacity: 0, marginTop: '0%'}
        })

    return (
        <Box boxShadow={0} className={classes.root}>
            <AppBar elevation={0} position="fixed" className={(props.background==='header')?classes.appBar:classes.appBar1}>
                <Toolbar>
                    <animated.div style={animImgProps} className={classes.titleLeft}>
                        <Box className={classes.nav}>
                            <Link style={{textDecoration: 'none'}} to={'/'}>
                            <Typography component='div'>
                                <Typography component='span' variant='h4' className={classes.titleLeft}>
                                    Vectors
                                </Typography>
                                <Typography component='span' variant='h4' className={classes.titleMid}>
                                    n'
                                </Typography>
                                <Typography component='span' variant='h4' className={classes.titleRight}>
                                    Scalars
                                </Typography>
                            </Typography>
                            </Link>
                        </Box>
                        {smallNav().logoBottom}
                    </animated.div>
                        {smallNav().logoLeft}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
