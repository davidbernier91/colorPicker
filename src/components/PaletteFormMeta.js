import React, { useContext } from "react";
import {SeedContext} from '../contexts/SeedContext'
import {NewPaletteContext} from '../contexts/NewPaletteContext'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from '@material-ui/core/TextField'
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles/PaletteFormMetaStyles";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

function PaletteFormMeta(props) {

  const {addPalette } = useContext(SeedContext);

  const {history, classes} = props

  const { newPalette, newPaletteName, hideForm,
          formErrorMessage, handlePaletteNameChange,
          stage, showEmojiPicker
        } = useContext(NewPaletteContext);

  const savePalette=(emoji)=>{
    const finalPalette = {
       paletteName: newPaletteName.name,
       emoji: emoji.native,
       id: newPaletteName.name.toLowerCase().replace( / /g,"-"),
       colors: newPalette
      }
      addPalette(finalPalette)
      history.push('/')
  }

  return (
          <div>
            {console.log(newPaletteName)}
            <Dialog
             open={stage === "emoji"}
             onClose={hideForm}
            >
              <DialogTitle id='form-dialog-title'>
                Choose a Palette Emoji
              </DialogTitle>
              <Picker
               title='Pick a Palette Emoji'
               onSelect={savePalette}
              />
            </Dialog>
            <Dialog
              open={stage === "form"}
              aria-labelledby='form-dialog-title'
              onClose={hideForm}
            >
              <DialogTitle id='form-dialog-title'>
                Choose a Palette Name
              </DialogTitle>
              {/* <ValidatorForm onSubmit={showEmojiPicker}> */}
                <DialogContent>
                  <DialogContentText>
                    Please enter a name for your new beautiful palette. Make sure
                    it's unique!
                  </DialogContentText>
                <TextField
                  value={newPaletteName.name}
                  name='name'
                  label={"Palette Name"}
                  variant="filled"
                  margin='normal'
                  fullWidth
                  onChange={handlePaletteNameChange}
                />
               <h2 className={classes.errorMessage}> {formErrorMessage ? formErrorMessage: null}</h2>
                </DialogContent>
                <DialogActions>
                  <Button onClick={hideForm} color='primary'>
                    Cancel
                  </Button>
                  <Button
                    variant='contained'
                    color='primary'
                    type='submit'
                    onClick={showEmojiPicker}
                  >
                    Save Palette
                  </Button>
                </DialogActions>
              {/* </ValidatorForm> */}
            </Dialog>
          </div>
  )
}
export default  withStyles(styles)(PaletteFormMeta)



