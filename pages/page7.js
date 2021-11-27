import React, {useEffect} from "react";
import Link from "next/link";
const qr = '/images/Qr.png';
const fasi = "/images/Group 11.svg";


function Page7() {

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

            <div className="panel7">
                <div className="guideframe">
                    <div className="guide">
                        Hai finito!
                    </div>
                </div>

                <div className="loadconclusione">
                    <div className="conclusione">
                        <div className="subConc">
                            E ora?
                        </div>

                        <div className="testoConc">
                            Non resta che usare il tuo nuovo “accessorio”
                        </div>

                        <div className="subConc">
                            Che progetto bellissimo! Come potrò mai ripagarvi?<br/>
                        </div>

                        <div className="testoConc">
                            Grazie mille! Se ci tieni a essere anche te partecipe di questo progetto, puoi offrire un
                            caffè agli sviluppatori con il bottone qui sotto.<br/>
                        </div>

                        <div className="subConc">
                            Oppure?<br/>
                        </div>

                        <div className="testoConc">
                            Puoi condividere il progetto con un amic*! é gratis e noi siamo contenti lo stesso!
                        </div>

                    </div>

                    <button className="caffeButtonConc">
                        <Link href='/' className="caffe">Offrici un caffè</Link>
                    </button>
                    <div>
                        <Link href='/' className="backHomeConc">Torna alla home</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page7;
