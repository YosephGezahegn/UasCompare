import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { DELETE_PROGRAM_ITEM } from "../actions/index";

const Compare = () => {
  const dispatch = useDispatch();

  const deleteProgram = (id) => {
    console.log("delete action started" + id);
    return dispatch({
      type: DELETE_PROGRAM_ITEM,
      payload: id,
    });
  };

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const crItem = useSelector((state) => state.univeList.studyPrograms);

  return (
    <Grid container spacing={2}>
      {crItem.map((compItem) => (
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Item style={{ height: "100%", width: "100%" }}>
            <h2 class="card-title">{compItem.name}</h2>
            <p class="card-text">
              {" "}
              <strong>Language:</strong> {compItem.lang}
            </p>
            <p class="card-text">
              {" "}
              <strong>DegreeTitle: </strong>
              {compItem.degreeTitle}
            </p>
            <p class="card-text">
              {" "}
              <strong>Type of training:</strong> {compItem.typeOfTraining}
            </p>
            <p class="card-text">
              {" "}
              <strong>Extent: </strong>
              {compItem.extent} Credits
            </p>
            <p class="card-text">
              {" "}
              <strong>Number of Students:</strong> {compItem.noOfStudents}
            </p>
            <p class="card-text">
              {" "}
              <strong>Tution Fee: </strong>
              {compItem.tuitionFee} Euros
            </p>
            <p class="card-text">
              {" "}
              <strong>Duration:</strong> {compItem.duration} Years
            </p>
            <p class="card-text">
              {" "}
              <strong>Application Starts: </strong>
              {compItem.applicationStart}
            </p>
            <p class="card-text">
              <strong> Application Ends: </strong>
              {compItem.applicationEnd}
            </p>
            <button onClick={() => deleteProgram(compItem.studyPathId)}>
              Delete
            </button>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};

export default Compare;
