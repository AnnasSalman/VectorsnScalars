import React from 'react'
import { Grid, Box } from '@material-ui/core'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {CardMedia, Card} from "@material-ui/core";
import {useSpring, animated} from 'react-spring';
import Button from "@material-ui/core/Button";


const PaginationElement = props => {
    const classes = useStyles();

    const animProps = useSpring(
        {
            config:{
                tension: 120, friction: 14, mass: 1.5
            },
            opacity: 1,
            transform: "translate(0%, 0%)",
            from: { opacity: 1, transform: "translate(0px, 20%)" }
            })

    return(
        <Grid container  className={props.styles}>
            <Grid item xs='auto' sm='auto' md={3} className={classes.left} >
                <animated.div style={animProps} className={classes.titleDiv}>
                    <Typography component='div' className={classes.title}>
                        <Typography xs={{fontSize: 30}} variant='h2'>
                            <Box>
                                {props.title}
                            </Box>
                        </Typography>
                        <Typography variant='subtitle1'>
                            <Box lineHeight='4'>
                                {props.category}
                            </Box>
                        </Typography>
                        <Typography component='div' variant='body1' className={classes.body}>
                            <Box lineHeight='1.5' width={300} fontWeight="fontWeightRegular">
                                {props.description}
                            </Box>
                        </Typography>
                        <Button className={classes.button}>View {props.type}</Button>
                    </Typography>
                </animated.div>
            </Grid>
            <Grid item xs={12} sm={12} md={9} className={classes.right}>
                    <Card style={{height: '100%'}}>
                            <CardMedia image={props.image} className={classes.img}/>
                    </Card>
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles((theme) => ({
    titleDiv:{
        top: '20vh',
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
            left: '50%',
            marginLeft: -150,
        }
    },
    title: {
        backgroundColor: 'transparent',
        padding: theme.spacing(1),
        fontFamily: "Helvetica",
        fontWeight: "bold",
        textShadow: theme.palette.surface + ' 1px 1px 1px',
        color: theme.palette.onBackground,
        width: 600,
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            width: 300,
        }
    },
    body:{
        textShadow: theme.palettewhite + ' 0px 0px 0px',
        marginTop: 15,
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            textShadow: theme.palette.surface + ' 1px 1px 1px',
            textAlign:'center',
            width: '400'
        },

    },
    left:{
        height: '100%'
    },
    right:{
        height: '100%'
    },
    img: {
        height: '100%',
        width: '100%',
    },
    button:{
        marginTop: '8vh',
        color: theme.palette.ter
    }
}));

export default PaginationElement
