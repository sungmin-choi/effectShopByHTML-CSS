import React,{useState,useEffect} from 'react';
import {Form,Input,Button} from 'antd';
import { ADD_EFFECTS_REQUEST } from '../reducers/effect';
import { useDispatch } from 'react-redux';
import { CustomCard,CustomForm } from '../styles/postFormStyle';


const PostForm = () => {
  const [html,setHtml] = useState('');
  const [css,setCss] = useState('');
  const [title,setTitle] = useState('');
  const [, forceUpdate] = useState({});
  const dispatch = useDispatch();
  const onFinish = (values) =>{
    dispatch({
      type:ADD_EFFECTS_REQUEST,
      data:values
    })
    setHtml('');
    setCss('');
    setTitle('');
  }
  const [form] = Form.useForm();
  useEffect(() => {
    forceUpdate({});
  }, []);

  const initialHtml = `<div class="body">
  <h1>여기안에서 테스트 해 주세요</h1>
</div>`

  return (
    <div style={{position:'relative'}}>
    <CustomForm
    form={form}
    onFinish ={onFinish} 
    name="dynamic_rule">
    <label><h3>Title</h3></label>
    <Form.Item
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input title',
        },
      ]}
    >
      <Input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Please input title" />
    </Form.Item>
    <label><h3>HTML CODE</h3></label>
    <Form.Item 
    name="html"
    rules={[
      {
        required: true,
      },
    ]}>
      <Input.TextArea style={{height:'300px'}} placeholder={initialHtml} value={html} onChange={(e)=>setHtml(e.target.value)}/>
    </Form.Item>
    <label><h3>CSS CODE</h3></label>
    <Form.Item 
    name="css"
    rules={[
      {
        required: true,
      },
    ]}>
      <Input.TextArea style={{height:'300px'}} value={css} onChange={(e)=>setCss(e.target.value)}/>
    </Form.Item>
    <Form.Item >
      <Button disabled={
      !form.isFieldsTouched(true) ||
      !!form.getFieldsError().filter(({ errors }) => errors.length).length
    } type="primary" htmlType="submit">
        생성하기
      </Button>
    </Form.Item>
  </CustomForm>
  <CustomCard data={css} title = {title || `제목`} >
  <div className="effect-container" dangerouslySetInnerHTML={{__html:html || initialHtml}}></div>
  </CustomCard>
  </div>
  )
}

export default PostForm