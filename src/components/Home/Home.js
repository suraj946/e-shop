import React from 'react';
import Category from '../SmallComponent/Category/Category';
import FeaturedProducts from '../SmallComponent/FeaturedProducts/FeaturedProducts';
import ImageCarousel from '../SmallComponent/ImageCarousel/ImageCarousel';

const Home = () => {
  return (
    <div>
      <Category/>
      <ImageCarousel/>
      <FeaturedProducts/>
    </div>
  )
}

export default Home;