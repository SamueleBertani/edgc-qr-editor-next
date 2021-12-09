import '../styles/globals.css'
import type {AppProps} from 'next/app'
import '../styles/pages.css';
import {Provider, useDispatch} from "react-redux";
import store from "../store/store";
import { AnimatePresence } from "framer-motion";
import * as ga from '../lib/ga'
import {useEffect} from "react";
import {ToastProvider} from "react-toast-notifications";

function App({Component, pageProps, router}: AppProps) {

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])


    return <>

        <Provider store={store}>
            <ToastProvider>
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </ToastProvider>
        </Provider>
    </>

}

export default App
