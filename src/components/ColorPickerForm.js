import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/ColorPickerFormStyles";
import { NewPaletteContext } from "../contexts/NewPaletteContext";
import TextField from '@material-ui/core/TextField'

function ColorPickerForm(props) {
  const { formValues, handleColorNameChange, handleColorChange,
          errorMessage, validtionMethod
        } = useContext(NewPaletteContext)

  const {classes, paletteIsFull} = props

  return (
        <div>

            <ChromePicker
                color={formValues.color}
                onChangeComplete={handleColorChange}
                className={classes.picker}
            />
            <TextField
                value={formValues.name}
                className={classes.colorNameInput}
                placeholder='Color Name'
                name='name'
                variant='filled'
                margin='normal'
                onChange={handleColorNameChange}
            />
            <Button
                onClick={validtionMethod}
                variant='contained'
                type='submit'
                color='primary'
                disabled={paletteIsFull}
                className={classes.addColor}
                style={{
                backgroundColor: paletteIsFull ? "grey" : formValues.color
                }}
            >
                {paletteIsFull ? "Palette Full" : "Add Color"}
            </Button>
            <h1 className={classes.errorMessage}>{errorMessage}</h1>
        </div>
  )
}
export default withStyles(styles)(ColorPickerForm);