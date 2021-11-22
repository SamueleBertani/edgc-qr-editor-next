import React, {useEffect, useState} from "react";
import Link from "next/link";
const qr = '/images/Qr.png';
const avanti = "/images/Avanti.svg";
const fasi = "/images/Group 8.svg";


function CornerSquarePicker({onPick}) {

    const images = ["cornerSquare.png", "dot.png", "extraRound.png", "classyCorner.png"]

    const [image, setImage] = useState(0)

    return (
        <>
            <div>
                {/*{colors[color]}*/}
            </div>
            <div>
                {images.map((im, i) => <div style={{backgroundImage: `url(${im})`}}
                                            className={i == image ? "CornerSquareSelected" : "CornerSquare"}
                                            onClick={() => {
                                                onPick(i);
                                                setImage(i);
                                            }}></div>)}
            </div>

        </>
    )


}

function ColorPicker({onPick}) {

    const colors = ["#000000", "#e91e63", "#9c27b0", "#673ab7",
        "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4"]

    const [color, setColor] = useState(0)

    return (
        <>
            <div>
                {/*{colors[color]}*/}
            </div>
            <div>
                {colors.map((c, i) => <div style={{backgroundColor: c}} className={i == color ? "selected" : "scelta1"}
                                           onClick={() => {
                                               onPick(c);
                                               setColor(i);
                                           }}></div>)}
            </div>

        </>
    )


}


function Page5() {

    useEffect(() => {
        const root = document.documentElement
        root.style.setProperty('--green', "#FFFFFF");
    })

    //window.scrollTo(0, 0);

    return (
        <>

            <div className="fase">
                <img src={fasi}/>
            </div>

            <div className="qrframe">
                <div className="frame">
                    <img src={qr} className="qr"/>
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
                        <CornerSquarePicker onPick={(c) => console.log(c)}/>
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

                <div className="coloreScrittaFrame">
                    <div className="colore">
                        Colore scritta
                    </div>
                    <div className="colortable">
                        <ColorPicker onPick={(c) => console.log(c)}/>
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
        </>
    )
}

export default Page5;
