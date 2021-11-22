import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const Home: NextPage = () => {
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
                </div>
            </div>
        </div>
    )
}

export default Home
