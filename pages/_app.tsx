import '../styles/globals.css'
import type {AppProps} from 'next/app'
import '../styles/pages.css';
import {Provider, useDispatch} from "react-redux";
import store from "../store/store";
import { AnimatePresence } from "framer-motion";

function App({Component, pageProps, router}: AppProps) {

    return <>
    
        <Provider store={store}>
            <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route}/>
            </AnimatePresence>
        </Provider>
    </>

}

export default App
