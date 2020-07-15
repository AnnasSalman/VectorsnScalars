import React from "react";
import {Box, Grid, Typography, IconButton} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';


const Project = props => {
    const classes = useStyles()
    return(
        <Grid container>
            <Grid item xs={3}>
                <img src={props.image} alt='' className={classes.image}/>
            </Grid>
            <Grid item xs={9}>
                <Typography variant='h6' className={classes.title}>
                    {props.title}
                </Typography>
                <Box className={classes.desc}>
                    <Typography variant='body1' className={classes.category}>
                        {props.category}
                    </Typography>
                    <IconButton className={classes.icon}>
                        <OpenInNewIcon style={{fontSize: 15}}/>
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    image: {
        width: 80,
        height: 80
    },
    desc: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon:{
        color: 'white',
        backgroundColor: '#363636',
        marginLeft: 10,
    },
    category:{
        color: theme.palette.secondaryText
    },
    title: {
        marginLeft: 10,
        color: 'white'
    }
}))

export default Project;
