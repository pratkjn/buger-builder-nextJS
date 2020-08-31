import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/store/reducers/burgerBuilder';
import Layout from '../src/hoc/Layout/Layout'
import '../styles/globals.css'
import Head from 'next/head'

const store = createStore(reducer);

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="description" content="You can order your Burger from this website"/>
                <meta name="keywords" content="Burger, Order, Food, Dishes, Drinks"/>
                <meta name="copyright" content="Burger Builder is registered with PrateekJain Association"/>
                <meta name="robots" content="index, follow"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="refresh" content="30"/>
            </Head>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </>
    )
}

export default MyApp