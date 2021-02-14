import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import useStyles from '../../../styles/muiStyles';

const TopNav = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Clipped drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
