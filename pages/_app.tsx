import '../styles/globals.css'
import type {AppProps} from 'next/app'
import '../styles/pages.css';

function App({Component, pageProps}: AppProps) {
    return <>
        <Component {...pageProps}/>
    </>

}

export default App
