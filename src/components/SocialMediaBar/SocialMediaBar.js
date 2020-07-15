import React, {useState} from 'react'
import {Box} from '@material-ui/core'
import {useTransition, animated} from "react-spring";
import {makeStyles} from "@material-ui/core/styles";
import Instagram from "@material-ui/icons/Instagram"
import Facebook from "@material-ui/icons/Facebook"
import Twitter from "@material-ui/icons/Twitter"
import IconButton from '@material-ui/core/IconButton';

const SocialMediaBar = () => {
    const classes = useStyles();

    const instagram = <Instagram/>
    const facebook = <Facebook/>
    const twitter = <Twitter/>

    const [items] = useState(
        [
            {element: instagram, key: 1},
            {element: facebook, key: 2},
            {element: twitter, key: 3}
            ]
    );
    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
    })

    return(
        <Box className={classes.socialMedia}>
            {transitions.map(({ item, props, key }) =>
                <animated.div key={key} style={props}>
                    <IconButton className={classes.socialMediaIcon}>
                        {item.element}
                    </IconButton>
                </animated.div>
            )}
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    socialMedia:{
        display: 'flex',
        flexDirection: 'column'
    },
    socialMediaIcon:{
        color: 'white',
        fontSize: 30
    },
}));

export default SocialMediaBar;
