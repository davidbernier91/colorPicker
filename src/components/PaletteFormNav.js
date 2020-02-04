import React, { useContext } from "react";
import {NewPaletteContext} from '../contexts/NewPaletteContext'
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import Button from "@material-ui/core/Button";
import styles from "../styles/PaletteFormNavStyles";
import PaletteFormMeta from './PaletteFormMeta'

function PaletteFormNav(props) {
  const {hideForm, formShowing} = useContext(NewPaletteContext);
  const {classes, open, handleDrawerOpen, history} = props

  return (
       <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color='default'
          className={classNames(classes.appBar, {[classes.appBarShift]: open})}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, {[classes.hide]: open })}
            >
              <AddToPhotosIcon />
            </IconButton>
            <Typography
              variant='h6'
              color='inherit'
              noWrap
            >
              Create a new palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to='/'>
              <Button
                variant='contained'
                color='secondary'
                className={classes.button}
              >
                Go Back
              </Button>
            </Link>
            <Button
              variant='contained'
              color='primary'
              onClick={hideForm}
              className={classes.button}
            >
             Create Palette
            </Button>
          </div>
        </AppBar>
        {formShowing && ( <PaletteFormMeta history={history}/>)}
      </div>
  )
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);