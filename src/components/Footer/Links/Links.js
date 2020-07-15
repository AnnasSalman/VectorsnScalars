import React from "react";
import {Grid, Typography, Button, Box} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

const Links = () => {
    const classes = useStyles()
    return(
        <Grid container className={classes.container}>
            <Grid item xs={12}>
                <Typography variant='h5' className={classes.title}>Site Links</Typography>
                <Box className={classes.vertical}>
                <Button className={classes.link}>Home</Button>
                <Button className={classes.link}>Projects</Button>
                <Button className={classes.link}>About</Button>
                    <Button className={classes.link}>Contact</Button>
                <Button className={classes.link}>Find us</Button>
                </Box>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    container:{
        paddingLeft: 10
    },
    vertical:{
        display: 'flex',
        flexDirection: 'column'
    },
    link:{
        marginTop: 5,
        color: theme.palette.secondaryText,
        textAlign: 'left'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
}))

export default Links;
