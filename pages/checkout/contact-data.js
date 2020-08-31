import React from 'react';
import ContactData from '../../src/containers/Checkout/ContactData/ContactData'
import Head from 'next/head'

const contactDataContainer = () => (
    <>
        <Head>
            <title>ContactData</title>
        </Head>
        <ContactData />
    </>
)

export default contactDataContainer