import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  // useState사용하여 UI에 보여줌
  const [query, setQuery] = useSearchParams();
  // useSearchParams을 통해서 url의 쿼리값을 읽어옴
  const getProducts = async () => {
    let searchQuery = query.get('q') ||"";
    //만약 아무것도 입력되지 않으면 빈 string 넣음
    //q라고 시작되는 곳의 아이템을 가져다가 서치쿼리에 넣어줌
    console.log("query값은?", searchQuery);
    let url = `https://my-json-server.typicode.com/genius-jihye-park/hnm/products?q=${searchQuery}`;
    //url입력시 `` 사용
    // 초기에는 전체 상품이 보여야 하기 때문에 전체상품 페이지 나타냄
    let response = await fetch(url);
    let data = await response.json(); //응답에서 json을 뽑아와 주세요
    // console.log(data); 데이터 잘 들어오는지 확인차
    setProductList(data); //setProductList를 데이터로 설정해주겠다.
  };
  useEffect(() => {
    //useEffect사용하여 API호출,
    //2개의 매개 변수를 가져간다. 처음은 함수 , 두번째는 array
    //useEffect는 배열에 값이 없으면 프로젝트 시작 처음에 딱 한번만 실행된다
    getProducts();
  }, [query]);
  //원래 빈배열이었지만 query를 넣어준다 그래야지 필터링 
  return (
    <div>
      <Container> 
        {/* //부트스트랩에서 컨테이너의 역할은 아이템이 가운데로 모이게 해줌 */}
        <Row>
          {productList.map((menu) => (
            <Col lg={3}> 
            {/* //한개 아이템의 사이즈를 정하는 것; 한줄에는 12가 들어간다 즉, 4개 */}
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
