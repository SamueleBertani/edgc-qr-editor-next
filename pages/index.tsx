import type { NextPage } from 'next'
import React, { useEffect } from "react";
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useToasts } from 'react-toast-notifications';

const Home: NextPage = () => {

    const { addToast } = useToasts();
    useEffect(() => {
        const root = document.documentElement
        root.style.setProperty('--green', "#F1FAEE");
    })
    useEffect(() => {
        const shareData = {
            title: 'QR Personalization',
            text: 'Personalizza il tuo greenpass! Rendilo unico, è gratis e veloce!',
            url: 'https://personalizza-greenpass.it/'
        }

        const btn = document.getElementById('button');
        const resultPara = document.querySelector('.result');

        // Share must be triggered by "user activation"
        btn.addEventListener('click', async () => {
            try {
                await navigator.share(shareData)
                addToast('Condivisa con successo', { appearance: 'success', autoDismiss: true});
            } catch (err) {
            }
        });
    })

    return (
        <div className={styles.container}>
            <div className="testoIniziale">
                <div>
                    <h1 className="title">Rendi il tuo greenpass unico</h1>
                </div>
                <div>
                    <h2 className="descr">Personalizza il tuo greenpass in 30 secondi, gratis</h2>
                </div>

                <div className="footer">
                    <Link href="/page2">
                        <button className="iniziaButton">
                            <h2 className="inizia">
                                Inizia
                            </h2>
                        </button>
                    </Link>
                    <div className="tranqui">
                        Gratis e sicuro: non ti fidi?<Link href='/legal'>Tranquillizzati qui</Link>
                    </div>
                    <p><button id="button" className='shareButton'> <h3 className="share">Share MDN!</h3></button></p>
                </div>
            </div>
        </div>
    )
}

export default Home
