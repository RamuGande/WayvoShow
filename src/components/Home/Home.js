import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SingleCardSlider from '../CarouselSingle/singlecard';

import Multicard from '../CarouselMulti/Multicard';

const Home = () => {
  return (

    
    <div >
      
      <Navbar/>
      <p style={{fontSize:'larger', marginLeft:'20px'}}> 🎬🍿Book your show now.. Now you can book your own private show for your friends and family👨‍👩‍👧‍👦</p>
    <SingleCardSlider />
    <Multicard/>
    
      
      <Footer/>
    </div>
  )
}
export default Home
