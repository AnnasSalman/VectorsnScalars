import React from 'react';
import './App.css';
import MainScreen from "./containers/MainScreen";
import bgImage from './img/use_your_illusion.png'

function App() {
  return (
      <div style={styles.root}>
        <MainScreen/>
      </div>
  );
}

const styles={
    root:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        // backgroundColor: '#121212'
        backgroundImage: 'url('+bgImage+')',
        backgroundRepeat: 'repeat'
    }
}

export default App;
