import React from "react";
import Box from '@material-ui/core/Box'

import Header from "../components/Header";
import HomeScreen from "./HomeScreen/HomeScreen";

const MainScreen = () => {
    return(
        <Box style={styles.root}>
            <Header/>
            <HomeScreen/>
        </Box>
    )
}

const styles={
    root:{
        height: '100%',
    }
}


export default MainScreen
