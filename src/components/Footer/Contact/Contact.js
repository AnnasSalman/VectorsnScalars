import React from "react";
import {Grid, Box, IconButton} from '@material-ui/core'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import content from "../../../constants/content";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const Contact = () => {
    const classes = useStyles()
    return(
        <Grid container direction='column' className={classes.container}>
            <Grid item>
                <Typography variant='h5' className={classes.title}>
                    Have a Query?
                </Typography>
                <Grid container className={classes.subGrid}>
                    <Grid item xs={2}>
                        <IconButton>
                            <LocationOnIcon className={classes.icon}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={10}>
                        <Box className={classes.text}>
                            <Typography variant='body1' className={classes.element}>
                                {content.footer.address}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container className={classes.subGrid}>
                    <Grid item xs={2}>
                        <IconButton>
                            <PhoneIcon className={classes.icon}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={10}>
                        <Box className={classes.text}>
                            <Typography variant='body1' className={classes.element}>
                                {content.footer.phone}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container className={classes.subGrid}>
                    <Grid item xs={2}>
                        <IconButton>
                            <MailIcon className={classes.icon}/>
                        </IconButton>
                    </Grid>
                    <Grid item xs={10}>
                        <Box className={classes.text}>
                            <Typography variant='body1' className={classes.element}>
                                {content.footer.companyEmail}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    icon:{
        color: 'white'
    },
    title:{
        color: 'white',
        fontWeight: 'bold'
    },
    subGrid: {
        marginTop: '3vh',
    },
    text: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    element: {
        color: theme.palette.secondaryText
    },
    container: {
        paddingLeft: 5,
        paddingRight: 10
    }
}));

export default Contact;
