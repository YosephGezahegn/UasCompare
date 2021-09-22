 <div>
      {item.name}
      <ul>
        {item.studypath.map((sub) => (
          <li>
             {sub.name} 
             {sub.description} 
             {sub.lang} 
             {sub.degreeTitle} 
             {sub.extent} 
             {sub.description} 
          </li>
        ))}
      </ul>
    </div>

import axios from "axios";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import MainGrid from './Grid'
import './App.css'
const baseURL = "https://uasapi.herokuapp.com/uas";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
export default function App() {
    const classes = useStyles();
  const [post, setPost] = React.useState(null);
  const [selectedItems, setSelectedItems] = React.useState([]);

  const addToCompare = (item) => {
     if(selectedItems.length === 2){
         return alert("max")
     }else
    setSelectedItems((selectedItems) => [...selectedItems, item])
    console.log(selectedItems.length)
  };
  
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(selectedItems);
    });
  }, []);

  if (!post) return null;

  return post.map((item) => (
      <div className="header">
      <MainGrid />
          <div className={classes.root}>
          <Grid container  spacing={3}>
          <Grid itemjustifyContent="center"  xs={12}>
      <Autocomplete
        id=""
        options={item.studypath}
        getOptionLabel={(option) => option.name}
        onChange={(e,v) => addToCompare(v)}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} 
         
          label="Combo box" variant="outlined" />
        )}
      /></Grid>
     
      
     
     {selectedItems.map((selItem)=> <Grid item xs={6}>
       <Paper>
           <Card key={item.id}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {selItem.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         {selItem.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary" >
        Remove
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </Card></Paper>
     </Grid>
     
     )}
  
     </Grid>
     </div>
      </div>
    
  ));
}
   <h5 class="card-title">{compItem.name}</h5>
    <p class="card-text"> Language: { compItem.lang}</p>
<p class="card-text"> { compItem.degreeTitle}</p>
<p class="card-text"> { compItem.typeOfTraining}</p>
<p class="card-text"> { compItem.extent}</p>
<p class="card-text"> { compItem.noOfStudents}</p>
<p class="card-text"> { compItem.tuitionFee}</p>
<p class="card-text"> { compItem.duration}</p>
<p class="card-text"> { compItem.applicationStart}</p>
<p class="card-text"> { compItem.applicationEnd }</p>
 { compItem.lang}
 { compItem.degreeTitle}
 { compItem.typeOfTraining}
 { compItem.extent}
 { compItem.noOfStudents}
 { compItem.tuitionFee}
 { compItem.duration}
 { compItem.applicationStart}
 { compItem.applicationEnd }


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import ListItemButton from "@mui/material/ListItemButton";

import UniList from '../container/univList'
import SearchBar from '../container/autoComplete'
import Compare from '../component/compare'
import UnivList from '../container/univList';

const drawerWidth = 320;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  

  const handleClick = () => {
    setOpen(!open);
  };


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const state = useSelector(state => state.univeList.univList)

  React.useEffect(() => {
   console.log(state.map((i)=>i))
  }, )

  const drawer = (
    <div>
      <SearchBar />
      <Divider />
      <UnivList />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        paddingBottom="100px"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Compare />
      </Box>
    </Box>
  );
}

 const details = useSelector(state => state.univeList.selectedItems.find(item => item.studyPathId === id))

 
ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
