import React from "react";
import './Description.css'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const Description = props => {
    const classes = useStyles()
    return(
        <div
            style={
                {
                    backgroundImage: `url(${props.image})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                }
            }
            className={'clippedDiv'}
        >
            <Typography variant='h3' className={classes.title}>
                {props.title}
            </Typography>
            <Typography variant='body2' className={classes.body}>
                {props.body}
            </Typography>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        paddingTop: '15vh',
        color: 'white',
        textShadow: theme.palette.surface + ' 1px 1px 1px',
    },
    body: {
        textAlign: 'center',
        paddingTop: '5vh',
        fontSize: '0.8rem',
        width: '40vw',
        color: 'white',
        textShadow: theme.palette.surface + ' 1px 1px 1px',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '3vh',
            width: '70vw',
        },
    },
}));

export default Description
