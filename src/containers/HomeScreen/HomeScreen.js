import React, {useState} from "react";
import PaginationElement from "../../components/PaginationElement/PaginationElement";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slick-theme.css'
import image from '../../img/work-5.jpg'
import image2 from '../../img/image_1.jpg'
import {Box} from "@material-ui/core";
import SideBar from "../../components/SideBar/SideBar";
import SocialMediaBar from "../../components/SocialMediaBar/SocialMediaBar";
import {useSpring, animated} from 'react-spring';


const settings = {
    arrows: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    dotsClass:"vertical-dots"
};

const HomeScreen = () => {
    const classes = useStyles()

    return(
        <Grid container className={classes.root}>
            <Grid item xs='auto' md={1} className={classes.pagination}>
                <Box className={classes.socialMedia}>
                    <SocialMediaBar/>
                </Box>
            </Grid>
            <Grid item xs={12} md={10} className={classes.pagination}>
                <Slider {...settings}>
                    <PaginationElement styles={classes.carousel} image={image} title='Walk On Water' category='Outdoor' description='orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' type={'project'}/>
                    <PaginationElement styles={classes.carousel} image={image2} title='Fire squad' category='Outdoor' description='sjkaga adghal adgfd fjdfjg'/>
                    <PaginationElement styles={classes.carousel} image={image} title='Less go' category='Outdoor' description='sjkaga adghal adgfd fjdfjg'/>
                </Slider>
            </Grid>
            <Grid item xs='auto' md={1} className={classes.sideBar}>
                <SideBar/>
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
    socialMedia: {
        position: 'absolute',
        bottom: '4%',
        left: '2%',
        color: 'white',
    },
    pagination: {
        marginTop: '2vh',
        [theme.breakpoints.down('sm')]: {
            marginTop: '0vh'
        }
    },
    carousel: {
        height:'96vh',
        [theme.breakpoints.down('sm')]: {
            height: '99vh'
        },
        position: 'relative',
        overFlow: 'hidden'
    },
    sideBar: {
    }
}));

export default HomeScreen
