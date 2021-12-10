import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/pages.css';
import { Provider } from "react-redux";
import store from "../store/store";
import { AnimatePresence } from "framer-motion";
import * as ga from '../lib/ga'
import React, { useEffect } from "react";
import { ToastProvider } from "react-toast-notifications";
import Head from "next/head"

const favicon = '/favicon.ico';


function App({ Component, pageProps, router }: AppProps) {

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
        <Head>
            <title>Qr Personalization</title>
            <link href={favicon} rel="icon" type="image/x-icon" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="it_IT" />
            <meta property="og:url" content="https://peronalizza-greenpass.it" />
            <meta property="og:title" content="Personalizza il tuo greenpass!🎉" />
            <meta property="og:site_name" content="Personolizza Greenpass" />
            <meta property="og:description" content="Rendilo unico👑, è gratis e veloce🏃" />
            <meta property="og:image" content={favicon} />
            <meta property="og:image:alt" content="site icon" />
        </Head>
        <Provider store={store}>
            <ToastProvider>
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </ToastProvider>
        </Provider>
    </>

}

export default App
