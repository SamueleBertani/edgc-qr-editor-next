import React, {useState} from "react";

export function FramePicker(props){
    const [image, setImage] = useState(props.initialValue)
    const onFrameClick = (name) => {
        setImage(name);
        props.onPick(name)
    }

    return(
        <>
            <div>
                {props.images.map((im) =>
                    <div key={im.name} style={{backgroundImage:`url(${im.value})`}}
                         className={im.name === image ? "CornerSquareSelected" : "CornerSquare"}
                         onClick={() => onFrameClick(im.name)}
                    />
                )}
            </div>
        </>
    )
}