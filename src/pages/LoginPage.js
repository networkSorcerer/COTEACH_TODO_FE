import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginPage = () => {
  return (
    <div className="display-center">
      <Form className="login-box">
        <h1>로그인</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control />
        </Form.Group>
        <div className="button-box">
          <Button type="submit" className="btton-primary">
            Login
          </Button>
          <span>
            계정이 업다면? <Link to="/register">회원 가입하기 </Link>
          </span>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
