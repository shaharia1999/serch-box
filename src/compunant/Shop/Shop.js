import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [searchIt,setsearchIt]=useState('');
    const[product,setProduct]=useState([]);
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchIt}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data.meals))
    },[searchIt])
    const searchInput=(e)=>{
        setsearchIt(e.target.value)
    }
    if(product==null){
       return(<div>
           <h1>Result not Found</h1>
           <h1> 404...</h1>
       </div>)
    }else{
        return (
            <div>
                <h3>Serching Here</h3>
                 <input onChange={searchInput} type="text"></input>
                 <h2> result :{product.length}</h2>
                 <div className='container'>
                 {
                    
                     product.map(pro=><Product pro={pro}></Product>)
    
                 }
                 </div>
            </div>
        );

    }

};

export default Shop;

