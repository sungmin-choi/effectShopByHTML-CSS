import React, { useEffect,useState } from 'react'
import Link from 'next/link';
import { Container,Title,SubmitBtn,SignUpMessage,ProjectTitle,GithubBtn} from '../../styles/loginStyle';
import { Form, Input,Divider,Button} from 'antd';
import { useDispatch,useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { LOG_IN_REQUEST,GITHUB_REQUEST} from '../../reducers/user';
import { GithubOutlined } from '@ant-design/icons';




const Login = () => {
    const {logInLoading,logInError,me} = useSelector((state)=>state.user);
    const router = useRouter();
    const dispatch = useDispatch();

    const emailReg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm;
    
    useEffect(()=>{
      if(me&&me.id){
        router.push('/');
      }
      if(logInError){
        alert(logInError);
      }
    },[me&&me.id,logInError]);

    const githubLogin = () =>{
      window.open("http://localhost:3065/user/github", "_self");
    }
    const onFinish = (values) => {
      const {email} = values;
      const checkEmail = emailReg.exec(email);
      if(checkEmail === null){
        return alert('이메일 형식 잘못 입력했습니다!');
      }
        dispatch({
          type:LOG_IN_REQUEST,
          data:values
        })
      };
  return (
      <>
    <Link href="/"><a><ProjectTitle>Effect Shop By HTML&CSS</ProjectTitle></a></Link>
    <Container>
   <Title>로그인</Title>
   <GithubBtn onClick={githubLogin} ><GithubOutlined/>Github으로 계속하기</GithubBtn>
   <Divider plain>또는</Divider>
    <Form
    style={{position:'relative'}}
    name="basic"
    onFinish={onFinish}
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
    <Form.Item >
      {logInLoading?  <SubmitBtn type="primary" loading>
            로그인중
          </SubmitBtn>:
          <SubmitBtn 
          type="primary" htmlType="submit">
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