import React, {useEffect} from "react";
import Link from "next/link";
import "@fontsource/nanum-pen-script"; // Defaults to weight 400.
const share = '/images/Share.svg';
const qr = '/images/Qr.png';
const avanti = "/images/Avanti.svg";
const image = "/images/Image.svg";
const fasi = "/images/Group 10.svg";


function Page6() {

    useEffect(() => {
        const root = document.documentElement
        root.style.setProperty('--green', "#FFFFFF");
    })

    //window.scrollTo(0, 0);

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <div>
            <div className="fase">
                <img src={fasi}/>
            </div>

            <div className="qrframe">
                <div className="frame">
                    <img src={qr} className="qr"/>
                </div>
            </div>
            </div>
            
            <div className="panel6">
                <div className="guideframe">
                    <div className="guide">
                        Scarica la tua opera
                    </div>
                </div>

                <div className="loadOptions">
                    <div className="loadsx">
                        <div>
                            <img src={share} className="icon"/>
                        </div>
                        <div className="loadLabel">
                            Condividila
                        </div>
                    </div>
                    <div className="loaddx">
                        <div>
                            <img src={image} className="icon"/>
                        </div>
                        <div className="loadLabel">
                            Salva in Galleria
                        </div>
                    </div>
                </div>
                <div className="consiglioFrame">
                    <div className="consiglio">
                        Inviatela su Whatsapp (così non la perdi)
                    </div>
                </div>

                <div className="pagineOptions">
                    <Link href="/page7">
                        <div className="buttonAvanti6">
                            <img src={avanti} className="avanti"/>
                        </div>
                    </Link>

                    <Link href="/page5">
                        <div className="buttonIndietro6">
                            <img src={avanti} className="indietro"/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Page6;
