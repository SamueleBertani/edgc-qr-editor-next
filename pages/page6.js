import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "@fontsource/nanum-pen-script";
import { useSelector } from "react-redux"; // Defaults to weight 400.
import withTransition from "../HOC/withTransition";
import { useToasts } from 'react-toast-notifications';

const share = '/images/Share.svg';

const avanti = "/images/Avanti.svg";
const image = "/images/Image.svg";
const fasi = "/images/Group 9.svg";


function Page6() {

    const { addToast } = useToasts();

    const [shareObj, setShareObj] = useState(null);

    const [sharable, setShare] = useState(false)

    useEffect(() => {
        const root = document.documentElement
        root.style.setProperty('--green', "#FFFFFF");
    })


    //window.scrollTo(0, 0);

    const qrPanel = useRef()

    const qrOptions = useSelector(state => state.qrOptions.value)

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
            qrCode.getRawData('jpeg').then(blob => {
                if (navigator.canShare) {
                    const obj = {
                        files: [new File([blob], "qr.jpg", { type: "image/jpeg" })],
                        title: "Condividi il tuo green pass!",
                        text: "Il tuo green pass"
                    }
                    setShare(navigator.canShare(obj))
                    setShareObj(obj)
                } else {
                    setShare(false)
                }
            })
        }
    }, [qrCode, qrOptions])

    const onDownloadClicked = () => {
        qrCode.download({ extension: "jpeg" })
        addToast('Download iniziato', { appearance: 'success' });
    }

    const onShareClick = () => {
        try {
            navigator.share(shareObj).then(() => { }).catch(e => console.log(e))

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <div>
                <div className="fase">
                    <img src={fasi} alt="personalization part 6" />
                </div>

                <div className="qrframe">
                    <div className="frame" >
                        <svg ref={qrPanel} viewBox="0 0 1000 1000" style={{ width: 200 }} />
                    </div>
                </div>
            </div>

            <div className="panel">
                <div className="guideframe">
                    <div className="guide">
                        Scarica la tua opera
                    </div>
                </div>

                <div className="loadOptions">
                    <div className="loadsx" onClick={onShareClick} style={{ display: sharable ? "block" : "none" }}>
                        <div>
                            <img src={share} className="icon" alt="share" />
                        </div>
                        <div className="loadLabel">
                            Condividila
                        </div>
                    </div>
                    <div className="loaddx" onClick={onDownloadClicked}>
                        <div>
                            <img src={image} className="icon" alt="save in gallery" />
                        </div>
                        <div className="loadLabel">
                            Salva in Galleria
                        </div>
                    </div>
                </div>
                <div className="consiglioFrame" style={{ display: sharable ? "block" : "none" }}>
                    <div className="consiglio">
                        Inviatela su Whatsapp (cosi&apos; non la perdi)
                    </div>
                </div>

                <div className="pagineOptions">
                    <Link href="/page7">
                        <div className="buttonAvanti">
                            <img src={avanti} className="avanti" alt="next page" />
                        </div>
                    </Link>

                    <Link href="/page4">
                        <div className="buttonIndietro">
                            <img src={avanti} className="indietro" alt="previous page" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default withTransition(Page6);
