import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { changeLogo } from "../features/qrCode/qrCodeOptions";
import withTransition from "../HOC/withTransition";

const avanti = "/images/Avanti.svg";
const image = "/images/Image.svg";
const fasi = "/images/Group 17.svg";


function Page4() {

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

    const inputFile = useRef(null)

    function onImageSelectorClick() {
        inputFile.current.click();
    }

    function onImageInput(file) {
        dispatch(changeLogo(URL.createObjectURL(file)))
    }

    function onImageRemoveClick() {
        dispatch(changeLogo(""))
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <div>
                <div className="fase" >
                    <img src={fasi} alt="personalization part 4"/>
                </div>

                <div className="qrframe">
                    <div className="frame">
                        <svg ref={qrPanel} viewBox="0 0 1000 1000" style={{width: 198, paddingTop: 4.5}} />
                    </div>
                </div>
            </div>
            <div className="panel">
                <div className="guideframe">
                    <div className="guide">
                        Aggiungi un logo <small>(opzionale)</small>
                    </div>
                </div>

                <div className="loadOptions">
                    <div className="loadlogo" onClick={onImageSelectorClick}>
                        <div>
                            <img src={image} className="logo" alt="add logo"/>
                        </div>
                        <div className="loadLabel">
                            Galleria
                        </div>
                        <input type="file" ref={inputFile} accept="image/png, image/jpeg"
                            onChange={e => (onImageInput(e.target.files[0]))} style={{ display: 'none' }} />
                    </div>
                    <div className="rimuovilogo" onClick={onImageRemoveClick}>
                        Rimuovi
                    </div>
                </div>
                <div className="pagineOptions">
                    <Link href="/page6">
                        <div className="buttonAvanti" >
                            <img src={avanti} className="avanti" alt="next page"/>
                        </div>
                    </Link>

                    <Link href="/page3">
                        <div className="buttonIndietro" >
                            <img src={avanti} className="indietro" alt="previous page"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withTransition(Page4)