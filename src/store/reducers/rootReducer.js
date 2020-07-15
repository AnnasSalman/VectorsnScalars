import authReducer from "./authentication";
import productReducer from "./productReducer";
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer
