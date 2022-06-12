//제품 컴포넌트
 import React from 'react'
 import { useNavigate } from "react-router-dom";
 
 const ProductCard = ({item}) => {
   const navigate = useNavigate();
   const showDetail=() =>{
     navigate(`/product/${item.id}`) 
     {/*클릭하면 동적으로 다 변할 수 있는 곳이기 때문 $ 써준다 백틱으로 묶어줌*/}
     {/*들어온 item의 Id값에 따라서~ 파라미터로 넘겨서 동적으로 바꿈*/}
    }
   return (
     <div className="card" onClick={showDetail}> 
     {/* 카드 클릭시 showDetail함수 호출  */}
         <img src={item?.img} img-responsive/>
         <div>{item?.title}</div>
         <div>{item?.price}</div>
         <div>{item?.new == true?"신제품":""}</div> 
     </div>
   );
 };
 
 export default ProductCard;