import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import {Grid, withStyles} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const StyledMenu = withStyles({
    paper: {
        backgroundColor: '#121212',
    },
})(Menu);

const useStyles = makeStyles((theme) => ({
    menu: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        backgroundColor: theme.palette.background,
        width: 800
    },
    button: {
        textTransform: 'none',
        color: '#d1cbc7',
        "&:hover": {
            color: theme.palette.pri
        }
    },
    buttonHighlighted: {
        textTransform: 'none',
        color: 'white',
        backgroundColor: theme.palette.pri
    },
    menuTitle: {
        marginLeft: 10,
        color: theme.palette.pri,
        fontWeight: 'bold'
    },
    textItem: {
        fontSize: 15,
        marginBottom: 5,
        "&:hover": {
            color: theme.palette.pri
        }
    },
    divider: {
        backgroundColor: theme.palette.pri,
        marginBottom: 10
    },
    categories:{
        padding: 10,
    },
    icon: {
        color: theme.palette.pri,
        marginLeft: 10
    },
    column: {
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderTopWidth: 0,
        borderStyle: 'solid',
        borderColor: theme.palette.pri
    }
}));


export default function NavBarProducts() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const classes = useStyles()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const buttonIcon = () => anchorEl?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>

    return (
        <div>
            <Button aria-controls="fade-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className={anchorEl?classes.buttonHighlighted:classes.button}>
                Products
                {buttonIcon()}
            </Button>
            <StyledMenu
                id="fade-menu"
                anchorEl={anchorEl}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <Grid container className={classes.menu}>
                    <Grid item md={6} className={classes.categories}>
                        <WbSunnyIcon className={classes.icon}/>
                        <Typography variant='h6' className={classes.menuTitle}>
                            Outdoor
                        </Typography>
                        <Divider className={classes.divider}/>
                        <Grid container>
                            <Grid item md={6} className={classes.column}>
                                <MenuItem onClick={handleClose} className={classes.textItem}>Car Parks</MenuItem>
                                <MenuItem onClick={handleClose } className={classes.textItem}>Fixed Structures</MenuItem>
                                <MenuItem onClick={handleClose} className={classes.textItem}>Retractable Structures</MenuItem>
                            </Grid>
                            <Grid item md={6} className={classes.column}>
                                <MenuItem onClick={handleClose} className={classes.textItem}>Awnings</MenuItem>
                                <MenuItem onClick={handleClose } className={classes.textItem}>Sail Shades</MenuItem>
                                <MenuItem onClick={handleClose} className={classes.textItem}>Garden Furniture</MenuItem>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} className={classes.categories}>
                        <HomeWorkIcon className={classes.icon}/>
                        <Typography variant='h6' className={classes.menuTitle}>
                            Indoor
                        </Typography>
                        <Divider className={classes.divider}/>
                        <Grid container>
                            <Grid item md={6} className={classes.column}>
                                <MenuItem onClick={handleClose} className={classes.textItem}>Wooden & Vinyl Flooring</MenuItem>
                                <MenuItem onClick={handleClose} className={classes.textItem}>Wallpapers & WallPanels</MenuItem>
                                <MenuItem onClick={handleClose } className={classes.textItem}>Wood Plastic Composite</MenuItem>
                            </Grid>
                            <Grid item md={6} className={classes.column}>
                                <MenuItem onClick={handleClose} className={classes.textItem}>UPVC Doors & Windows</MenuItem>
                                <MenuItem onClick={handleClose } className={classes.textItem}>Blinds</MenuItem>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </StyledMenu>
        </div>
    );
}
