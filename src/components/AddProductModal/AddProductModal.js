import React, {useState, useRef, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button, Grid, Box, TextField, Slider} from '@material-ui/core'
import AvatarEditor from "react-avatar-editor";
import defaultImage from '../../resources/icons/placeholderImage.png'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import {useDispatch, useSelector} from 'react-redux'
import {Formik} from 'formik'
import {withStyles,} from '@material-ui/core/styles';
import {createProduct} from "../../store/actions/productActions";
import * as yup from 'yup'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import AlertDialog from "../AlertDialog/AlertDialog";
import { Offline, Online } from "react-detect-offline";
import WifiOffIcon from '@material-ui/icons/WifiOff';
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

const productSchema = yup.object({
    title: yup.string().required().label('Title'),
    description: yup.string().required().label('Description'),
    warranty: yup.number().required().label('Warranty'),
})


const CreateProductModal = props => {
    const dispatch = useDispatch()
    const uploadStatus = useSelector(state => state.product.status);
    const imageCropper = useRef(null)
    const classes = useStyles();

    const [state, setState] = useState({
        file:'',
        imagePreviewUrl:'',
    })
    const [isloading, setloading] = useState(false)
    const [uploadError, setuploadError] = useState(false)
    const [imageError, setimageError] = useState(false)
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const handleAlertClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setimageError(false);
    };

    useEffect(()=>{
        if(uploadStatus==='success'){
            props.onClose()
        }
        else if(uploadStatus==='error'){
            setuploadError(true)
        }
    },[uploadStatus])

    const onChangeHandler = (e) => {
        if(e.target.files.length!==0){
            e.preventDefault();
            let reader = new FileReader();
            let file = e.target.files[0];

            reader.onloadend = () => {
                setState({
                    file: file,
                    imagePreviewUrl: reader.result
                });
        }

        reader.readAsDataURL(file)}
    }


    let croppedImage = ''
    const setimageCropper = (editor) => {
        croppedImage = editor
    }

    let $imagePreview = null;
    if (state.imagePreviewUrl) {
        $imagePreview = (<AvatarEditor
            ref={setimageCropper}
            image={state.imagePreviewUrl}
            width={500}
            height={350}
            color={[0, 0, 0, 0.5]} // RGBA
            border={0}
            scale={1.0}
            rotate={0}
        />);
    } else {
        $imagePreview = (<AvatarEditor
            image={defaultImage}
            width={500}
            height={350}
            color={[0, 0, 0, 0.5]} // RGBA
            border={0}
            scale={1.0}
            rotate={0}
        />);
    }

    return(
        <Dialog fullScreen open={props.open} onClose={props.onClose} TransitionComponent={props.TransitionComponent}
                PaperProps={{
                    style: {
                        backgroundColor: '#121212',
                    },
                }}>
            <Snackbar open={imageError} autoHideDuration={6000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity="error">
                    Cannot save a product without an image. Click on upload image to select an image from your computer
                </Alert>
            </Snackbar>
            {
                <Offline>
                <AlertDialog
                    open={!uploadError}
                    handleClose={()=>setuploadError(true)}
                    icon=<WifiOffIcon style={{fontSize: 40, color: '#c4b205'}}/>
                    title='Connection Error'
                    description='Please check your internet connection or try later. Products cannot be saved without an internet connection'/>
                </Offline>
            }
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    warranty: 0
                }}
                validationSchema={productSchema}
                onSubmit={async (values,actions)=>{
                    if(imageCropper){
                        try {
                            const canvasScaled = croppedImage.getImageScaledToCanvas().toDataURL("image/png");
                            setloading(true)
                            await dispatch(createProduct({...values, type: props.product, image: canvasScaled}))
                        }
                        catch (e) {
                            setimageError(true)
                        }
                        setloading(false)
                    }
                    else{
                        console.log('errah!')
                    }

                }}>
                {
                    (formikProps)=>(
                    <div>
                        <AppBar className={classes.appBar}>
                            <Toolbar>
                                <IconButton edge="start" color="inherit" onClick={props.onClick} aria-label="close">
                                    <CloseIcon/>
                                </IconButton>
                                <Typography variant="h6" className={classes.title}>
                                    {isloading?'Saving':'Add'} {props.title}
                                </Typography>
                                {isloading?
                                <Loader
                                    visible={true}
                                    type="Bars"
                                    color='white'
                                    height={50}
                                    width={50}
                                    timeout={3000} //3 secs
                                />:null}
                                {!isloading?<Button autoFocus color="inherit" onClick={formikProps.handleSubmit}>
                                    save
                                </Button>:null}
                            </Toolbar>
                        </AppBar>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={7} className={classes.gridLeft}>
                                <Box className={classes.imageBox}>
                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        {$imagePreview}
                                        <input
                                            accept="image/*"
                                            className={classes.input}
                                            onChange={(e) => onChangeHandler(e)}
                                            id="contained-button-file"
                                            multiple
                                            type="file"
                                        />
                                        <label htmlFor="contained-button-file" className={classes.imageButton}>
                                            <Button variant="contained" color="primary" component="span" className={classes.button}>
                                                Add Image
                                            </Button>
                                        </label>
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={5} className={classes.gridLeft}>
                                <Box className={classes.formBox}>
                                    <CssTextField
                                        id="outlined-basic"
                                        label="Product Title"
                                        variant="outlined"
                                        className={classes.titleInput}
                                        InputProps={{
                                            className: classes.inputText
                                        }}
                                        onChange={formikProps.handleChange('title')}
                                    />
                                    <CssTextField
                                        rows='5'
                                        multiline
                                        id="outlined-basic"
                                        label="Description"
                                        variant="outlined"
                                        className={classes.titleInput}
                                        InputProps={{
                                            className: classes.inputText
                                        }}
                                        onChange={formikProps.handleChange('description')}
                                    />
                                    <Typography id="discrete-slider-small-steps" gutterBottom className={classes.label}>
                                        Warranty (years)
                                    </Typography>
                                    <Slider
                                        className={classes.slider}
                                        defaultValue={0}
                                        // getAriaValueText={valuetext}
                                        aria-labelledby="discrete-slider-small-steps"
                                        step={1}
                                        marks
                                        min={0}
                                        max={15}
                                        valueLabelDisplay="auto"
                                        onChange={
                                            (event, value) =>
                                                formikProps.setFieldValue('warranty', value)
                                        }
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                    )
                }
            </Formik>
        </Dialog>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
    placeHolderImage: {
        width: 'auto',
        height: '100%'
    },
    imageDiv: {
        width: 350,
        height: 250,
    },
    gridLeft:{
        marginTop: '5%',
        [theme.breakpoints.down('sm')]: {
            margin: '0%',
        },
    },
    imageBox:{
        display: 'flex',
        justifyContent: 'center',
    },
    imageButton:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%',
        marginBottom: '2%'
    },
    appBar: {
        position: 'relative',
        backgroundColor: theme.palette.sec
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    titleInput: {
        width: '75%',
        margin: '2%'
    },
    inputText: {
        color: 'white',
    },
    formBox: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
        },
    },
    slider: {
        width: '75%',
        margin: '2%',
        color: theme.palette.pri
    },
    label: {
        width: '75%',
        margin: '2%',
    },
    button: {
        backgroundColor: theme.palette.sec,
        '&:hover':{
            backgroundColor: theme.palette.pri,
        }
    }
}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#c4b205',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: '#c4b205',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#c4b205',
            },
        },
    },
})(TextField);

export default CreateProductModal;
