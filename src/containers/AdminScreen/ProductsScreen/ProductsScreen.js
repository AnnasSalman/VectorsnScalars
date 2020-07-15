import React from "react";
import {Tooltip, Fab} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import 'simplebar/dist/simplebar.min.css';
import CreateProductModal from "../../../components/AddProductModal/AddProductModal";
import Slide from "@material-ui/core/Slide";
import {useSelector} from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
})

const ProductsScreen = props => {
    const classes = useStyles()

    const uploadStatus = useSelector(state => state.product.status);

    const [open, setOpen] = React.useState(false);
    const [alert, setAlert] = React.useState(true);
    const [success, setSuccess] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setAlert(false);
    };

    return(
        <div>
            {
                uploadStatus==='success'?
                    <Snackbar open={alert} autoHideDuration={6000} onClose={handleAlertClose}>
                        <Alert onClose={handleAlertClose} severity="success">
                            Your product was added to the '{props.location.state.name}' category successfully
                        </Alert>
                    </Snackbar>:null
            }
            <Tooltip title="Add" aria-label="add">
                <Fab className={classes.absolute} onClick={handleClickOpen}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <CreateProductModal
                product={props.location.state.name}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                title={props.location.state.name.slice(0, -1)}
                TransitionComponent={Transition}
            />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
        backgroundColor: theme.palette.pri
    },
}));

export default ProductsScreen;
