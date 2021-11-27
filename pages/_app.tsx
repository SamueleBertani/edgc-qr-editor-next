import '../styles/globals.css'
import type {AppProps} from 'next/app'
import '../styles/pages.css';
import {Provider, useDispatch} from "react-redux";
import store from "../store/store";

function App({Component, pageProps}: AppProps) {

    return <>
        <Provider store={store}>
            <Component {...pageProps}/>
        </Provider>
    </>

}

export default App
