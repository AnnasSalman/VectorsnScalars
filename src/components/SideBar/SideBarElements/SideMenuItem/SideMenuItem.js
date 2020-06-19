import React from 'react';
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import './SideMenuItem.css'

const SideMenuItem = props => {

    const classes = useStyles()

    return(
        <div
            style={
                {
                    backgroundImage: `url(${props.image})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover'
                }
            }
             className='background'>
            <Button variant='outlined' className={[classes.menuItem, props.className].join(' ')} onClick={props.onClick}>
                <Box display='flex'
                     flexDirection='column'
                     component='div'
                     alignItems='center'>
                    <p>{props.text}</p>
                </Box>
            </Button>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    menuItem: {
        backgroundColor: 'transparent',
        width: 200,
        height: 100,
        fontSize: 15,
        fontWeight: 'bold',
        textShadow: theme.palette.surface + ' 2px 2px 2px',
        color: 'white',
        fontFamily: 'Helvetica',
        borderRadius: 0
    },
    menuItemIcon: {
        color: 'black',
        fontSize: 25,
        marginTop: 10
    },
    menuItemText: {
        color: 'black',
        fontSize: 20,
        marginTop: 20
    },
}));
export default SideMenuItem;
