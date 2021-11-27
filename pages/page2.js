import React, { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import { get } from '@andreekeberg/imagedata'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Link from "next/link";
import { FACING_MODES } from 'react-html5-camera-photo';

const qr = '/images/Qr.png';
const camera = "/images/Camerasvg.svg";
const image = "/images/Image.svg";
const avanti = "/images/Avanti.svg";
const fasi = "images/Group 5.svg";


export default function Page2() {

    const [showAlert, setShowAlert] = useState('none')

    useEffect(() => {
        const root = document.documentElement
        root.style.setProperty('--green', "#FFFFFF");
    })

    const [show, setShow] = useState(false);

    const [cameraIsVisible, setCameraVisibility] = useState(false);

    const inputFile = useRef(null)

    function onImageSelectorClick() {
        inputFile.current.click();
    }

    function notifyQrCodeFound(code) {
        setShow((s) => true)
    }

    function notifyQrCodeNotFound() {
        setShowAlert("failed");
        setShow((s) => false)
    }

    function onImageInput(file) {
        get(file, (error, imageData) => {
            if (error) {
                console.log(error)
            } else {
                let code = jsQR(imageData.data, imageData.width, imageData.height);
                if (code) {
                    notifyQrCodeFound(code.data)
                } else {
                    notifyQrCodeNotFound()
                }
            }
        })
    }


    function handleTakePhoto(dataUri) {
        get(dataUri, (error, imageData) => {
            if (error) {
                console.log(error)
            } else {
                let code = jsQR(imageData.data, imageData.width, imageData.height);
                if (code) {
                    notifyQrCodeFound(code.data)
                } else {
                    notifyQrCodeNotFound()
                }
            }
        })
        setCameraVisibility(false)
    }


    function onCameraInputClick() {
        setCameraVisibility(true)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <div>
            <div className="foto">
                {cameraIsVisible && <Camera
                    idealFacingMode={FACING_MODES.USER}
                    sizeFactor={1}
                    isFullscreen={true}
                    onTakePhotoAnimationDone={(dataUri) => {
                        handleTakePhoto(dataUri);
                    }}
                />}
            </div>
                <div className="fase">
                    <img src={fasi} />
                </div>
                <div className="qrframe">
                    <div className="frame">
                        <img src={qr} className="qr" alt={"qr icon"} />
                    </div>
                </div>
                <div style={{ display: showAlert == 'none' ? 'none' : 'block' }} className="alert">
                    <div className="notFound">
                        Qr Code not found
                    </div>
                    <button className="closeButton" onClick={() => setShowAlert("none")}>
                        <div className="tryAgain">Try Again</div>
                    </button>
                </div>
            </div>
            <div className="panel">
                <div className="guide">
                    Carica il tuo greenpass
                </div>
                <div className="loadOptions">
                    <div className="loadsx" onClick={onCameraInputClick}>
                        <div>
                            <img src={camera} className="icon" alt={"camera icon"} />
                        </div>
                        <div className="loadLabel">
                            Fotocamera
                        </div>
                    </div>
                    <div className="loaddx" onClick={onImageSelectorClick}>
                        <div>
                            <img src={image} className="icon" alt={"gallery icon"} />
                        </div>
                        <div className="loadLabel">
                            Galleria
                        </div>
                        <input type="file" ref={inputFile} accept="image/png, image/jpeg"
                            onChange={e => (onImageInput(e.target.files[0]))} style={{ display: 'none' }} />
                    </div>
                </div>

                <div className="pagineOptions">
                    <Link href="/page25">
                        <div className="buttonAvanti" style={{ display: show ? "block" : "none" }}>
                            <img src={avanti} className="avanti" />
                        </div>
                    </Link>

                    <Link href="/">
                        <div className="buttonIndietro" onClick={() => setShow((s) => false)}>
                            <img src={avanti} className="indietro" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}


