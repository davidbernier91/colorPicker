import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/ColorPickerFormStyles";



function ColorPickerForm(props) {
  const {classes, paletteIsFull, savePalette, colors, addNewColor} = props

  const [currentColor, setCurrentColor] = useState({color:""})
  const [currentName, setCurrentName] = useState({name:""})

  const [errorMessage, setErrorMessage] = useState("")

  const updateCurrentColor=(pickerColor)=> setCurrentColor({color:pickerColor.hex})

  const handleChange=(event)=>{
    setCurrentName({[event.target.name]:event.target.value})
  }

  const handleNewColorClick=() => {
    const newPalette = [...colors, {...currentName, ...currentColor}]
    addNewColor(newPalette)
  }



  const validtionMethod=()=>{
    if(!currentColor.color ){
      return setErrorMessage("Error: Please pick a color!")
    }
    if(colors.find(({color}) => color.toLowerCase() === currentColor.color.toLowerCase())){
      return setErrorMessage("Error: Color must be unique!")
    }
    if(!currentName.name){
      return setErrorMessage("Error: Name field can not be empty!")
    }
    if(colors.find(({name}) => name.toLowerCase() === currentName.name.toLowerCase())){
      setCurrentName({name:""})
      return setErrorMessage("Error: Name must be unique!")
    }
    setCurrentName({name:""})
    return handleNewColorClick()
  }

  const handleSubmit=(newPaletteName)=>{

    const newName = newPaletteName
    const {idValue, keyValue} = newName.toLowerCase().replace( / /g,"-")
    const newPalette = {
      paletteName: newName,
      id:idValue,
      key: keyValue,
      emoji: "",
      colors: colors
    }
    savePalette(newPalette)
    props.history.push('/')
  }

  return (
        <div>
            {console.log(currentName, currentColor)}
            <ChromePicker
                color={currentColor.color ? currentColor.color : "#41827A"}
                onChangeComplete={updateCurrentColor}
                className={classes.picker}
            />
            <ValidatorForm instantValidate={false} >
            <TextValidator
                value={currentName.name}
                className={classes.colorNameInput}
                placeholder='Color Name'
                name='name'
                variant='filled'
                margin='normal'
                onChange={handleChange}
            />
            <Button
                onClick={validtionMethod}
                variant='contained'
                type='submit'
                color='primary'
                disabled={paletteIsFull}
                className={classes.addColor}
                style={{
                backgroundColor: paletteIsFull ? "grey" : currentColor.color
                }}
            >
                {paletteIsFull ? "Palette Full" : "Add Color"}
            </Button>
            <h1 className={classes.errorMessage}>{errorMessage}</h1>
            </ValidatorForm>
        </div>
  )
}
export default withStyles(styles)(ColorPickerForm);