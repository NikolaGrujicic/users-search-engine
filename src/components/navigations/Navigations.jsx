import React from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import useStyles from '../../styles/muiStyles';

const Navigations = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopNav />
      <SideNav />
    </div>
  );
};

export default Navigations;
