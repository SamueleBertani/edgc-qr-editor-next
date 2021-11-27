import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { changeCornersDotColor, changeCornerSquareColor, changeDotsColor } from "../features/qrCode/qrCodeOptions";
import { ColorPicker } from "../components";

const qr = '/images/Qr.png';
const avanti = "/images/Avanti.svg";
const fasi = "/images/Group 7.svg";

const colors = ["#000000", "#e91e63", "#9c27b0", "#673ab7",
    "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"]


function Page3() {

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

    const onDotsColorChange = (color) => {
        dispatch(changeDotsColor(color))
    }
    const onCornerSquareColorChange = (color) => {
        dispatch(changeCornerSquareColor(color))
    }

    const onCornerDotsColorChange = (color) => {
        dispatch(changeCornersDotColor(color))
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <div>
                <div className="fase">
                    <img src={fasi} />
                </div>

                <div className="qrframe">
                    <div className="frame">
                        <svg ref={qrPanel} viewBox="0 0 1000 1000" style={{ width: 200 }} />
                    </div>
                </div>
            </div>

            <div className="panel">
                <div className="guideframe">
                    <div className="guide">
                        Scegli il colore
                    </div>
                </div>

                <div className="colorframe">
                    <div className="colore">
                        Quadratini
                    </div>

                    <div className="colortable">
                        <ColorPicker colors={colors} onPick={(c) => onDotsColorChange(c)} />
                    </div>
                </div>

                <div className="gradientframe">
                    <div className="colore">
                        Contorno angoli
                    </div>
                    <div className="gradienttable">
                        <ColorPicker colors={colors} onPick={(c) => onCornerSquareColorChange(c)} />
                    </div>
                </div>
                <div className="gradientframe">
                    <div className="colore">
                        Quadratini angoli
                    </div>
                    <div className="gradienttable">
                        <ColorPicker colors={colors} onPick={(c) => onCornerDotsColorChange(c)} />
                    </div>
                </div>
                <footer>
                    <div className="pagineOptions">
                        <Link href="/page4">
                            <div className="buttonAvanti">
                                <img src={avanti} className="avanti" />
                            </div>
                        </Link>

                        <Link href="/page25">
                            <div className="buttonIndietro">
                                <img src={avanti} className="indietro" />
                            </div>
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Page3;
