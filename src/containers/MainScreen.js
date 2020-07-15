import React, {useEffect, useState} from "react";
import Box from '@material-ui/core/Box'
import {Route, Switch} from 'react-router-dom'


import Header from "../components/Header";
import HomeScreen from "./HomeScreen/HomeScreen";
import AboutScreen from "./AboutScreen/AboutScreen";


const MainScreen = () => {

    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
            return setHeader("header")
        } else if (window.scrollY > 70) {
            return setHeader("header2")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return(
        <Box style={styles.root}>
            <Header background={header}/>
            <Switch>
                <Route path='/' component={HomeScreen} exact/>
                <Route path='/about' component={AboutScreen}/>
            </Switch>
        </Box>
    )
}

const styles={
    root:{
        width:'100%',
    }
}


export default MainScreen
