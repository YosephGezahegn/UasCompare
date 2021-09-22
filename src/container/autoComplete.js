import React, {useEffect} from 'react'
import {SET_SELECTED_ITEM,SET_PROGRAM_ITEM} from '../actions/index'
import {useSelector, useDispatch} from 'react-redux'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";
import SearchComp from '../component/Search'
const SearchBar = () => {
    
    const dispatch = useDispatch()
  
  const fetchProgListSucess = () => {
     return dispatch => {
         axios.get(  "https://uasapi.herokuapp.com/uas")
          .then((response) => {
            let res=(response.data.map((i)=>i.studypath.map((j)=>j)))
            let merged = [].concat.apply([], res);
         dispatch( {
             type: SET_SELECTED_ITEM,
             payload: merged
         })
       })
   
 }   
 };


 useEffect(() => {
    dispatch(fetchProgListSucess())
   
 }, [])
  
    
      
   

    return <>
            <SearchComp />
    </>
}

export default SearchBar
