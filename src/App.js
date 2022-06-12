import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Favorite from "./page/Favorite";
import Shoppingbag from "./page/Shoppingbag";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import PrivateRoute from "./routes/PrivateRoute";


function App() {
  const [authentication, setauthentication] = useState(false); //true면 로그인이 됌 -> 로그인시 바꿔줘야함 Login.js
  useEffect(() => {
    console.log("바뀌는중", authentication);
  }, [authentication]); //authentication이 바뀔 때마다 콘솔 찍힘
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} /> //기본페이지
        <Route
          path="/login"
          element={<Login setauthentication={setauthentication} />}
        />{" "}
        //로그인페이지로 props해서 setauthentication을 보내버림 , 함수도 props할
        수 있다.
        <Route path="/shoppingbag" element={<Shoppingbag />} /> //장바구니페이지
        <Route path="/favorite" element={<Favorite />} /> //즐겨찾기페이지
        <Route
          path="/product/:id"
          element={<PrivateRoute authentication={authentication} />}
        />{" "}
        //로그인이 된 사용자만 상세페이지 보여줌
      </Routes>
    </div>
  );
}

export default App;
