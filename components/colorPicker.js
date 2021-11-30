import {useState} from "react";

export function ColorPicker(props) {
    const [selectedColor, setColor] = useState(props.initialValue)
    const onColorClick = (color) => {
       props.onPick(color);
       setColor(color);
    }

    return (
       <>
           <div>{
               props.colors.map((color) => {
                   return <div key={color} style={{backgroundColor: color}}
                               className={color === selectedColor ? "selected" : "scelta1"}
                               onClick={() => onColorClick(color)}/>
               })
           }</div>
       </>
    )
}