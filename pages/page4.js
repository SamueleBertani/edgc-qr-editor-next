import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {changeLogo} from "../features/qrCode/qrCodeOptions";
const qr = '/images/Qr.png';
const avanti = "/images/Avanti.svg";
const image = "/images/Image.svg";
const fasi = "/images/Group 8.svg";


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
                <div className="fase">
                    <img src={fasi} />
                </div>

            <div className="fase">
                <img src={fasi}/>
            </div>

            <div className="qrframe">
                <div className="frame">
                    <svg  ref={qrPanel} viewBox="0 0 1000 1000" style={{width: 200}}/>
                </div>
            </div>

            <div className="panel4">
                <div className="guideframe">
                    <div className="guide">
                        Aggiungi un logo <small>(opzionale)</small>
                    </div>
                </div>

                <div className="loadOptions" >
                    <div className="loadlogo" onClick={onImageSelectorClick}>
                        <div>
                            <img src={image} className="logo" />
                        </div>
                        <div className="loadLabel">
                            Galleria
                        </div>
                        <input type="file" ref={inputFile} accept="image/png, image/jpeg" onChange={ e => (onImageInput(e.target.files[0])) } style={{display: 'none'}}/>
                    </div>
                    <div className="rimuovilogo" onClick={onImageRemoveClick}>
                        Rimuovi
                    </div>
                </div>
                <footer>
                    <div className="pagine4Options">
                        <Link href="/page5">
                            <div className="buttonAvanti4">
                                <img src={avanti} className="avanti" />
                            </div>
                        </Link>

                        <Link href="/page3">
                            <div className="buttonIndietro4">
                                <img src={avanti} className="indietro" />
                            </div>
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Page4;