import React from 'react';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder'
import Head from 'next/head'

const Home = () => (
  <>
    <Head>
      <title>Burger</title>
    </Head>
  <BurgerBuilder/>
  </>
)

export default Home