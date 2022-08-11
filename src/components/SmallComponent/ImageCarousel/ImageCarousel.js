import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//image imports starts it will be changed after adding backend
import food from "../../../images/carousel/food-set.jpg";
import laptop from "../../../images/carousel/laptop-set.jpg";
import mobile from "../../../images/carousel/mobile-set.jpg";
import shirts from "../../../images/carousel/shirts-set.jpg";
import watch from "../../../images/carousel/watch-set.jpg";
import { useNavigate } from 'react-router-dom';
//image imports ends
const carouselData = [
    {
        image:{url:food, public_id:"its a public id"}, 
        productId:"its a product id"
    },
    {
        image:{url:laptop, public_id:"its a public id"}, 
        productId:"its a product id"
    },
    {
        image:{url:mobile, public_id:"its a public id"}, 
        productId:"its a product id"
    },
    {
        image:{url:shirts, public_id:"its a public id"}, 
        productId:"its a product id"
    },
    {
        image:{url:watch, public_id:"its a public id"}, 
        productId:"its a product id"
    }
]

const ImageCarousel = () => {
    const navigate = useNavigate();

    const handleImageClick = (index, item)=>{
        navigate(`/product/${item.props.productid}`);
    }

  return (
    <div className='carouselContainer'>
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} onClickItem={handleImageClick} >
            {carouselData && carouselData.map((cd, index)=>(
                <div productid={cd.productId} key={cd.productId+index} >
                    <img className='imageHeight' src={cd.image.url} alt="imgForCarousel"/>
                </div>
            ))}
        </Carousel>
    </div>
  )
}

export default ImageCarousel;