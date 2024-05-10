import React, { useState, useEffect, useRef } from 'react';
import { Table, Space, Modal, Button, Form, Col } from 'antd';
import MultiStepRouter from './multiStepForm/MultiStepForm';
import { getKeyBasedData, remove } from '../../../services/Menu/Menu';



export default function MenuTable({ selectedObj, setUpdatedCount, data, setData }) {
  const [filteredData, setFilteredData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const payload = useRef({ operation: "ADD", data: {} });
  const [dishGroupOptions, setDishGroupOptions] = useState([]);
  const [cuisineOptions, setCuisineOptions] = useState([]);

  function filterMenu(dishList, selectedObj) {
    return dishList.filter((dish) => {
      if ((selectedObj.length === 0 || selectedObj.some((obj) => obj === dish.cuisine)) || (selectedObj.length === 0 || selectedObj.some((obj) => obj === dish.dishGroup))) {
        return true;
      }
      return false;
    });
  }

  useEffect(() => {
    if (data && selectedObj) {
      let filteredMenu = filterMenu(data, selectedObj);
      setFilteredData(filteredMenu);
    }

    console.log("updated")
    getKeyBasedData(data, "cuisine").then((res) => {
      setCuisineOptions(res);
    });

    getKeyBasedData(data, "dishGroup").then((res) => {
      setDishGroupOptions(res);
    });

  }, [data, selectedObj]);

  const initFormData = () => {
    if(payload.current.data.foodId){
        let priceArray = payload.current.data.price;
        let priceObj = {};
        priceArray.map(option=>{
        console.log("op",option.option)
        let op = option.option;
        priceObj[op] = option.amount;

  })
  console.log("priceObj",priceObj)
  payload.current.data.price = priceObj;
      form.setFieldsValue(payload.current.data)
      console.log("payyyyyyyyy", payload)
    }
   else {
    form.resetFields();
   } 
  };

  const addItem = () => {
    payload.current.operation = "ADD";
    payload.current.data = {};
    initFormData();
    setIsModalOpen(true);
  };

  function deleteDish(record) {
    remove(data, record.foodId).then(res => {
      setData(res);
    });
  }

  function updateDishDetails(record) {
    console.log("records", record)
    payload.current.operation = "Update";
    payload.current.data = {...record};
    
    console.log("up",payload.current.data)
    initFormData();
    setIsModalOpen(true);
  }

  const columns = [
    {
      title: 'Image',
      dataIndex: 'url',
      key: 'profilePicture',
      render: (dataIndexValue, record) => <img style={{ maxWidth: '200px', maxHeight: '80px' }} src={dataIndexValue} alt={record.name} />
    },
    {
      title: 'Dish Name',
      dataIndex: 'dishName',
      key: 'dishName'
    },
    {
      title: 'Dish Group',
      dataIndex: 'dishGroup',
      key: 'dishGroup',
    },

    {
      title: 'Cuisine',
      dataIndex: 'cuisine',
      key: 'cuisine',

    },
    {
      title: 'Price',
      dataIndex: '',
      key: 'price',
      render: (index, dish) => {
       
        return dish.price?.map(p => {
          return <p key={index}> {p.option + '- ₹' + p.amount}</p>
        })
      }
    },
    {
      title: 'Actions',
      key: 'action',
      className: 'button',
      render: (_, record) => (
        <Space size="middle">
          <button onClick={() => updateDishDetails(record)} style={{ color: 'blue' }} >edit</button>
          <button onClick={() => deleteDish(record)} style={{ color: 'red' }}>delete</button>
        </Space>
      ),
    },
  ];

  return (
    <>
    
      <Button style={{ marginLeft: '1060px', padding: '0 20px' }} type="primary" onClick={addItem}>Add Item</Button>
      <Col style={{ marginLeft: '20%' }}>
        <Table
          className="app"
          columns={columns}
          dataSource={filteredData}
          pagination={false}
          style={{ width: '100%', marginBottom: '25px' }}
          scroll={{ y: 'calc(78vh - 120px)' }} 
        />
        <Modal title="Food Details" visible={isModalOpen} footer={null} onCancel={() => setIsModalOpen(false)}>
          <MultiStepRouter dishGroupOptions={dishGroupOptions} cuisineOptions={cuisineOptions} setIsModalOpen={setIsModalOpen} data={data} setData={setData} payload={payload} form={form} setUpdatedCount={setUpdatedCount} />
        </Modal>
      </Col>
    </>
  );
}
