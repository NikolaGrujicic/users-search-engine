import React from 'react';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SettingsIcon from '@material-ui/icons/Settings';

const SideNavBar = () => (
  <div>
    <Drawer variant="permanent">
      <Toolbar />
      <div className="drawerContainer">
        <List>
          <ListItem button>
            <ListItemIcon><PeopleAltIcon /></ListItemIcon>
            <ListItemText className="customer-text">Customers</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItem>
        </List>
      </div>
    </Drawer>
  </div>
);

export default SideNavBar;
