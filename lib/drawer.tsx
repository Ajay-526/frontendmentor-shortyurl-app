import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Button
  } from "@mui/material";
  import React, { useState } from "react";
  import MenuIcon from "@mui/icons-material/Menu";
  
  function DrawerComp() {
    const [isOpen, setisOpen] = useState(false);
    return (
      <>
        <Drawer open={isOpen} onClose={() => setisOpen(false)}>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Something 1</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Something 2</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Something 3</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <hr />
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>Something 4</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Drawer>
        <Button sx={{ml:'auto'}} onClick={()=> setisOpen(!isOpen)}>
          <MenuIcon sx={{color:"black"}} />
        </Button>
      </>
    );
  }
  
  export default DrawerComp;
  