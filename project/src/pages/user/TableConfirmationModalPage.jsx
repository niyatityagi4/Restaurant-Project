import { Typography, Flex, Card } from "antd";

const { Title, Paragraph } = Typography;

export default function ConfirmationModal({ payload }) {
  return (
    <Card
      style={{
        width: '50%',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        marginBottom : '5%'
      }}
    >
      <Flex
        style={{
          flexDirection: "column",
          padding: "24px",
          backgroundColor: "white",
          textAlign : 'center'
        }}
      >
        <Title level={3} style={{ color: "black", marginBottom: "16px" }}>
        🎀  Congratulations {payload.current.userName} 🎀
        </Title>

        <Paragraph style={{ color: "#1890ff", fontSize: "18px", marginBottom: "16px" }}>
          We are delighted to confirm your table booking at Delisho.
        </Paragraph>

        <Paragraph style={{ color: "black", fontSize: "18px", marginBottom: "16px" }}>
          Your Booking Details 
          <ul style={{ listStyleType: "none", paddingLeft: 0 , border : '1px solid grey'}}>
            <li style={{marginRight : '4%'}}>
              <span style={{ color: "#4B0082"  , marginRight : '2%'}}>Username </span>{" :  "}
              <span style={{ color: "#eb2f96" ,marginLeft : '2%'}}>
                {payload.current.userName}
              </span>
            </li>
            <li>
              <span style={{ color: "#4B0082" , marginRight : '2%'}}>Timing  </span>{": "}
              <span style={{ color: "#eb2f96",marginLeft : '2%' }}>{payload.current.time}</span>
            </li>
            <li style={{marginRight : '8%'}}>
              <span style={{ color: "#4B0082" , marginRight : '1%'}}>Members </span>{": "}
              <span style={{ color: "#eb2f96" ,marginLeft : '2%'}}>
                {payload.current.memberCount}
              </span>
            </li>
            <li style={{marginRight : '8%'}}>
              <span style={{ color: "#4B0082" , marginRight : '2%'}}>Table No </span>{" :"}
              <span style={{ color: "#eb2f96" ,marginLeft : '2%'}}>{payload.current.tableId}</span>
            </li>
          </ul>
        </Paragraph>

        <Paragraph style={{ color: "#1890ff", fontSize: "18px", marginBottom: "6px" }}>
          Your reservation is now confirmed, and we look forward to welcoming
          you to Delisho. Our team is committed to providing you with a
          memorable dining experience.
        </Paragraph>

        <Paragraph style={{ color: "#1890ff", fontSize: "18px", marginBottom: "4px" }}>
          Thank you for choosing Delisho. We can't wait to serve you!
        </Paragraph>

        <Title>Terms & Conditions</Title>
        <Paragraph style={{ color: "black", fontSize: "14px", marginBottom: 0 }}>
         Each Table is reserved for 2 hours.
          we will keep your table for 30 minutes after booking time.
          if you don't show up after 30 minutes , your booking will be cancelled and 
          considered a no-show.
        </Paragraph>
      </Flex>
    </Card>
  );
}
