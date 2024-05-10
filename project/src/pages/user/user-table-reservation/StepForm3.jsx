import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;

export default function StepForm3(){
  const [form] = Form.useForm();
 
  const onFinish = (values) => {
    
    setTimeout(() => {
     
      setLoading(false);
      form.resetFields();
    }, 2000);
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical"
    labelCol={{
        span: 4,
    }}
    wrapperCol={{
        span: 14,
    }}
    style={{
        minWidth: 600,
        minHeight: 200,
        marginTop : 30
    }}>
      <Form.Item
        name="owner"
        label="Username"
        rules={[{ required: true, message: 'Please enter the name ' }]}
  
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="paymentMethod"
        label="Payment Method"
        rules={[{ required: true, message: 'Please select your payment method' }]}
      >
        <Select placeholder="Select a payment method">
          <Option value="card">Credit/Debit Card</Option>
          <Option value="gpay">Google Pay</Option>
          <Option value="phonepe">PhonePe</Option>
        </Select>
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};