import {useState} from "react";

export function ColorPicker(props) {
    const [selectedColor, setColor] = useState(0)

    const onColorClick = (color, index) => {
       props.onPick(color);
       setColor(index);
    }

    return (
       <>
           <div>{
               props.colors.map((color, index) => {
                   return <div key={index} style={{backgroundColor: color}}
                               className={index === selectedColor ? "selected" : "scelta1"}
                               onClick={() => onColorClick(color, index)}/>
               })
           }</div>
       </>
    )
}