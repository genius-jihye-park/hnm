import React from "react";
import { Form, Button, Container, Row, Col} from "react-bootstrap"
import { useNavigate } from "react-router-dom";

const Login = ({setauthentication}) => {
  const navigate = useNavigate()
    const loginUser = (event) => {
      event.preventDefault(); //새로 고침을 막아준다
      console.log("login - -");
      setauthentication(true);
      navigate('/');
    };
  return (
    <Container>
      <Row>
        <Col md="auto">로그인</Col>
      </Row>
      <Row>
        <Col md="auto">다양한 할인 혜택과 이벤트, 보너스 쿠폰을 놓치지 마세요</Col>
      </Row>
      
      <Form onSubmit={(event)=>loginUser(event)}> 
      {/* form에서 쓰이는 이벤트는 onsubmit임 refresh를 막기위해서 */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            이메일 주소를 입력하시오.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text className="text-muted">
            비밀번호를 입력하시오.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="dark" type="submit">
          로그인
        </Button>
        <Button variant="outline-dark" type="submit">
          회원가입하기
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
