import React, { useEffect } from "react";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import KofiButton from "kofi-button";
import withTransition from "../HOC/withTransition";


function Legal() {

    useEffect(() => {
        const root = document.documentElement
        root.style.setProperty('--green', "#F1FAEE");
    })

    return (
        <>
            <div className="testolegale">
                <div className="sub1">
                    Non lavoriamo per i poteri forti
                </div>
                <div className="sub2">
                    <p>Sfortunatamente ne Soros ne i Big farma ci finanziano e da questo progetto <strong>non ci
                        guadagnamo un euro.</strong></p>
                    <p>Da qualche settimana, mostrare il greenpass è diventato un obbligo e una cosa che facciamo
                        quotidianamente al lavoro, ristorante, bar.</p>
                    <p><strong>Facciamolo con stile allora!</strong></p>
                    <p>Questo progetto serve per <strong>fare sorridere te e il povero lavoratore</strong> che passa ore
                        a scannerizzare i greenpass fuori dagli ingressi con il cellulare.</p>
                    <p>Sappiamo che non è tanto e il problema non si sconfigge così ma crediamo che <strong>nel nostro
                        piccolo anche un sorriso possa fare la differenza </strong>(e poi siamo informatici, non
                        sappiamo fare molto altro).</p>
                </div>

                <div className="sub3">
                    E la privacy?
                </div>
                <div className="sub2">
                    <p>Ottima domanda! <strong>Non salviamo niente!</strong></p>
                    <p>Ma proprio niente niente dei tuoi dati personali.</p>
                    <p>Ci siamo impegnati per far si che il processo di personalizzazione viene fatto nel tuo cellulare
                        e tutte le informazioni restino li.</p>
                    <p>Quando apri il sito è come se tu scaricassi una applicazione e al momento della salvataggio del
                        greenpass personalizzato la disinstallassi.</p>
                    <p>L’unica cosa che salviamo, un po come tutti i siti (ma in realtà di meno), sono dati
                        sull’utilizzo (quanta gente ha provato a usare questo sito, ecc).</p>
                    <p>Se non ti fidi comunque <strong>puoi contattare Samuele</strong>(<a href="mailto:samuele@nonstudio.org" >samuele@nonstudio.org </a>) per
                        guardare il codice del progetto.</p>
                </div>
                <div className="sub3">
                    La morale di tutto cio
                </div>
                <div className="sub2">
                    <p><strong>Quindi è gratis e non mi rubate le informazioni?</strong></p>
                    <p>Esatto, in generale fai bene a non fidarti (ed è anche il motivo per cui abbiamo scritto questa
                        pagina lunghissima).</p>
                    <p>Proprio per questo se il progetto ti piace e condividi i questi valori, <strong>puoi dare una
                        mano anche tu! </strong></p>
                    <p><strong>Come?</strong></p>
                    <p><strong>Offrendo un caffè agli sviluppatori con una donazione.</strong> Non ci aspettiamo che il
                        nostro tempo venga ripagato (non è il nostro obiettivo) ma è un gesto che a noi <strong>fa super
                            piacere </strong>(anche perche i server sono da pagare)</p>
                    <p>Oppure se come noi non hai un soldo, puoi <strong>condividere il progetto</strong> a qualcun
                        altrə (cosi magari il caffe lo offre ad entrambi)</p>
                </div>

                <footer className="footer1">
                <KofiButton title="Offrici un caffè" kofiID="N4N31JDNX" />
                    <div>
                        <Link href='/' className="backHome">Torna alla home</Link>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default withTransition(Legal);