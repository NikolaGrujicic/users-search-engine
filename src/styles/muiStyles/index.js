import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: { display: 'flex' },
  appBar: { zIndex: theme.zIndex.drawer + 1 },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: { width: 240 },
  drawerContainer: { overflow: 'auto' },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default useStyles;
