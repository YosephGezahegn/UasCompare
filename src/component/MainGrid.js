import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import UniList from '../container/univList'
import SearchBar from '../container/autoComplete'

import Compare from '../component/compare'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const MainGrid = () => {


    return (
      <Grid container>
      <Grid item xs={12} sm={12} md={12}  lg={12} xl={12}>

        <Item 
        style={{height:75, width:"100%", }}>
          <SearchBar />
        </Item>
      </Grid>
      <Grid xs={12} sm={12} md={4} lg={3} xl={3}>
        <Paper style={{height:"100%", width:"100%",}}>
        <UniList />
        </Paper>
      </Grid>
      <Grid  xs={12} sm={12} md={8} lg={9} xl={9}>
        <Item style={{height:"100%", width:"100%", }}>
<Compare />
        </Item>
      </Grid>
   
    </Grid>
       
    )
}

export default MainGrid
