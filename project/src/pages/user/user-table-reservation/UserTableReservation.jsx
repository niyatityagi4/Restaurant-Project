import { Form, Layout } from 'antd'
import StepForm1 from './StepForm1';
import StepForm2 from './StepForm2';
import ConfirmationModal from '../TableConfirmationModalPage';
import { useRef, useState } from 'react';
import {Col , Typography , Flex} from 'antd'
import Navbar from '../../Homepage & LogIn/Navbar';
import FooterFile from '../../Homepage & LogIn/FooterFile';
import { Content } from 'antd/es/layout/layout';

const UI = {
    Form1 : "form1",
    Form2 : "form2",
    Modal : "modal"
};

export default function MultiStepRouter({data}){
    const [ui , setUi] = useState(UI.Form1);
    const [form] = Form.useForm();
    let payload = useRef({});
    
console.log("user",data)
    const initFormData = () =>{
        payload.current ? form.setFieldValue(payload.current) : form.resetFields();
    }

    return(
      <Layout>
        {/* <Navbar/> */}
       
       <Col style={{height : '80vh' , backgroundColor : 'white'}}>
       <Typography.Title style={{textAlign : 'center'}}>Table Reservation</Typography.Title>
        <Flex style={{textAlign : 'end', alignContent : 'center' , height : '5%', justifyContent : 'center' ,marginTop : '3%' ,} }>
        {
            ui === UI.Form1 && (
                <StepForm1
                form = {form}
                next = {()=>{setUi(UI.Form2)}}
                initFormData = {initFormData}
                payload = {payload}
                data = {data}
                />
            )
        }
        
               
     {
                ui === UI.Form2 && (
                <StepForm2
                form = {form}
                back = {()=>{setUi(UI.Form1)}}
                success = {() =>{setUi(UI.Modal)}}
                payload = {payload}
                />
            ) 
        }
      {
                ui === UI.Modal && (
                <ConfirmationModal
                form = {form}
                success = {() =>{setUi(UI.Modal)}}
                payload = {payload}
                />
            ) 
        }
        </Flex>
       </Col>
    
       {/* <FooterFile/> */}
       </Layout>
    )

}
