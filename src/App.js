import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { FETCH_UNIV_SUCESS } from "./actions/index";
import Drawer from "./component/Drawer";
import Paper from "@mui/material/Paper";
import { StylesProvider } from "@material-ui/styles";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
//
const App = () => {
  const dispatch = useDispatch();

  const fetchUnivListSucess = () => {
    return (dispatch) => {
      axios.get("https://uasapi.herokuapp.com/uas").then((response) => {
        console.log(response.data);

        dispatch({
          type: FETCH_UNIV_SUCESS,
          payload: response.data,
        });
      });
    };
  };

  useEffect(() => {
    dispatch(fetchUnivListSucess());
  });
  return (
    <StylesProvider injectFirst>
      <Paper>
        <Router>
          <Drawer />
        </Router>
      </Paper>
    </StylesProvider>
  );
};

export default App;
