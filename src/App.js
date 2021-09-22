import React, {useEffect,useState}  from 'react'
import {useDispatch} from 'react-redux'
import axios from "axios";
import {FETCH_UNIV_SUCESS} from './actions/index'
import Drawer from './component/Drawer'
import { createTheme,ThemeProvider  } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { StylesProvider } from '@material-ui/styles';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";
import { dark } from '@mui/material/styles/createPalette';
import "./App.css";
//  
const App = () => {
  const dispatch = useDispatch()
 
 
  
  const fetchUnivListSucess = () => {
     return dispatch => {
         axios.get(  "https://uasapi.herokuapp.com/uas")
          .then((response) => {
            console.log(response.data)
            
         dispatch( {
             type: FETCH_UNIV_SUCESS,
             payload: response.data
         })
       })
       
 }   
 };
 const theme=createTheme({
   palette:{
     type:"dark",
   },
 })

 useEffect(() => {
     dispatch(fetchUnivListSucess())
 })
  return ( <StylesProvider injectFirst>
    <Paper>
    <Router>
  <Drawer />
  </Router>
  </Paper>
  </StylesProvider>
   
      // <MainGrid /> 

  
      
  )
}

export default App
