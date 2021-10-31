import React from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
  } from "@material-ui/core";
  
  const useStyles = makeStyles((theme) => ({
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    }
}));

const Header = (props) => {

  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h5" className={classes.logo}>
          Covid Updates Based on Country
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;