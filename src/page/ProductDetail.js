import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams(); //파라미터 값을 useParams로 받아온다
  const[product, setProduct] = useState(null)
  //api데이터를 state에 담기
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/genius-jihye-park/hnm/products/${id}`; //url입력시``사용
    let response = await fetch(url);
    let data = await response.json(); //응답에서 json을 뽑아와 주세요
    console.log(data);
    //데이터 잘 들어오는지 확인차
    setProduct(data)
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
  <Container>
    <Row>
      <Col className="product-img">
        <img src={product?.img}/>
        {/*프로덕트가 있니? 그럼 프로덕트 이미지 보여줘*/}
      </Col>
      <Col className="product-img">
      <img src={product?.img}/>
        {/*프로덕트가 있니? 그럼 프로덕트 이미지 보여줘*/}
      </Col>
      <Col>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
      </Col>

    </Row>
  </Container>
  
  )};

export default ProductDetail;
