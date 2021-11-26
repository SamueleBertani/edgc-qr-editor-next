import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {ColorPicker, SvgPicker} from "../components";

const qr = '/images/Qr.png';
const avanti = "/images/Avanti.svg";
const fasi = "/images/Group 9.svg";

const colors = ["#000000", "#e91e63", "#9c27b0", "#673ab7",
    "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"]
const images = [
    {name: "corner_square", value: "/images/dots/cornerSquare.png"},
    {name: "dot", value: "/images/dots/dot.png"},
    {name: "extra_round", value: "/images/dots/extraRound.png"},
    {name: "classy_corner", value: "/images/dots/classyCorner.png"}
]

function Page5() {

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
    }, [])

    useEffect(() => {
        if (qrCode) {
            qrCode.append(qrPanel.current)
        }
    }, [qrCode])


    useEffect(() => {
        if (qrCode) {
            qrCode.update(qrOptions)
        }
    }, [qrCode, qrOptions])

    const onSvgPickerChanged = (value) => {
        console.log(value)
    }

    const onColorPickedChanged = (value) => {
        console.log(value)
    }

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
            <div>
                <div className="fase">
                    <img src={fasi}/>
                </div>

                <div className="qrframe">
                    <div className="frame">
                        <svg ref={qrPanel} viewBox="0 0 1000 1000" style={{width: 200}}/>
                    </div>
                </div>
                <div className="panel5">
                    <div className="guideframe">
                        <div className="guide">
                            Un ultimo tocco
                        </div>
                    </div>
                    <div className="colorframe">
                        <div className="colore">
                            Cornice
                        </div>
                        <div className="colortable">
                            <SvgPicker images={images} onPick={(v) => onSvgPickerChanged(v)}/>
                        </div>
                    </div>

                    <div className="scrittaframe">
                        <div className="colore">
                            Scritta
                        </div>
                        <textarea className="text" cols="30" rows="2"></textarea>
                    </div>

                    <div className="fontframe">
                        <div className="colore">
                            Font
                        </div>
                        <div>
                            <select className="tendina">
                                <option></option>
                                <option value="SO">Sistemi Operativi</option>
                                <option value="TW">Tecnologie Web</option>
                                <option value="SM">Sistemi Multimediali</option>
                            </select>
                        </div>
                    </div>

                    <div className="colorframe">
                        <div className="colore">
                            Colore scritta
                        </div>
                        <div className="colortable">
                            <ColorPicker colors={colors} onPick={(c) => onColorPickedChanged(c)}/>
                        </div>
                    </div>

                    <div className="pagine5Options">
                        <Link href="/page6">
                            <div className="buttonAvanti5">
                                <img src={avanti} className="avanti"/>
                            </div>
                        </Link>

                        <Link href="/page4">
                            <div className="buttonIndietro5">
                                <img src={avanti} className="indietro"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page5;
