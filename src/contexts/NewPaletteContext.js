import React, {createContext, useState} from 'react'
import seedColors from '../seeds/seedColors'
import arrayMove from 'array-move'

export const NewPaletteContext = createContext()

export const NewPaletteProvider =(props)=>{
    const [seeds] = useState(seedColors )
    const [newPalette, setNewPalette] = useState(seeds[0].colors)
    // const [finalPaletteForm, setFinalPaletteForm] = useState({})
    const [newPaletteName, setNewPaletteName] = useState({paletteName:""})
    const [openStatus, setOpenStatus] = useState(true)
    const [formValues, setFormValues] = useState({name:"", color:"#41827A"})
    const [errorMessage, setErrorMessage] = useState("")
    const [formErrorMessage, setFormErrorMessage] = useState("")
    const [formShowing, setFormShowing] = useState(false)
    const [stage, setStage] = useState("form")
    const paletteIsFull = newPalette.length >= 20;

    const handleDrawerClick = () => setOpenStatus(!openStatus)
    const errorReset =()=> setTimeout(()=>setErrorMessage(""), 3000)
    const errorFormReset =()=> setTimeout(()=>setFormErrorMessage(""), 3000)
    const clearPalette = ()=> setNewPalette([])
    const hideForm =()=> setFormShowing(!formShowing)


    const deleteColor=(name)=>{
        setNewPalette(newPalette.filter( color => color.name !== name))
    }

    const onSortEnd =({ oldIndex, newIndex })=>{
        setNewPalette(arrayMove(newPalette, oldIndex, newIndex))
      }

      const handleColorNameChange=(event)=>{
        setFormValues({...formValues, [event.target.name]:event.target.value})
    }
      const handlePaletteNameChange=(event)=>{
        setNewPaletteName({[event.target.name]:event.target.value})
    }

    const handleColorChange=(pickerColor)=>{
        setFormValues({...formValues, color:pickerColor.hex })
    }


    const showEmojiPicker=()=>{
      if(!newPaletteName.name){
        errorFormReset()
        return setFormErrorMessage("Palette must have a name!")
      }
      if (
          seeds.find(({paletteName})=> paletteName.toLowerCase()  === newPaletteName.name.toLowerCase() ) 
      ){
        errorFormReset()
        return setFormErrorMessage("Palette must have a unique name!")
      }
    setStage("emoji")
    }

    const addRandomColor=()=> {
      const allColors = seeds.map(p => p.colors).flat();
        let rand;
        let randomColor;
        let isDuplicateColor = true;
        while (isDuplicateColor) {
          rand = Math.floor(Math.random() * allColors.length);
          randomColor = allColors[rand];
          isDuplicateColor = newPalette.some(
            color => color.name === randomColor.name
          );
        }
        setNewPalette([...newPalette, randomColor] );
    }


    const validtionMethod=()=>{
        if(newPalette.find(({color}) => color.toLowerCase() === formValues.color.toLowerCase())){
          errorReset()
          return setErrorMessage("Color must be unique!")
        }
        if(!formValues.name){
          errorReset()
          return setErrorMessage("Name field can not be empty!")
        }
        if(newPalette.find(({name}) => name.toLowerCase() === formValues.name.toLowerCase())){
          setFormValues({...formValues, name:""})
          errorReset()
          return setErrorMessage("Name must be unique!")
        }
        setNewPalette([...newPalette, formValues] )
        setFormValues({...formValues, name:""})
      }

    return(
        <NewPaletteContext.Provider
        value={{
                newPalette, deleteColor, clearPalette, validtionMethod,
                openStatus, handleDrawerClick, paletteIsFull, onSortEnd,
                addRandomColor, handleColorNameChange, handleColorChange,
                errorMessage, setErrorMessage, formValues, handlePaletteNameChange,
                newPaletteName, setNewPaletteName, errorReset, formShowing, hideForm,
                formErrorMessage, setFormErrorMessage, stage, showEmojiPicker
                
            }}
        >
            {props.children}
        </NewPaletteContext.Provider>
    )

}