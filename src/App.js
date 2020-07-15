import React from 'react';
import './App.css';
import MainScreen from "./containers/MainScreen";
import bgImage from './img/use_your_illusion.png';
import {Route, Switch} from "react-router-dom";
import AdminScreen from "./containers/AdminScreen/AdminScreen";

function App() {
  return (
      <div style={styles.root}>
          <Switch>
              <Route path='/admin' component={AdminScreen}/>
              <Route path='/' component={MainScreen}/>
          </Switch>
      </div>
  );
}

const styles={
    root:{
        width: '100%',
        height: '100%',
        // backgroundColor: '#121212'
        backgroundImage: 'url('+bgImage+')',
        backgroundRepeat: 'repeat',
    }
}

export default App;
