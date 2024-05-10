import { Card, Modal, Form, Row, Col, Button, Typography ,Flex ,Divider} from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
// import { getData, removeObj } from "./../../../services/TableBooking";
import { useEffect, useRef, useState } from "react";
import SingleStepForm from "./CreateUpdateSeatingForm";
import AddTableCapacityForm from "./AddTableCapacityForm";
import BookingDetails from "./BookingDetails";
import { removeObj } from "../../../services/Table Reservation/TableBooking";

export default function Dinner({data}) {
  const [dinnerData, setDinnerData] = useState(null);
  const [totalTables, setTotalTable] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [modalVisible, setModalVisible] = useState(false);
  const [formModalVisible, setFormModalVisible] = useState(false);
  const [count, setCount] = useState(11);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [updatedCount, setUpdatedCount] = useState(0);
  const [addTableModal, setAddTableModalForm] = useState(false);
  const [form] = Form.useForm();
  let payload = useRef(null);

  useEffect(() => {
 
    let orders = data.bookings.filter((order) => order.time === "dinner");
    setDinnerData(orders)
  }, []);

  function handleTables() {
    let newArr = [...totalTables, count];
    setTotalTable(newArr);
    setAddTableModalForm(true);
    setCount(count + 1);
  }

  function showBookingDetails(event, time) {
    let selectedBooking = dinnerData.filter((item) => item.tableId === event && time === item.time);
    setSelectedBooking(selectedBooking);
    setModalVisible(true);
  }

  function handleForm(item, time) {
    payload.current = dinnerData.find((d) => d.tableId === item && d.time === time);
    payload.current ? form.setFieldsValue(payload.current) : form.resetFields();
    setFormModalVisible(true);
  }

  function handleDelete(tableId) {
    removeObj(totalTables, tableId).then(res => {
      setTotalTable(res);
    });
  }

  function handleFormCancel() {
    payload.current = null;
    setFormModalVisible(false);
  }

  return (
    <>
      <Flex style={{ marginTop: '60px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography.Title level={2} style={{ margin: 0 }}>Dinner</Typography.Title>

        {/* Add Button */}
        <Button onClick={handleTables} style={{ fontWeight: "bold", backgroundColor: "#FFD700" }}>Add Table</Button>
      </Flex>

      <Modal
        title="Table Capacity"
        open={addTableModal}
        footer={null}
        onCancel={() => setAddTableModalForm(false)}
      >
        <AddTableCapacityForm setAddTableModalForm={setAddTableModalForm} count={count} data={dinnerData} setData={setDinnerData} setUpdatedCount={setUpdatedCount} time="dinner" />
      </Modal>

      <Divider />

      <Row gutter={[16, 16]}>
        {totalTables.map((item, id) => {
          const isBooked = dinnerData && dinnerData.some((booking) => booking.tableId === item && booking.userName);
          const cardStyle = {
            height: "64px",
            backgroundColor: isBooked ? "#40a8c4" : "#bcdbdf",
          };

          return (
            <Col key={id} xs={12} sm={6} md={4} lg={3}>
              <Card style={{ ...cardStyle, cursor: 'pointer' }} onClick={() => showBookingDetails(item, "dinner")}>
                <Typography.Title level={4} style={{ textAlign: "center", paddingTop: '16px', margin: 0 }}>{item}</Typography.Title>
              </Card>
              <Row xs={24} sm={12} md={8} lg={6}>
                  <Button  onClick={() => handleForm(item, "dinner")} style={{ border: 'none'  , width : '50%' ,}}><EditOutlined style={{ color: "#1890ff" , fontSize :'10px'}} /></Button>
                  <Button  onClick={() => handleDelete(item)} style={{ border: 'none'  , width : '50%' }}><DeleteOutlined style={{ color: "#ff4d4f" , fontSize :'10px'}} /></Button>
                </Row>
            </Col>
          );
        })}
      </Row>

      <Modal
        title="Booking Details"
        open={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
        <BookingDetails selectedBooking={selectedBooking} />
      </Modal>

      {formModalVisible && (
        <Modal
          title="Edit Details"
          open={formModalVisible}
          footer={null}
          onCancel={handleFormCancel}
        >
          <SingleStepForm
            form={form}
            payload={payload}
            data={dinnerData}
            setData={setDinnerData}
            setFormModalVisible={setFormModalVisible}
            setUpdatedCount={setUpdatedCount}
          />
        </Modal>
      )}
    </>
  );
}
