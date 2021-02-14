import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import useStyles from '../../styles/muiStyles';

const Navigations = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
    </div>
  );
};

export default Navigations;
