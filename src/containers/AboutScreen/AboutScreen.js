import React from "react";
import {Grid, Box} from '@material-ui/core'
import content from "../../constants/content";
import Feature from "../../components/Feature/Feature";
import LayersIcon from '@material-ui/icons/Layers';
import StarIcon from '@material-ui/icons/Star';
import { FaCube } from 'react-icons/fa';
import { FaHandshake } from 'react-icons/fa';
import Description from "../../components/Description/Description";
import {makeStyles} from "@material-ui/core/styles";
import {useSpring, animated} from "react-spring";
import Footer from "../../components/Footer/Footer";

const AboutScreen = () =>{
    const classes = useStyles()

    const animProps = useSpring(
        {
            config:{
                tension: 280, friction: 60
            },
            opacity: 1,
            transform: "translate(0%, 0%)",
            from: { opacity: 1, transform: "translate(0px, 20%)" }
        })

    const animProps2 = useSpring(
        {
            config:{
                tension: 280, friction: 60
            },
            opacity: 1,
            transform: "translate(0%, 0%)",
            from: { opacity: 1, transform: "translate(0px, -40%)" }
        })

    const icons = [
        <LayersIcon className={classes.icon}/>,
        <FaHandshake className={classes.icon}/>,
        <FaCube className={classes.icon}/>,
        <StarIcon className={classes.icon}/>,
        ]

    return(
        <div>
            <Grid container justify='center' className={classes.root}>
                <Grid item md={12} sm={12} xs={12}>
                    <animated.div style={animProps2}>
                        <Description
                            title={content.aboutScreen.title}
                            body={content.aboutScreen.titleBody}
                            image={content.aboutScreen.titleImage}
                        />
                    </animated.div>
                </Grid>
                {content.aboutScreen.features.map((feature,index)=>{return(
                    <Grid item xs={12} sm={3} md={3} key={feature.title}>
                        <animated.div style={animProps}>
                            <Feature title={feature.title} body={feature.body} index={index}>
                                {icons[index]}
                            </Feature>
                        </animated.div>
                    </Grid>
                )
                })}
                <Grid item xs={12}>
                    <Box style={{marginTop: '5vh'}}>
                        <Footer/>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
    },
    icon: {
        color: theme.palette.pri,
        fontSize: 50
    }
}));

export default AboutScreen
