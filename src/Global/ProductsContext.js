import React,{createContext} from 'react'
import b1 from '../img/b1.jpg';
import b2 from '../img/b2.jpg';
import c1 from '../img/c1.jpg';
import c2 from '../img/c2.jpg';
import c3 from '../img/c3.jpg';
import c4 from '../img/c4.jpg';
import c5 from '../img/c5.jpg';
import c6 from '../img/c6.jpg';
import { useState } from 'react';


export const ProductContext = createContext();

export const ProductsContextProvider = (props) => {
  const [products] = useState([

    {id:1,name:'Shoes1',price:300,image:b1,status:'Hot'},
    {id:2,name:'Shoes2',price:600,image:b2,status:'New'},
    {id:3,name:'Shoes3',price:900,image:c1,status:'Hot'},
    {id:4,name:'Shoes4',price:100,image:c2,status:'Hot'},
    {id:5,name:'Shoes5',price:200,image:c3,status:'Hot'},
    {id:6,name:'Shoes6',price:400,image:c4,status:'Hot'},
    {id:7,name:'Shoes7',price:700,image:c5,status:'Hot'},
    {id:8,name:'Shoes8',price:800,image:c6,status:'Hot'},
    {id:9,name:'Shoes9',price:500,image:c3,status:'Hot'},

  ]);
    return (
        <ProductContext.Provider value = {{products:[...products]}}>
        {props.children}
        </ProductContext.Provider>
    )
}
