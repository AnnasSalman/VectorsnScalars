import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import {useSpring, animated} from "react-spring";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar:{
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "transparent",
        [theme.breakpoints.down('sm')]: {
            height: 100,
        },
        [theme.breakpoints.down('sm')]: {
            height: 80,
        },
    },
    menu: {
        marginRight: theme.spacing(0),
        color: 'white'
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
            marginLeft: theme.spacing(1)
        }
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
}));

const Header = () => {
    const classes = useStyles();

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
            <AppBar elevation={0} position="absolute" className={classes.appBar}>
                <Toolbar>
                    <animated.div style={animImgProps} className={classes.titleLeft}>
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
                    </animated.div>
                    <IconButton edge="end" className={classes.menu} aria-label="menu">
                        {/*<MenuOpenRoundedIcon className={classes.menuButton}/>*/}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
