import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

    button: {
        textTransform: 'none',
        color: '#d1cbc7',
        "&:hover": {
            color: theme.palette.pri
        }
    },
}));


export default function NavBarAbout() {
    const classes = useStyles()

    const handleClick = (event) => {
    };

    return (
        <div>
            <Button
                onClick={handleClick}
                className={classes.button}>
                Contact Us
            </Button>
        </div>
    );
}
