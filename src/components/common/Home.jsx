import React from 'react'
import LatestProduct from './LatestProduct';
import FeaturedProducts from './FeaturedProducts';
import Slider from './Slider';
import Layout from './Layout';
const Home = () => {
  return (
    <>
    <Layout>
        <Slider />
        <LatestProduct />
        <FeaturedProducts />
    </Layout>
    </>
  )
}

export default Home