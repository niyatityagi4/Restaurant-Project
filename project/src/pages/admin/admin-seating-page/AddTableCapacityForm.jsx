import { Button, Form, Input } from "antd";
// import { updateData } from "../../../services/TableBooking";



export default function AddTableCapacityForm({setAddTableModalForm , count , data ,setData , setUpdatedCount , time}) {
function handleSubmit(values){
 let obj = {"tableId" : count-1, "reservationId" : count , "time" : time};
values = { ...obj , ...values};
setData([...data , values]);
setAddTableModalForm(false);
setUpdatedCount(count => count - 1)
 
}
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      onFinish={handleSubmit}
      autoComplete="off"
    >

      <Form.Item
        label="Add Capacity"
        name="tableCapacity"
        rules={[
          {
            required: true,
            message: "Please input ",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button   type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
