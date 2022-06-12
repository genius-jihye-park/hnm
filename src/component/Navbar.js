//어느 페이지에서도 보이는 네비게이션 바
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate()
  const goToLogin=() => {
    navigate('/login');
  }
  const goToFavorite=() => {
    navigate('/favorite');
  }
  const goToShoppingbag=() => {
    navigate('/shoppingbag');
  };
  const search = (event) => {
    //아래 input에서 받은 이벤트를 가지고
    if(event.key === "Enter"){
      //만약 이벤트에서 받은 키가 enter라면
      // console.log("Enter입니덩", event.key)
      //js는 value로 받아오지만, 리액트는 event에 값이 들어있다
      let keyword = event.target.value
      //이 밸류 안에 원하는 값이 들어잇다.

      navigate(`/?q=${keyword}`);
      // 입력한 검색어를 읽어와서 url 바꿔주기 네비게이트 사용
      //?q=검색어 쿼리 값을 찾아야 하는디
      //키워드를 통해서 url을 바꿔줌

    }
  }
  return (
    <div>
      <div>
        <div class="buttons login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div class="buttons button-name">로그인</div>
        </div>
        <div class="buttons favorite-button" onClick={goToFavorite}>
          <FontAwesomeIcon icon={faHeart} />
          <div class="buttons button-name">즐겨찾기</div>
        </div>
        <div class="buttons shoppingbag-button" onClick={goToShoppingbag}>
          <FontAwesomeIcon icon={faBagShopping} />
          <div class="buttons button-name">쇼핑백</div>
        </div> 
      </div>

      <div className="nav-section">
        <img
          width={100}
          src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/c0a6a57f-e8a6-4c3d-a874-b9be0a1ecba9"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map(
            (
              menu //맨위에 const로 선언한 메뉴리스트 매핑
            ) => (
              <li>{menu}</li>
            )
          )}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품 검색" onKeyPress={(event) =>search(event)}/>
          {/* onKeyPress가 이벤트를 받아서 엔터가 쳐질 때만 동작하도록 함 */}
          {/* 모든 이벤트 리스너는 이벤트를 매개 변수로 넘겨준다 */}
        </div>
      </div>
      <div className="free-delivery">회원은 3만원 이상 구매 시 무료 배송</div>
    </div>
  );
};

export default Navbar;
