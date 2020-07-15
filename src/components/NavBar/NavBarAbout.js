import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";
import { Link } from 'react-router-dom'



const useStyles = makeStyles((theme) => ({

    button: {
        textTransform: 'none',
        color: '#d1cbc7',
        "&:hover": {
            color: theme.palette.pri
        },
        textDecoration: 'none'
    },
}));


export default function NavBarAbout() {
    const classes = useStyles()

    return (
        <div>
            <Button
                className={classes.button}>
                <Link className={classes.button} to={'/about'}>About</Link>
            </Button>
        </div>
    );
}
