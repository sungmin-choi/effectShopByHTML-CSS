import React from 'react'
import Link from 'next/link';
import { Container,Title,SubmitBtn,SignUpMessage,ProjectTitle} from '../../styles/loginStyle';
import { Form, Input} from 'antd';
const Signup = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <>
  <ProjectTitle>Effect Shop By HTML&CSS</ProjectTitle>
  <Container>
 <Title>회원가입</Title>
  <Form
  style={{position:'relative'}}
  name="basic"
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete="off"
>
<label>이름</label>
  <Form.Item
    name="name"
    rules={[
      {
        required: true,
        message: 'Please input your email!',
      },
    ]}
  >
    <Input  placeholder='이름'/>
  </Form.Item>
  <label>이메일</label>
  <Form.Item
    name="email"
    rules={[
      {
        required: true,
        message: 'Please input your email!',
      },
    ]}
  >
    <Input  placeholder='이메일'/>
  </Form.Item>
  <label>비밀번호</label>
  <Form.Item
    name="password"
    rules={[
      {
        required: true,
        message: 'Please input password!',
      },
    ]}
  >
    <Input.Password placeholder='비밀번호'/>
  </Form.Item>
  <label>비밀번호 확인</label>
  <Form.Item
    name="verifyPwd"
    rules={[
      {
        required: true,
        message: 'Please input verify password!',
      },
    ]}
  >
    <Input.Password placeholder='비밀번호 확인'/>
  </Form.Item>
  <Form.Item>
    <SubmitBtn type="primary" htmlType="submit">
      계정 만들기
    </SubmitBtn>
  </Form.Item>
</Form>
<SignUpMessage>
    <span>이미 계정이 있으신가요?</span>
    <Link href='/users/login'><a>로그인 하기</a></Link>
</SignUpMessage>
  </Container>
  </>
)
}

export default Signup