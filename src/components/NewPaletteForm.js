import React, { useState, useEffect } from "react";
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
import DraggableColorBox from "./DraggableColorBox";
import { arrayMove } from "react-sortable-hoc";
import styles from "../styles/NewPaletteFormStyles";
import seedColors from"../seeds/seedColors";
import { ChromePicker } from "react-color";


function NewPaletteForm(props) {
  const {classes, palettes} = props
  const [colors, setColors] = useState(seedColors[0].colors)
  const [openStatus, setOpenStatus] = useState(true)
  const [currentColor, setCurrentColor] = useState({color:""})
  const [currentName, setCurrentName] = useState({name:""})
  const [errorMessage, setErrorMessage] = useState("")

  const updateCurrentColorHex=(newColor)=> {
    setCurrentColor({color:newColor.hex})
  }

  const updateCurrentName=(event)=>{
    setCurrentName({name:event.target.value})
  }

  const maxColors = 20
  const paletteIsFull = colors.length >= maxColors;
  // const clearColors = ()=> setColors([])
  const handleDrawerClick = () => setOpenStatus(!openStatus)

  const addNewColorClick = () => {
    setColors([...colors, {...currentName, ...currentColor}])
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
   return addNewColorClick()
}

  return (
    <div className={classes.root}>
          <PaletteFormNav
            open={openStatus}
            palettes={palettes}
            // handleSubmit={this.handleSubmit}
            handleDrawerOpen={handleDrawerClick}
          />
          <Drawer
            className={classes.drawer}
            variant='persistent'
            anchor='left'
            open={openStatus}
            classes={{paper: classes.drawerPaper}}>
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
                  // onClick={clearColors}
                  className={classes.button}>
                  Clear Palette
                </Button>
                <Button
                  variant='contained'
                  className={classes.button}
                  color='primary'
                  // onClick={this.addRandomColor}
                  // disabled={paletteIsFull}
                  >
                  Random Color
                </Button>
              </div>
                <ChromePicker
                  color={currentColor.color}
                  onChange={updateCurrentColorHex}
               />
          <ValidatorForm
            // onSubmit={handleSubmit}
            // ref='form'
            instantValidate={false}>
          <TextValidator
            value={currentName.name}
            className={classes.colorNameInput}
            placeholder='Color Name'
            name='newColorName'
            variant='filled'
            margin='normal'
            onChange={updateCurrentName}
          />
          </ValidatorForm>
          {<p className={classes.errorMessage} >{errorMessage}</p>}
          <Button
             variant='contained'
             type='submit'
             color='primary'
             disabled={paletteIsFull}
             className={classes.addColor}
             onClick={validtionMethod}
             style={{ backgroundColor: paletteIsFull ? "grey" : currentColor.color }}>
             {paletteIsFull ? "Palette Full" : "Add Color"}
           </Button>
            </div>
          </Drawer>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: openStatus
            })}
          >
          <div className={classes.drawerHeader} />
                {colors.map((color)=>(<DraggableColorBox color={color}/>))}
        </main>
     </div>
  )
}
export default withStyles(styles, { withTheme: true })(NewPaletteForm);












// import React, { useState } from "react";
// import classNames from "classnames";
// import { withStyles } from "@material-ui/core/styles";
// import PaletteFormNav from "./PaletteFormNav";
// import ColorPickerForm from "./ColorPickerForm";
// import Drawer from "@material-ui/core/Drawer";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import Button from "@material-ui/core/Button";
// import DraggableColorBox from "./DraggableColorBox";
// import { arrayMove } from "react-sortable-hoc";
// import styles from "../styles/NewPaletteFormStyles";
// import seedColors from"../seeds/seedColors";
// import { ChromePicker } from "react-color";


// function NewPaletteForm(props) {
//   const {classes, palettes} = props

//   const [colors, setColors] = useState(seedColors[0].colors)
//   const [openStatus, setOpenStatus] = useState(true)
//   const [currentColor, setCurrentColor] = useState({})

//   const updateCurrentColorHex=(newColor)=> {
//     console.log(newColor)
//     setCurrentColor({color:newColor.hex})
//   }
//   // const updateCurrentColorName=(event)=>{
//   //   setCurrentColor({...currentColor, [event.target.name]:event.target.value})
//   // }


//   // const [newColor, setNewColor] = useState({})

//   const maxColors = 20
//   const paletteIsFull = colors.length >= maxColors;
//   // const clearColors = ()=> setColors([])
//   const handleNewColor = (event)=>{
//     console.log(event.target.name)
//   }

 

//   const handleDrawerClick = () => setOpenStatus(!openStatus)
//   const addNewColorClick = () => setColors([...colors, currentColor])

 


//   return (
//     <div className={classes.root}>
//       {console.log(seedColors)}
//       {console.log(currentColor)}
//       {console.log(colors)}
//           <PaletteFormNav
//             open={openStatus}
//             palettes={palettes}
//             // handleSubmit={this.handleSubmit}
//             handleDrawerOpen={handleDrawerClick}
//           />
//           <Drawer
//             className={classes.drawer}
//             variant='persistent'
//             anchor='left'
//             open={openStatus}
//             classes={{
//               paper: classes.drawerPaper
//             }}
//           >
//             <div className={classes.drawerHeader}>
//               <IconButton onClick={handleDrawerClick}>
//                 <ChevronLeftIcon />
//               </IconButton>
//             </div>
//             <Divider />
//             <div className={classes.container}>
//               <Typography variant='h4' gutterBottom>
//                 Design Your Palette
//               </Typography>
//               <div className={classes.buttons}>
//                 <Button
//                   variant='contained'
//                   color='secondary'
//                   // onClick={clearColors}
//                   className={classes.button}
//                 >
//                   Clear Palette
//                 </Button>
//                 <Button
//                   variant='contained'
//                   className={classes.button}
//                   color='primary'
//                   // onClick={this.addRandomColor}
//                   // disabled={paletteIsFull}
//                 >
//                   Random Color
//                 </Button>
//               </div>
//                 <ChromePicker
//                   color={currentColor.color}
//                   onChange={updateCurrentColorHex}

//                />
//           <Button
//              variant='contained'
//              type='submit'
//              color='primary'
//              disabled={paletteIsFull}
//              className={classes.addColor}
//              onClick={addNewColorClick}
//              style={{
//                backgroundColor: paletteIsFull ? "grey" : {currentColor}
//              }}
//            >
//              {paletteIsFull ? "Palette Full" : "Add Color"}
//            </Button>
//               {/* <ColorPickerForm
//                 paletteIsFull={paletteIsFull}
//                 addNewColor={addNewColorClick}
//                 colors={colors}
//               /> */}
//             </div>
//           </Drawer>
//           <main
//             className={classNames(classes.content, {
//               [classes.contentShift]: openStatus
//             })}
//           >
//           <div className={classes.drawerHeader} />
          
//             {/* <DraggableColorList
//               colors={colors}
//               // removeColor={this.removeColor}
//               axis='xy'
//               // onSortEnd={this.onSortEnd}
//               distance={20} */}
//               <ul>
//                 { colors.map((color)=>(<DraggableColorBox color={color}/>))}
//               </ul>

//         </main>
//      </div>
//   )
// }
// export default withStyles(styles, { withTheme: true })(NewPaletteForm);
