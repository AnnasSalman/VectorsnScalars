import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";


const Feature = props => {
    const classes = useStyles()
    return(
        <div className={!(props.index===0||props.index===3)?classes.feature:[classes.feature,classes.featureEnhanced].join(' ')}>
            {props.children}
            <Typography variant='h5'className={classes.title}>
                {props.title}
            </Typography>
            <Typography variant='body1' className={classes.text}>
                {props.body}
            </Typography>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: 10,
        marginBottom: 10,
        color: 'white',
    },
    feature: {
        paddingLeft: '4vw',
        paddingRight: '4vw',
        marginTop: '5vh',
        marginBottom: '5vh',
        [theme.breakpoints.down('sm')]: {
            marginTop: '3vh',
            marginBottom: '3vh',
            alignItems: 'center'
        },
    },
    featureEnhanced:{
        marginTop: '0vh',
    },
    text: {
        color: theme.palette.secondaryText,
        fontSize: '0.9rem'
    }
}));

export default Feature
