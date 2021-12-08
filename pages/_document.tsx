import Document, { Html, Head, Main, NextScript } from 'next/document'
const favicon = '/favicon.ico';

class MyDocument extends Document {

    render() {
        return (
            <Html lang="it">
                <Head>
                    <title>Qr Personalization</title>
                    <link href={favicon} rel="icon" type="image/x-icon" />
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
