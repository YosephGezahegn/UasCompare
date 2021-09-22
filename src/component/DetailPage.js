import React, {useEffect}  from 'react'
import {Link, useParams} from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { CardActionArea } from '@mui/material';

const DetailPage = () => {
    const {id}=useParams()
    
    const inte=parseInt(id)
const details = useSelector(state => state.univeList.selectedItems.find(item => item.studyPathId === inte))
console.log(details)

if (!details) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
    return (
        <div style={{paddingTop:"40px"}}>
            {/* <h1>{details.name}</h1>
            <p class="card-text"> Language: { details.description}</p>

            <p class="card-text"> Language: { details.lang}</p>
<p class="card-text"> { details.degreeTitle}</p>
<p class="card-text"> { details.typeOfTraining}</p>
<p class="card-text"> { details.extent}</p>
<p class="card-text"> { details.noOfStudents}</p>
<p class="card-text"> { details.tuitionFee}</p>
<p class="card-text"> { details.duration}</p>
<p class="card-text"> { details.applicationStart}</p>
<p class="card-text"> { details.applicationEnd }</p> */}

<Grid container spacing={2} style={{boxShadow: "-7px -4px 23px 0px rgba(0,0,0,0.75)"}}>
  <Grid  lg={3}>
  <Typography gutterBottom variant="h4" strong component="div" style={{padding : "40px"}}>
  {details.name}
  <Divider orientation="horizontal" flexItem />
  <Typography gutterBottom variant="h6" component="div" style={{paddingTop : "15px",paddingRight : "15px"}}>
  { details.typeOfTraining}
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
          { details.description}
          </Typography>
          <Divider orientation="horizontal" flexItem />
  <Typography gutterBottom variant="h6" component="div" style={{paddingTop : "15px",paddingRight : "15px"}}>
  DEGREE EXTENT 
          </Typography>
          <Typography gutterBottom variant="h6" component="div" style={{paddingTop : "15px",paddingRight : "15px"}}>
          { details.extent}
          </Typography>
          <Divider orientation="horizontal" flexItem />
  <Typography gutterBottom variant="h6" component="div" style={{paddingTop : "15px",paddingRight : "15px"}}>
  ACCEPTED NUMBER OF STUDENTS 
          </Typography>
          <Typography gutterBottom variant="h6" component="div" style={{paddingTop : "15px",paddingRight : "15px"}}>
{ details.noOfStudents}
          </Typography>
        </CardContent>
  </Grid>

    </Grid></div>
        
    )
}

export default DetailPage
