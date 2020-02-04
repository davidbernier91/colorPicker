import React, { useContext} from "react";
import {NewPaletteContext} from '../contexts/NewPaletteContext'
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from '@material-ui/styles'
import styles from "../styles/DraggableColorBoxStyles";


const DraggableColorBox = SortableElement(props => {

  const { deleteColor} = useContext(NewPaletteContext);
  const {color, name, classes} = props

  const handleDelete =()=> deleteColor(name)

  return (
    <div className={classes.root} style={{backgroundColor: color}}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon}  onClick={handleDelete}/>
      </div>
    </div>
  )
})

export default withStyles(styles)(DraggableColorBox);