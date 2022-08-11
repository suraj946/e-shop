import React from 'react';
import "./Category.css";

// image imports
import catImage from "../../../images/category/cate.jpeg";
import { Avatar, Typography } from '@mui/material';
const categoryData = [
    {
        image:{url:catImage, public_id:"its a public id"}, 
        category:"Mobile"
    },
    {
        image:{url:catImage, public_id:"its a public id"}, 
        category:"Watch"
    },
    {
        image:{url:catImage, public_id:"its a public id"}, 
        category:"Fashion"
    },
    {
        image:{url:catImage, public_id:"its a public id"}, 
        category:"Home"
    },
    {
        image:{url:catImage, public_id:"its a public id"}, 
        category:"Toys"
    },
    {
        image:{url:catImage, public_id:"its a public id"}, 
        category:"Grocery"
    },
    {
        image:{url:catImage, public_id:"its a public id"}, 
        category:"Grocery"
    },
    {
        image:{url:catImage, public_id:"its a public id"}, 
        category:"Grocery"
    },
    {
        image:{url:catImage, public_id:"its a public id"}, 
        category:"Grocery"
    },
    {
        image:{url:catImage, public_id:"its a public id"}, 
        category:"Grocery"
    }
]

const Category = () => {
    const getProduct = (category)=>{
        alert(`Redirect to product page and get all product of category : ${category}`);
    }
  return (
    <div className='categoryBox'>
        {categoryData && categoryData.map((cat,index)=>(
            <div className="categoryItem" key={index} onClick={()=>getProduct(cat.category)} >
                <Avatar sx={{ width: 70, height: 70 }} src={cat.image.url}/>
                <Typography>{cat.category}</Typography>
            </div>
        ))}
    </div>
  )
}

export default Category;