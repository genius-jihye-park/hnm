import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({authentication}) => { //authentication 정보를 받아옴
  return (
    authentication == true ? <ProductDetail /> : <Navigate to ="/login"/>
    //만약 로그인이 되어있다면 프로덕트 디테일 보여주고 아니라면 redirect해서 Navigate로 로그인으로 가자
  )
}

export default PrivateRoute