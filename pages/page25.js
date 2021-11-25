import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {
    changeCornersDotType,
    changeCornersSquareShape,
    changeDotsShape
} from "../features/qrCode/qrCodeOptions";
import {SvgPicker} from "../components";

const qr = '/images/Qr.png';
const avanti = "/images/Avanti.svg";
const fasi = "/images/Group 6.svg";

const dotsImageOpts = [
    {name : "square", value:"/images/dots/squares.png"},
    {name: "extra-rounded",value:  "/images/dots/extraRounded.png"},
    {name: "dots", value : "/images/dots/dots.png"},
    {name: "rounded",value : "/images/dots/rounded.png"},
    {name: "classy",value : "/images/dots/classy.png"},
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
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>

            <div className="qrframe">
                <div className="frame">
                    <div className="frame">
                        <svg  ref={qrPanel} viewBox="0 0 1000 1000" style={{width: 200}}/>
                    </div>
                </div>

                <div className="qrframe">
                    <div className="frame">
                        <img src={qr} className="qr" />
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
                <div className="pagine25Options">
                    <Link href="/page3">
                        <div className="buttonAvanti">
                            <img src={avanti} className="avanti" />
                        </div>
                    </Link>

                    <Link href="/page2">
                        <div className="buttonIndietro">
                            <img src={avanti} className="indietro" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page25;
