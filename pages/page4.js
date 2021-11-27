import React, { useEffect } from "react";
import Link from "next/link";
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

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
            <div>
                <div className="fase">
                    <img src={fasi} />
                </div>

                <div className="qrframe">
                    <div className="frame">
                        <img src={qr} className="qr" />
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
                    <div className="loadlogo">
                        <div>
                            <img src={image} className="logo" />
                        </div>
                        <div className="loadLabel">
                            Galleria
                        </div>
                    </div>
                    <div className="rimuovilogo">
                        Rimuovi
                    </div>
                </div>
                <footer>
                    <div className="pagineOptions">
                        <Link href="/page5">
                            <div className="buttonAvanti">
                                <img src={avanti} className="avanti" />
                            </div>
                        </Link>

                        <Link href="/page3">
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

export default Page4;