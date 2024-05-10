import { Form, Input, Button, Typography, Flex } from "antd";

export default function StepForm2({ form, payload,  success, back  }) {
    function handleSubmit(values) {
        payload.current = { ...payload.current, ...values };
        console.log(payload.current, "3");
        success();
     
    }

    return (
        <div className="step-form-container">
            <Typography.Title level={3} style={{textAlign : 'initial'}}>Personal Details</Typography.Title>
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 18,
                }}
                style={{
                    minWidth: 600,
                    minHeight: 200,
                    marginTop : 30
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={handleSubmit}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="userName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Contact"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 2, span: 55 , marginTop : 15 }}>
                    <Flex style={{justifyContent : 'space-between'}}>
                    <Button type="primary" onClick={back}  style={{marginRight : "15%"}}>
                            Previous
                    </Button>
                    <Button type="primary"  style={{marginRight : "15%"}} htmlType="submit">
                        Next
                    </Button>
                    </Flex>
                </Form.Item>
            </Form>
        </div>
    );
}
