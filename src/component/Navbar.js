//어느 페이지에서도 보이는 네비게이션 바
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBagShopping } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <div>
      <div>
        <div class="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div class="button-name">로그인</div>
          <FontAwesomeIcon icon={faHeart} />
          <div class="button-name">즐겨찾기</div>
          <FontAwesomeIcon icon={faBagShopping} />
          <div class="button-name">쇼핑백</div>
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
          <input type="text" placeholder="제품 검색" />
        </div>
      </div>
      <div className="free-delivery">회원은 3만원 이상 구매 시 무료 배송</div>
    </div>
  );
};

export default Navbar;
