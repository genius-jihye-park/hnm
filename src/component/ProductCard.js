//제품 컴포넌트
 import React from 'react'
 
 const ProductCard = ({item}) => {
   return (
     <div>
         <img src={item?.img}/>
         <div>{item?.title}</div>
         <div>{item?.price}</div>
         <div>{item?.new == true?"신제품":""}</div> 
     </div>
   );
 };
 
 export default ProductCard;