import React, { useEffect, useState } from "react";
import Link from "next/link";
const qr = '/images/Qr.png';
const avanti = "/images/Avanti.svg";
const fasi = "/images/Group 6.svg";


function DotPicker({ onPick }) {

    const images = ["squares.png", "extraRounded.png", "dots.png", "rounded.png", "classy.png", "classyRounded.png"]

    const [image, setImage] = useState(0)

    return (
        <>
            <div>
                {/*{colors[color]}*/}
            </div>
            <div>
                {images.map((im, i) => <div style={{ backgroundImage: `url(${im})` }}
                    className={i == image ? "squaresSelected" : "squares"} onClick={() => {
                        onPick(i);
                        setImage(i);
                    }}></div>)}
            </div>

        </>
    )


}

function CornerSquarePicker({ onPick }) {

    const images = ["cornerSquare.png", "dot.png", "extraRound.png", "classyCorner.png"]

    const [image, setImage] = useState(0)

    return (
        <>
            <div>
                {/*{colors[color]}*/}
            </div>
            <div>
                {images.map((im, i) => <div style={{ backgroundImage: `url(${im})` }}
                    className={i == image ? "CornerSquareSelected" : "CornerSquare"}
                    onClick={() => {
                        onPick(i);
                        setImage(i);
                    }}></div>)}
            </div>

        </>
    )


}

function CornerDotPicker({ onPick }) {

    const images = ["squareCornerDot.png", "cornerDot.png", "classyCornerDot.png"]

    const [image, setImage] = useState(0)

    return (
        <>
            <div>
                {/*{colors[color]}*/}
            </div>
            <div>
                {images.map((im, i) => <div style={{ backgroundImage: `url(${im})` }}
                    className={i == image ? "CornerSquareSelected" : "CornerSquare"}
                    onClick={() => {
                        onPick(i);
                        setImage(i);
                    }}></div>)}
            </div>

        </>
    )


}


function Page25() {

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
                        Scegli il colore
                    </div>
                </div>

                <div className="colorframe">
                    <div className="colore">
                        Quadrati grandi
                    </div>

                    <div className="colortable">
                        <DotPicker onPick={(c) => console.log(c)} />
                    </div>
                </div>

                <div className="gradientframe">
                    <div className="colore">
                        Cornice Quadrati Grandi
                    </div>
                    <div className="colortable">
                        <CornerSquarePicker onPick={(c) => console.log(c)} />
                    </div>
                </div>

                <div className="dotframe">
                    <div className="colore">
                        Cornice Quadrati Piccoli
                    </div>
                    <div className="colortable">
                        <CornerDotPicker onPick={(c) => console.log(c)} />
                    </div>
                </div>

                <footer>
                    <div className="pagineOptions">
                        <Link href="/page3">
                            <div className="buttonAvanti">
                                <img src={avanti} className="avanti" />
                            </div>
                        </Link>

                        <Link href="/page2">
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

export default Page25;
