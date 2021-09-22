import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {SET_SELECTED_ITEM,SET_PROGRAM_ITEM} from '../actions/index'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";


const Search = () => {

    const dispatch = useDispatch()


     const state = useSelector(state => state.univeList.selectedItems)
     const prItem= useSelector(state => state.univeList.studyPrograms)
     if(!state) return undefined
    return (<Link to="/">
       <Autocomplete
        value={null}
        disable-clearable="false"
        id="combo-box-demo"
        options={state}
        getOptionLabel={(option) => option.name}
        onChange={(e,v) => {
            if(prItem.length === 3){
              console.log(e)
            return alert("max")
            }else
           dispatch( {
               type: SET_PROGRAM_ITEM,
               payload: v
           })
        }}


        style={{ width: 300 }}
        renderInput={(params) => (
  
          <TextField {...params} 
         
          label="Search" variant="outlined" />
        )}
      /></Link>
     
    )
}

export default Search
