import React from 'react';
import Checkout from '../../src/containers/Checkout/Checkout'
import Head from 'next/head'

const checkoutContainer = () => (
    <>
        <Head>
            <title>Checkout</title>
        </Head>
        <Checkout/>
    </>
)

export default checkoutContainer