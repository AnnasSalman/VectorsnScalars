import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from "@material-ui/core/styles";

export default function AlertDialog(props) {

    const classes = useStyles()

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                PaperProps={{
                    style: {
                        backgroundColor: '#414141',
                    },
                }}
                className={classes.container}
            >
                {/*{props.icon}*/}
                <DialogTitle id="alert-dialog-title" className={classes.text}>{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className={classes.text}>
                        {props.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} className={classes.button}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    text:{
        color: 'white',
    },
    button:{
        color: 'white',
        '&:hover': {
            color: theme.palette.pri
        }
    },
}))
