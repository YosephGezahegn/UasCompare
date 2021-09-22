import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

const MainGrid = ({ univ }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (!univ) return null;
  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{univ.name}</ListItemIcon>
        <ListItemText />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {univ.studypath.map((i) => (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={Link}
              to={`/uas/${i.studyPathId}`}
              sx={{ pl: 9 }}
            >
              {i.name}
            </ListItemButton>
          </List>
        </Collapse>
      ))}
    </List>
  );
};

export default MainGrid;
