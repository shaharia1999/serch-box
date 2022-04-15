import React from 'react';
import './Product.css'

const Product = (props) => {
   const{strMeal,strMealThumb,strCategory,strArea}=(props.pro)
    return (
        <div className='product'>
            <img src={strMealThumb}alt="" srcset="" />
            <h2>Name :{strMeal.slice(0,10)+'..'}</h2>
            <h3> Category :{strCategory}</h3>
            <h3> Area :{strArea}</h3>
            
        </div>
    );
};

export default Product;