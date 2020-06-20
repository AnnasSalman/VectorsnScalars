import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import {Grid, withStyles} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import ListItem from "@material-ui/core/ListItem";


const useStyles = makeStyles((theme) => ({

    button: {
        textTransform: 'none',
        color: '#d1cbc7',
        "&:hover": {
            color: theme.palette.pri
        }
    },
}));


export default function NavBarProjects() {
    const classes = useStyles()

    const handleClick = (event) => {
    };

    const handleClose = () => {
    };


    return (
        <div>
            <Button
                    onClick={handleClick}
                    className={classes.button}>
                Projects
            </Button>
        </div>
    );
}
