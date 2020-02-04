import React, {useContext} from "react";
import {NewPaletteContext} from '../contexts/NewPaletteContext'
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import styles from "../styles/NewPaletteFormStyles";
import DraggableColorList from "./DraggableColorList";


function NewPaletteForm(props) {

  const { clearPalette, openStatus,handleDrawerClick,
          paletteIsFull, onSortEnd, addRandomColor} = useContext(NewPaletteContext);

  const {classes, history} = props

  return (
    <div className={classes.root}>
    <PaletteFormNav
      open={openStatus}
      handleDrawerOpen={handleDrawerClick}
      history={history}
    />
    <Drawer
      className={classes.drawer}
      variant='persistent'
      anchor='left'
      open={openStatus}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClick}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <div className={classes.container}>
        <Typography variant='h4' gutterBottom>
          Design Your Palette
        </Typography>
        <div className={classes.buttons}>
          <Button
            variant='contained'
            color='secondary'
            onClick={clearPalette}
            className={classes.button}
          >
            Clear Palette
          </Button>
          <Button
            variant='contained'
            className={classes.button}
            color='primary'
            onClick={addRandomColor}
            disabled={paletteIsFull}
          >
            Random Color
          </Button>
        </div>
          {/* <ColorPickerFormProvider> */}
            <ColorPickerForm
              paletteIsFull={paletteIsFull}
            />
          {/* </ColorPickerFormProvider> */}
      </div>
    </Drawer>
    <main
      className={classNames(classes.content, {
        [classes.contentShift]: openStatus
      })}
    >
      <div className={classes.drawerHeader} />
      <DraggableColorList
        axis='xy'
        onSortEnd={onSortEnd}
        distance={20}
      />
    </main>
  </div>
  )
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);