import React from "react";
import {Grid} from '@material-ui/core'
import Company from "./Company/Company";
import {makeStyles} from "@material-ui/core/styles";
import Projects from "./Projects/Projects";
import Links from "./Links/Links";
import Contact from "./Contact/Contact";

const Footer = () => {
    const classes = useStyles()
    return(
        <Grid container className={classes.container}>
            <Grid item xs={12} md={3} className={classes.footerItem}>
                <Company/>
            </Grid>
            <Grid item xs={12} md={4} className={classes.footerItem}>
                <Projects/>
            </Grid>
            <Grid item xs={12} md={3} className={classes.footerItem}>
                <Contact/>
            </Grid>
            <Grid item xs={12} md={2} className={classes.footerItem}>
                <Links/>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: theme.palette.background,
        width: '100%',
    },
    footerItem:{
        marginTop: '15vh',
        marginBottom: '15vh',
        [theme.breakpoints.down('sm')]: {
            marginTop: '5vh',
            marginBottom: '0vh',
        },
    }
}));

export default Footer;
