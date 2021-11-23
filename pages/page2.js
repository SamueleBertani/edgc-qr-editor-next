import React, { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import { get } from '@andreekeberg/imagedata'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import Link from "next/link";
//import { View, StyleSheet, Button, Alert } from "react-native";

const qr = '/images/Qr.png';
const camera = "/images/Camerasvg.svg";
const image = "/images/Image.svg";
const avanti = "/images/Avanti.svg";
const fasi = "images/Group 5.svg";


export default function Page2() {

    const showAlert = () =>
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Cancel",
                    onPress: () => Alert.alert("Cancel Pressed"),
                    style: "cancel",
                },
            ],
            {
                cancelable: true,
                onDismiss: () =>
                    Alert.alert(
                        "This alert was dismissed by tapping outside of the alert dialog."
                    ),
            }
        );


    //window.scrollTo(0, 0);

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
        //showAlert();
        setShow((s) => true)

        console.log(code)
    }

    function notifyQrCodeNotFound() {
        //showAlert();
        setShow((s) => false)
        console.log("non ho trovato nessun qr")
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
        <div>
            <div className="fase">
                <img src={fasi} />
            </div>
            <div className="qrframe">
                <div className="frame">
                    <img src={qr} className="qr" alt={"qr icon"} />
                </div>
            </div>
            <div className="panel2">
                <div className="guide">
                    Carica il tuo greenpass
                </div>
                <div className="loadOptions">
                    <div className="loadsx" onClick={onCameraInputClick}>
                        <div onClick={() => setShow((s) => true)}>
                            <img src={camera} className="icon" alt={"camera icon"} />
                        </div>
                        <div className="loadLabel">
                            Fotocamera
                        </div>
                    </div>
                    <div className="loaddx" onClick={onImageSelectorClick}>
                        <div onClick={() => setShow((s) => true)}>
                            <img src={image} className="icon" alt={"gallery icon"} />
                        </div>
                        <div className="loadLabel">
                            Galleria
                        </div>
                        <input type="file" ref={inputFile} accept="image/png, image/jpeg"
                            onChange={e => (onImageInput(e.target.files[0]))} style={{ display: 'none' }} />
                    </div>
                </div>
                <div>
                    {cameraIsVisible && <Camera
                        onTakePhotoAnimationDone={(dataUri) => {
                            handleTakePhoto(dataUri);
                        }}
                    />}
                </div>
                <div className="pagineOptions">
                    <Link href="/page25">
                        <div className="buttonAvanti2" style={{ display: show ? "block" : "none" }}>
                            <img src={avanti} className="avanti" />
                        </div>
                    </Link>

                    <Link href="/">
                        <div className="buttonIndietro2" onClick={() => setShow((s) => false)}>
                            <img src={avanti} className="indietro" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}


