import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  //useEffect사용하여 API호출,
  // useState사용하여 UI에 보여줌
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:3004/products`; //url입력시``사용
    // 초기에는 전체 상품이 보여야 하기 때문에 전체상품 페이지 나타냄
    let response = await fetch(url);
    let data = await response.json(); //응답에서 json을 뽑아와 주세요
    // console.log(data); 데이터 잘 들어오는지 확인차
    setProductList(data); //setProductList를 데이터로 설정해주겠다.
  };
  useEffect(() => {
    //2개의 매개 변수를 가져간다. 처음은 함수 , 두번째는 array
    getProducts();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
