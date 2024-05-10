import  { useState, useEffect } from 'react';
import { Table, Space, Modal } from 'antd';
import { getData } from '../../../services/Orders/Orders';


export default function OrderTable() {
  const [data, setData] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalVisible, setModalVisible] = useState(false); 

  const columns = [
    {
      title: 'Sr No.',
      dataIndex: 'key',
      key: 'key',
      className: 'row',
    },
    {
      title: 'Order Id',
      dataIndex: 'orderId',
      key: 'orderId',
      className: 'row',
    },
    {
      title: 'Dish Name',
      dataIndex: 'dishGroup',
      key: 'dishGroup',
      className: 'row',
    },
    {
      title: 'View',
      key: 'action',
      className: 'button',
      render: (_, record) => (
        <Space size="middle">
          <button onClick={() => handleView(record)}>View</button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    getData().then(res => {
      const orders = res.orders.map((order, index) => ({
        ...order,
        key: index.toString(),
        dishGroup: order.dishGroup.toUpperCase(),
      }));
      setData(orders);
    });
  }

  function handleView(record) {
    console.log("r",record)
    setSelectedOrder(record);
    setModalVisible(true);
  }

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <h1 className="heading">Orders Table</h1>
      <Table
        className="app"
        columns={columns}
        dataSource={data}
        pagination={false}
        
      />
      <Modal
        title="Order Details"
        open={modalVisible}
        onCancel={handleCloseModal}
        footer={null}
      >
        {selectedOrder && (
          <div>
            <p><strong>Order Id:</strong> {selectedOrder.orderId}</p>
            <p><strong>Dish Name:</strong> {selectedOrder.dishGroup}</p>
            <p><strong>Time:</strong> {selectedOrder.time}</p>
            <p><strong>Bill:</strong> {selectedOrder.amount}</p>
        
          </div>
        )}
      </Modal>
    </>
  );
}
