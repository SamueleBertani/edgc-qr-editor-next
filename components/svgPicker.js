import React, {useState} from "react";

export function SvgPicker(props){
    const [image, setImage] = useState("square")
    const onSvgClick = (name) => {
        setImage(name);
        props.onPick(name)
    }

    return(
        <>
            <div>
                {props.images.map((im) =>
                    <div key={im.name} style={{backgroundImage:`url(${im.value})`}}
                         className={im.name === image ? "CornerSquareSelected" : "CornerSquare"}
                         onClick={() => onSvgClick(im.name)}
                    />
                )}
            </div>
        </>
    )
}