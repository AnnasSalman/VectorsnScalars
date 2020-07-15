import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        ter: '#F1F1F1',
        sec:'#414141',
        pri: '#c4b205',
        onBackground: '#FFFFFF',
        background: '#121212',
        surface: '#121212',
        secondaryText: '#b0b0b0'
    }
});

theme.typography.body1 = {
    color: '#e3dada',
    fontSize: '1rem',
    fontFamily: 'Helvetica',
    [theme.breakpoints.down('sm')]: {
        color: 'white'
    },
}

theme.typography.h2 = {
    [theme.breakpoints.up('xs')]: {
        fontSize: '2.5rem',
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '4.5rem',
    },
};

theme.typography.h4 = {
    fontWeight: 'bold',
    fontSize: '2.0rem',
    [theme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
    },
};


export default theme
