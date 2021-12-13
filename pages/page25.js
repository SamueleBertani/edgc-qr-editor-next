import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {
    changeCornersDotType,
    changeCornersSquareShape,
    changeDotsShape
} from "../features/qrCode/qrCodeOptions";
import {SvgPicker} from "../components";
import withTransition from "../HOC/withTransition";


const avanti = "/images/Avanti.svg";
const fasi = "/images/Group 15.svg";

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
            <div>
                <div className="fase">
                    <img src={fasi} alt="personalization part 2"/>
                </div>

            <div className="qrframe">
                <div className="frame">
                    <div className="frame">
                        <svg  ref={qrPanel} viewBox="0 0 1000 1000" style={{width: 198, paddingTop: 4.5}}/>
                    </div>
                </div>
            </div>
            </div>

            <div className="panel">
                <div className="guideframe">
                    <div className="guide">
                        Personalizza il tuo QR code
                    </div>
                </div>
                <div className="colorframe">
                    <div className="colore">
                        Quadratini
                    </div>

                    <div className="colortable">
                        <SvgPicker initialValue={qrOptions.dotsOptions.type} images={dotsImageOpts} onPick={(n) => onDotShapeChange(n)}/>
                    </div>
                </div>

                <div className="gradientframe">
                    <div className="colore">
                        Contorno angoli
                    </div>
                    <div className="colortable">
                        <SvgPicker initialValue={qrOptions.cornersSquareOptions.type} images={cornersSquareImageOpts} onPick={(n) => onCornersSquareChange(n)}/>
                    </div>
                </div>

                <div className="dotframe">
                    <div className="colore">
                        Quadratini angoli
                    </div>
                    <div className="colortable">
                        <SvgPicker initialValue={qrOptions.cornersDotOptions.type} images={cornersDotImageOpts} onPick={(n) => onCornersDotChange(n)}/>
                    </div>
                </div>
                <div className="pagineOptions">
                    <Link href="/page3">
                        <div className="buttonAvanti">
                            <img src={avanti} className="avanti" alt="next page"/>
                        </div>
                    </Link>

                    <Link href="/page2">
                        <div className="buttonIndietro">
                            <img src={avanti} className="indietro" alt="previous page"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withTransition(Page25)
