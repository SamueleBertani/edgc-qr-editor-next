import type { NextPage } from 'next'
import React, { useEffect } from "react";
import styles from '../styles/Home.module.css'
import Link from "next/link";
import "@fontsource/nanum-pen-script";


const bigCircle = '/Vector.svg'
const yellow = '/yellow.svg'
const littleBlue = '/littleBlue.svg'
const bigBlue = '/bigBlue.svg'
const mediumYellow = '/mediumYellow.svg'
const squiggly = '/squiggly 1.svg'

const Home: NextPage = () => {


    useEffect(() => {
        const root = document.documentElement
        root.style.setProperty('--green', "#F1FAEE");
    })

    return (
        <div className={styles.container}>
            <div className="testoIniziale">
                
                <img src={bigCircle} className='bigCircle' />
                <img src={yellow} className='yellow' />
                <img src={littleBlue} className='littleBlue' />
                <img src={bigBlue} className='bigBlue' />
                <img src={mediumYellow} className='mediumYellow' />
                <div>
                    <h1 className="title">Rendi il tuo greenpass unico</h1>
                </div>
                <div>
                    <h2 className="descr">Personalizza il tuo greenpass: in 30 secondi, gratis</h2>
                </div>
                <img src={squiggly} className='squiggly' />
                <div className='squigglyWrite'>
                    e funziona identico al greenpass normale!
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
                </div>
            </div>
        </div>
    )
}

export default Home
