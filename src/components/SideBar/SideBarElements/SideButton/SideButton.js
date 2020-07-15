import React from 'react';
import {Box, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const SideButton = props => {
    const classes = useStyles()

    return(
        <div
            onClick={props.onclick}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            >
            <Button
                variant={props.variant}
                aria-owns={props.ariaOwns}
                onMouseOver={props.onMouseOver}
                aria-haspopup="true"
                className={[(props.variant==='contained')?classes.button:classes.buttonActive, props.className].join(' ')}
                style={{backgroundColor: props.color}}
            >
                <Box display='flex' flexDirection='column' alignItems='center'>
                        {props.children}
                    <Typography variant='body2' className={classes.text}>{props.text}</Typography>
                </Box>
            </Button>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#8db600',
        height: '15vh',
        borderRadius: 0,
        borderWidth: 2,
        width: '100%',
        "&:hover": {
            backgroundColor: theme.palette.pri
        }
    },
    buttonActive: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#8db600',
        height: '30vh',
        borderRadius: 0,
        borderWidth: 2,
        width: '100%',
    },
    text: {
        marginTop: 10,
        fontSize: 10,
        color: 'white',
    },
}));

export default SideButton;
