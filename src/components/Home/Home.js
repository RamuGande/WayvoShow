import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import SingleCardSlider from '../CarouselSingle/singlecard';

import Multicard from '../CarouselMulti/Multicard';

const Home = () => {
  return (

    
    <div >
      <Navbar/>
      
      <Multicard/>
      <Footer/>
    </div>
  )
}
export default Home
