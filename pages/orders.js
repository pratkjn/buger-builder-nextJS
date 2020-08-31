import React from 'react';
import Orders from '../src/containers/Orders/Orders'
import Head from 'next/head'

const ordersContainer = () => (
  <>
    <Head>
      <title>Orders</title>
    </Head>
    <Orders />
  </>
)

export default ordersContainer