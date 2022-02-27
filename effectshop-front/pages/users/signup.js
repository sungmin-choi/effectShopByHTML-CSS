import React,{useEffect,useState} from 'react'
import Link from 'next/link';
import { Container,Title,SubmitBtn,SignUpMessage,ProjectTitle} from '../../styles/loginStyle';
import { Form, Input} from 'antd';
import { useDispatch,useSelector} from 'react-redux';
import { SIGN_UP_REQUEST } from '../../reducers/user';
import {useRouter} from 'next/router';
const Signup = () => {
  const dispatch = useDispatch();
  const {signUpError,signUpDone} = useSelector(state=>state.user);
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const emailReg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm;
  const router = useRouter();
  useEffect(() => {
    forceUpdate({});
  }, []);

  useEffect(()=>{
    if(signUpDone){
      router.push('/');
    }
    if(signUpError){
      alert(signUpError);
    }
  },[signUpDone,signUpError]);
  
  const onFinish = (data) => {
    const {nickname,email,password,verifyPwd} =data;
    const checkEmail = emailReg.exec(email);
    if(checkEmail === null){
      return alert('이메일 형식 잘못 입력했습니다!');
    }
    if(password !== verifyPwd){
      return alert('비밀번호 와 비밀번호 확인이 서로 다릅니다!');
    }
    dispatch({
      type: SIGN_UP_REQUEST,
      data:{nickname,email,password}
    })
    
        
  };
  return (
    <>
  <Link href="/"><a><ProjectTitle>Effect Shop By HTML&CSS</ProjectTitle></a></Link>
  <Container>
 <Title>회원가입</Title>
  <Form
  form={form}
  style={{position:'relative'}}
  name="basic"
  onFinish={onFinish}
  autoComplete="off"
>
<label>이름</label>
  <Form.Item
    name="nickname"
    rules={[
      {
        required: true,
        message: 'Please input your nickname!',
      },
    ]}
  >
    <Input placeholder='이름'/>
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
  <Form.Item shouldUpdate>
  {() => (
    <SubmitBtn disabled={
      !form.isFieldsTouched(true) ||
      !!form.getFieldsError().filter(({ errors }) => errors.length).length
    } type="primary" htmlType="submit">
      계정 만들기
    </SubmitBtn>
  )}
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