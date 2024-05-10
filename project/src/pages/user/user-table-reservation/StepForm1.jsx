import { Form, Input, Button, Radio, Typography, Flex , Modal } from "antd";
import { useState } from "react";

export default function StepForm1({ form, payload, next, initFormData, data }) {
  const [modalVisible, setModalVisible] = useState(false);
 
  const handleCancel = () => {
    setModalVisible(false);
  };
  function handleSubmit(values) {
    
    payload.current = { ...values };

    const availableTable = data.bookings.find(
      (table) =>
        !table.userName &&
        values.memberCount <= table.tableCapacity &&
        table.time === values.time
    );

    if (availableTable) {
      payload.current.tableId = availableTable.tableId;
      initFormData();
      next();
    } 
    else {
      setModalVisible(true);
    }
  }

  return (
    <>
      <div className="step-form-container">
        <Typography.Title level={3} style={{ textAlign: "initial" }}>
          Basic Details
        </Typography.Title>

        <Form
          form={form}
          name="basic"
          wrapperCol={{
            span: 12,
          }}
          style={{
            minWidth: 600,
            minHeight: 200,
            marginTop: 30,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="No of Members"
            name="memberCount"
            rules={[
              {
                required: true,
                message: "Please input !",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <br />

          <Form.Item
            label="Time"
            name="time"
            rules={[
              {
                required: true,
                message: "Please input !",
              },
            ]}
          >
            <Radio.Group>
              <Flex>
                <Radio style={{ marginRight: "5%" }} value="lunch">
                  Lunch
                </Radio>
                <Radio value="dinner">Dinner</Radio>
              </Flex>
            </Radio.Group>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              style={{ marginRight: "45%" }}
              htmlType="submit"
            >
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>

      <Modal
       
        open={modalVisible}
        onCancel={handleCancel}
        footer = {null}
      >
        <Typography.Title level={3}>😢 sorry no table available</Typography.Title>
      </Modal>
    </>
  );
}
