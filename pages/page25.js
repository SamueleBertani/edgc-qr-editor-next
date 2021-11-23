import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {
    changeCornersDotType,
    changeCornersSquareShape,
    changeDotsShape
} from "../features/qrCode/qrCodeOptions";

const qr = '/images/Qr.png';
const avanti = "/images/Avanti.svg";
const fasi = "/images/Group 6.svg";

const dotsImageOpts = [
    {name : "square", value:"squares.png"},
    {name: "extra-rounded",value:  "extraRounded.png"},
    {name: "dots", value : "dots.png"},
    {name: "rounded",value : "rounded.png"},
    {name: "classy",value : "classy.png"},
    {name: "classy-rounded",value : "classyRounded.png"},
]

const cornersSquareImageOpts = [
    {name : "square", value:"cornerSquare.png"},
    {name: "extra-rounded",value:  "extraRound.png"},
    {name: "dots", value : "dot.png"}
]
const cornersDotImageOpts = [
    {name : "square", value:"squareCornerDot.png"},
    {name: "dots", value : "cornerDot.png"}
]

function SvgPicker(props){
    const [image, setImage] = useState("square")
    const onSvgClick = (name) => {
        setImage(name);
        props.onPick(name)
    }

    return(
        <>
            <div>
                {props.images.map((im) =>
                    <div key={im.name} style={{backgroundImage:`url(/images/dots/${im.value})`}}
                         className={im.name === image ? "CornerSquareSelected" : "CornerSquare"}
                         onClick={() => onSvgClick(im.name)}
                    />
                )}
            </div>
        </>
    )
}

function Page25() {


    useEffect(() => {
        const root = document.documentElement
        root.style.setProperty('--green', "#FFFFFF");
    })

    //window.scrollTo(0, 0);

    const qrPanel = useRef()

    const qrOptions = useSelector(state => state.qrOptions.value)
    const dispatch = useDispatch()

    const [qrCode, setQrCode] = useState(null)

    useEffect(() => {
        const dynamicImports = async () => {
            const QRCodeStyling = (await import("qr-code-styling")).default
            setQrCode(new QRCodeStyling(qrOptions))
        }
        dynamicImports()
    },[])

    useEffect( () => {
        if (qrCode){
            qrCode.append(qrPanel.current)
        }
    },[qrCode])


    useEffect(() => {
        if(qrCode) {
            qrCode.update(qrOptions)
        }
    }, [qrCode, qrOptions])

    async function onDotShapeChange(v){
        await dispatch(changeDotsShape(v))
    }

    async function onCornersSquareChange(v){
        await dispatch(changeCornersSquareShape(v))
    }

    async function onCornersDotChange(v) {
        await dispatch(changeCornersDotType(v))
    }

    return (
        <div>
            <div className="fase">
                <img src={fasi}/>
            </div>

            <div className="qrframe">
                <div className="frame">
                    <div className="frame">
                        <svg  ref={qrPanel} viewBox="0 0 1000 1000" style={{width: 200}}/>
                    </div>
                </div>
            </div>

            <div className="panel25">

                <div className="guideframe">
                    <div className="guide">
                        Scegli il colore
                    </div>
                </div>

                <div className="colorframe">
                    <div className="colore">
                        Quadrati grandi
                    </div>

                    <div className="colortable">
                        <SvgPicker images={dotsImageOpts} onPick={(n) => onDotShapeChange(n)}/>
                    </div>
                </div>

                <div className="gradientframe">
                    <div className="colore">
                        Cornice Quadrati Grandi
                    </div>
                    <div className="colortable">
                        <SvgPicker images={cornersSquareImageOpts} onPick={(n) => onCornersSquareChange(n)}/>
                    </div>
                </div>

                <div className="dotframe">
                    <div className="colore">
                        Cornice Quadrati Piccoli
                    </div>
                    <div className="colortable">
                        <SvgPicker images={cornersDotImageOpts} onPick={(n) => onCornersDotChange(n)}/>
                    </div>
                </div>

                <footer>
                    <div className="pagine25Options">
                        <Link href="/page3">
                            <div className="buttonAvanti">
                                <img src={avanti} className="avanti"/>
                            </div>
                        </Link>

                        <Link href="/page2">
                            <div className="buttonIndietro">
                                <img src={avanti} className="indietro"/>
                            </div>
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Page25;
