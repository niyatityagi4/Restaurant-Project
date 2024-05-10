import { Button, Form, Input } from "antd";
import { updateData } from "../../../services/Table Reservation/TableBooking";




export default function SingleStepForm({ form, payload,data,setData, setFormModalVisible  , setUpdatedCount   }) {
  console.log("pay",payload)
 
  
   function handleSubmit(values) {
    console.log("form",form)
      let obj = {"tableId" : payload.current.tableId , "reservationId" : payload.current.reservationId , "userName" : payload.current.userName , "contact" : payload.current.contact, "time" : payload.current.time , "memberCount" : payload.current.memberCount,"tableCapacity": payload.current.capacity ,  "orders" :  payload.current.orders }
      values = { ...obj , "tableCapacity" : values.tableCapacity}
      console.log(values,"Dd")

      setFormModalVisible(false);
    
      updateData(data,values , payload.current.time).then(res=>{
     
        setData(res)

    setUpdatedCount(count => count + 1);
      })
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
      form={form}
      autoComplete="off"
    >
      {/* <Form.Item
        label="Table Id"
        name="tableId"
        rules={[
          {
            required: true,
            message: "Please input table id!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Reservation Id"
        name="reservationId"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input />
      </Form.Item> */}
      
      <Form.Item
        label="Capacity"
        name="tableCapacity"
        rules={[
          {
            required: true,
            message: "Please input !",
          },
        ]}
      >
        <Input />
      </Form.Item>
{/* 
      <Form.Item
        label="Contact No"
        name="contact"
        rules={[
          {
            required: true,
            message: "Please input !",
          },
        ]}
      >
        <Input />
      </Form.Item>
     
      <Form.Item
        label="Time"
        name="time"
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
        label="Member Count"
        name="memberCount"
        rules={[
          {
            required: true,
            message: "Please input !",
          },
        ]}
      >
        <Input />
      </Form.Item> */}

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
