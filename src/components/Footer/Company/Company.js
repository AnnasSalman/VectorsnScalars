import React from "react";
import {Grid, Box, IconButton} from '@material-ui/core'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import content from "../../../constants/content";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Company = () => {
    const classes = useStyles()
    return(
        <Grid container >
            <Grid item xs={12}>
                <Typography component='div'>
                    <Typography component='span' variant='h5' className={classes.titleLeft}>
                        Vectors
                    </Typography>
                    <Typography component='span' variant='h5' className={classes.titleMid}>
                        n'
                    </Typography>
                    <Typography component='span' variant='h5' className={classes.titleRight}>
                    Scalars
                    </Typography>
                </Typography>
                <Typography component='div' variant='body1' className={classes.description}>
                    <Box lineHeight='1.5'>
                        {content.footer.companyDescription}
                    </Box>
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.socialMedia}>
                    <IconButton aria-label="instagram" className={classes.icon}>
                        <InstagramIcon style={{fontSize: 30}}/>
                    </IconButton>
                    <IconButton aria-label="facebook" className={classes.icon}>
                        <FacebookIcon style={{fontSize: 30}}/>
                    </IconButton>
                    <IconButton aria-label="twitter" className={classes.icon}>
                        <TwitterIcon style={{fontSize: 30}}/>
                    </IconButton>
                </Box>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    titleLeft: {
        marginLeft: theme.spacing(2),
        flexGrow: 1,
        color: 'white',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(1),
        },
    },
    titleMid: {
        marginLeft: theme.spacing(1),
        flexGrow: 1,
        color: theme.palette.ter,
        fontWeight: 'bold',
    },
    titleRight: {
        flexGrow: 1,
        color: theme.palette.pri,
        fontWeight: 'bold',
    },
    container:{
        backgroundColor: theme.palette.background
    },
    description:{
        marginTop: '4vh',
        color: theme.palette.secondaryText,
        fontSize: '0.9rem',
        marginLeft: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            marginLeft: theme.spacing(1),
        },
    },
    icon: {
        backgroundColor: '#363636',
        color: 'white',
        margin: 10,
    },
    socialMedia: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '4vh'
    }
}));

export default Company;
