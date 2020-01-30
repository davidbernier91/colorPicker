import React, {useState} from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import arrayMove from 'array-move'
import styles from "../styles/NewPaletteFormStyles";
import seedColors from"../seeds/seedColors";
import { ChromePicker } from "react-color";
import DraggableColorList from "./DraggableColorList";


function NewPaletteForm(props) {
  const {classes, palettes, savePalette, history} = props
  const [colors, setColors] = useState(seedColors[0].colors)
  const [openStatus, setOpenStatus] = useState(true)
  const paletteIsFull = colors.length >= 20;

  const handleDrawerClick = () => setOpenStatus(!openStatus)

   const addNewColor=(newColor)=>{
     console.log(newColor)
    setColors([...newColor])
  }

  const clearColors=()=> setColors([])



  const deleteColor=(colorName)=>{
    setColors(colors.filter( color => color.name !== colorName))
  }


  const onSortEnd =({ oldIndex, newIndex })=>{
    setColors(arrayMove(colors, oldIndex, newIndex))
  }

  const addRandomColor=()=> {
    const allColors = palettes.map(p => p.colors).flat();
    let rand;
    let randomColor;
    let isDuplicateColor = true;
    while (isDuplicateColor) {
      rand = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[rand];
      isDuplicateColor = colors.some(
        color => color.name === randomColor.name
      );
    }
    setColors([...colors, randomColor] );
  }


  return (
    <div className={classes.root}>
    <PaletteFormNav
      open={openStatus}
      palettes={palettes}
      handleDrawerOpen={handleDrawerClick}
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
            onClick={clearColors}
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
        <ColorPickerForm
          paletteIsFull={paletteIsFull}
          addNewColor={addNewColor}
          colors={colors}
        />
      </div>
    </Drawer>
    <main
      className={classNames(classes.content, {
        [classes.contentShift]: openStatus
      })}
    >
      <div className={classes.drawerHeader} />
      <DraggableColorList
        colors={colors}
        deleteColor={deleteColor}
        axis='xy'
        onSortEnd={onSortEnd}
        distance={20}
      />
    </main>
  </div>
  )
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);