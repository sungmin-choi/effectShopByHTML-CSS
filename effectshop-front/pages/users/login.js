import React, { useEffect } from 'react'
import Link from 'next/link';
import { Container,Title,SubmitBtn,SignUpMessage,ProjectTitle} from '../../styles/loginStyle';
import { Form, Input} from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { LOG_IN_REQUEST} from '../../reducers/user';
const Login = () => {
    const {logInLoading, logInDone} = useSelector((state)=>state.user);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(()=>{
      if(logInDone){
        router.push('/');
      }
    },[logInDone]);

    const onFinish = (values) => {
        dispatch({
          type:LOG_IN_REQUEST,
          data:values
        })
      };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
      <>
    <Link href="/"><a><ProjectTitle>Effect Shop By HTML&CSS</ProjectTitle></a></Link>
    <Container>
   <Title>로그인</Title>
    <Form
    style={{position:'relative'}}
    name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
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
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password placeholder='비밀번호'/>
    </Form.Item>
    <Form.Item>
      {logInLoading?  <SubmitBtn type="primary" loading>
            로그인중
          </SubmitBtn>:
          <SubmitBtn type="primary" htmlType="submit">
            로그인 하기
          </SubmitBtn>}
    </Form.Item>
  </Form>
  <SignUpMessage>
      <span>아직 계정이 없으신가요?</span>
      <Link href='/users/signup'><a>계정 만들기</a></Link>
  </SignUpMessage>
    </Container>
    </>
  )
}


export default Login