import React, { useEffect } from "react";
import { SET_SELECTED_ITEM } from "../actions/index";


import axios from "axios";
import SearchComp from "../component/Search";


const SearchBar = () => {


  const fetchProgListSucess = () => {
    return (dispatch) => {
      axios.get("https://uasapi.herokuapp.com/uas").then((response) => {
        let res = response.data.map((i) => i.studypath.map((j) => j));
        let merged = [].concat.apply([], res);
        dispatch({
          type: SET_SELECTED_ITEM,
          payload: merged,
        });
      });
    };
  };

  useEffect(() => {
    fetchProgListSucess()
  }, []);

  return (
    <>
      <SearchComp />
    </>
  );
};

export default SearchBar;
