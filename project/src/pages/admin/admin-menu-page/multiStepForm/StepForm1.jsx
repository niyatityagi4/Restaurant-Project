import { Form, Input, Button ,Select, Radio ,Flex} from "antd";
import { useState } from "react";


export default function StepForm1({ form, back, next, payload ,dishGroupOptions }){

  const [showOtherInput, setShowOtherInput] = useState(false);

  function showNextForm (values) {
  payload.current.data = { ...payload.current.data, ...values };
  next();
  }

  function handleSelectChange(value) {
    setShowOtherInput(value === "other");
  }


    return (
    <>
 
    <Form name="Food  Details"
    labelCol={{span: 8,}}
    wrapperCol={{span: 16,}}
    style={{ maxWidth: 600, }}
    onFinish={showNextForm} form={form} autoComplete="off">

    <Form.Item
    label="Dish Name" name="dishName"
    rules={[
    {
        required: true, message: "Please input !",
    },
    ]}
    >
    <Input />

    </Form.Item>

    <Form.Item
          label="Dish Group"
          name="dishGroup"
          rules={[
            {
              required: true,
              message: "Please select a dish group!",
            },
          ]}
        >
          <Select onChange={handleSelectChange}>
            {dishGroupOptions.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
            <Select.Option value="other">other</Select.Option>
          </Select>
        </Form.Item>

        {showOtherInput && (
          <Form.Item
            label="New Dish Group"
            name="dishGroup"
            rules={[
              {
                required: true,
                message: "Please input the new dish group!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        )}


    <Form.Item label="Meal Type" name="mealType"
    rules={[
        {
        required: true, message: "Please input !",
        },
        ]}
    >
          <Radio.Group>
          <Radio value="breakfast">Breakfast</Radio>
            <Radio value="lunch">lunch</Radio>
            <Radio value="dinner">Dinner</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Is Gluten Free" name="isGlutenFree"
    rules={[
        {
        required: true, message: "Please input !",
        },
        ]}
    >
          <Radio.Group>
          <Radio value={true}>true</Radio>
            <Radio value= {false}>false</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Is Veg" name="isVeg"
    rules={[
        {
        required: true, message: "Please input !",
        },
        ]}
    >
          <Radio.Group>
          <Radio value={true}>true</Radio>
            <Radio value= {false}>false</Radio>
          </Radio.Group>
        </Form.Item>

    <Form.Item >
    <Flex style={{ justifyContent: "space-between" , marginTop : '5%'}}>
            <Button type="primary" style={{marginLeft :'15%'}} onClick={back}>
             Cancel
            </Button>
            <Button type="primary" style={{marginLeft :'80%'}}  htmlType="submit">
              Next
            </Button>
          </Flex>
    </Form.Item>
    </Form>
    </>
    );
};
