import type { NextPage } from 'next'
import React, { useEffect } from "react";
import styles from '../styles/Home.module.css'
import Link from "next/link";
import "@fontsource/nanum-pen-script";


const bigCircle = '/bigCircle.svg'
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
                    <div className="nonStudio">
                        Creato con <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="red" style={{width: 20, height: 17.5}}><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg> da <a href="https://www.nonstudio.org" className="nonStudio"><strong>NonStudio</strong></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
