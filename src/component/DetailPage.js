import React from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const DetailPage = () => {
  const { id } = useParams();

  const inte = parseInt(id);
  const details = useSelector((state) =>
    state.univeList.selectedItems.find((item) => item.studyPathId === inte)
  );
  console.log(details);

  if (!details) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <div style={{ paddingTop: "40px" }}>
      <Grid
        container
        spacing={2}
        style={{ boxShadow: "-7px -4px 23px 0px rgba(0,0,0,0.75)" }}
      >
        <Grid lg={3}>
          <Typography
            gutterBottom
            variant="h4"
            strong
            component="div"
            style={{ padding: "40px" }}
          >
            {details.name}
            <Divider orientation="horizontal" flexItem />
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ paddingTop: "15px", paddingRight: "15px" }}
            >
              {details.typeOfTraining}
            </Typography>
          </Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid lg={8}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ABOUT COURSE
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {details.description}
            </Typography>
            <Divider orientation="horizontal" flexItem />
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ paddingTop: "15px", paddingRight: "15px" }}
            >
              DEGREE EXTENT
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ paddingTop: "15px", paddingRight: "15px" }}
            >
              {details.extent}
            </Typography>
            <Divider orientation="horizontal" flexItem />
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ paddingTop: "15px", paddingRight: "15px" }}
            >
              ACCEPTED NUMBER OF STUDENTS
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ paddingTop: "15px", paddingRight: "15px" }}
            >
              {details.noOfStudents}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailPage;
