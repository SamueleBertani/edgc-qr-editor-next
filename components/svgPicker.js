import React, {useEffect, useState} from "react";

export function SvgPicker(props){
    const [image, setImage] = useState(props.initialValue)
    console.log(props.initialValue)

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