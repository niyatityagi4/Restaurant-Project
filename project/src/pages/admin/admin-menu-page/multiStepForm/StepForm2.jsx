import { Button, Form, Select, Input, Flex } from "antd";
import { useState } from "react";
import { addObj, updateObj } from "../../../../services/Menu/Menu";

export default function StepForm2({
  back,
  form,
  success,
  payload,
  setData,
  data,
  cuisineOptions,
}) {
  console.log("payload",payload)


  const [foodId, setFoodId] = useState(data.length + 1);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [quantityType, setQuantity] = useState("sml");

  const submitForm = (values) => {  
    console.log("hhhhh",values)
    if (!payload.current.data.foodId) {
      payload.current.data.foodId = foodId;
      payload.current.data.key = foodId - 1;
    }
    setFoodId((count) => count + 1);

    let priceObj = values.price;
    const priceArray = Object.keys(priceObj).map((option) => {
      return {
        option: option,
        amount: parseInt(priceObj[option]),
      };
    });

    values.price = priceArray;

    payload.current.data = { ...payload.current.data, ...values };

    if (payload.current.operation === "ADD") {
      addObj(data, payload.current.data).then((dishes) => {
        setData(dishes);
        success();
      });
    } else {
      updateObj(data, payload.current.data, payload.current.data.foodId).then(
        (updatedData) => {
          setData(updatedData);
        
          success();
        }
      );
    }
  };

  function handleSelectChange(value) {
    setShowOtherInput(value === "other");
  }

  function handleQuantity(value) {
    setQuantity(value);
  }

  return (
    <>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        style={{ maxWidth: 600 }}
        onFinish={submitForm}
        form={form}
        autoComplete="off"
        
      >
        <Form.Item
          label="Cuisine"
          name="cuisine"
          rules={[
            {
              required: true,
              message: "Please select a cuisine!",
            },
          ]}
        >
          <Select onChange={handleSelectChange}>
            <Select.Option value="other">other</Select.Option>
            {cuisineOptions.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        {showOtherInput && (
          <Form.Item
            label="New Cuisine"
            name="cuisine"
            rules={[
              {
                required: true,
                message: "Please input the new cuisine!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        )}

        <Form.Item label="Quantity Type">
          <Select onChange={handleQuantity} defaultValue="sml">
            <Select.Option value="sml">Small/Medium/Large</Select.Option>
            <Select.Option value="ml">MilliLitres</Select.Option>
            <Select.Option value="grams">Grams</Select.Option>
          </Select>
        </Form.Item>

        {quantityType && (
          <Form.Item label="Price" 
      >
            {quantityType === "sml" && (
              <>
                <Form.Item label="Small" name={["price", "small" ]}>
                  <Input />
                </Form.Item>
                <Form.Item label="Medium" name={["price", "medium"  ]}>
                  <Input />
                </Form.Item>
                <Form.Item label="Large" name={["price", "large" ]}>
                  <Input />
                </Form.Item>
              </>
            )}
            {quantityType === "grams" && (
              <>
                <Form.Item label="250g" name={["price", "250g"]}>
                  <Input />
                </Form.Item>
                <Form.Item label="500g" name={["price", "500g"]}>
                  <Input />
                </Form.Item>
                <Form.Item label="1000g" name={["price", "1000g"]}>
                  <Input />
                </Form.Item>
              </>
            )}
            {quantityType === "ml" && (
              <>
                <Form.Item label="250ml" name={["price", "250ml"]}>
                  <Input />
                </Form.Item>
                <Form.Item label="500ml" name={["price", "500ml"]}>
                  <Input />
                </Form.Item>
                <Form.Item label="1000ml" name={["price", "1000ml"]}>
                  <Input />
                </Form.Item>
              </>
            )}
          </Form.Item>
        )}

        <Form.Item
          label="Image Url"
          name="url"
          rules={[
            {
              required: true,
              message: "Please input !",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Flex style={{ justifyContent: "space-between" }}>
            <Button type="primary" style={{marginLeft :'15%'}} onClick={back}>
              Previous
            </Button>
            <Button type="primary" style={{marginLeft :'99%'}}  htmlType="submit">
              {payload.current.operation === "ADD" ? "Add " : "Update"}
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </>
  );
}

