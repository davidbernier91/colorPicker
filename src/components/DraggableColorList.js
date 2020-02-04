import React, { useContext} from "react";
import {NewPaletteContext} from '../contexts/NewPaletteContext'
import DraggableColorBox from "./DraggableColorBox";
import { SortableContainer } from "react-sortable-hoc";


const DraggableColorList = SortableContainer(() => {
  const { newPalette} = useContext(NewPaletteContext);

  return (
        <div style={{ height: "100%" }}>
          {newPalette.map((color, i)=>(
            <DraggableColorBox
              index={i}
              key={color.name}
              color={color.color}
              name={color.name}
            />
          ))}
        </div>
  );
});
export default DraggableColorList;


