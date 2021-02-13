import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SideNavBar from '../sidebar';
import useStyles from '../../../styles/muiStyles';

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <SideNavBar />
    </div>
  );
};

export default NavigationBar;
