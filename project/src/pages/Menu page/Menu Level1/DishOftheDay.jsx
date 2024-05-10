
import React from "react";
import { Button, Card, notification } from "antd";
import LocalStorageService from "../../../services/localStorageService";
import { TranslateFunction } from "../../../utils/internationalization";

const { Meta } = Card;

const DishOftheDay = () => {
  const labels = TranslateFunction("labels");
  const ls = new LocalStorageService();

  const addCardToLS = (props) => {
    ls.set([...ls.get(), ...[props]]);
    notification.success({
      message: "Success",
      description: "Your dish has been successfully added to the cart.",
    });
  };

  return (
    <>
      {/* <h2 style={{ textAlign: "center", color: "white", fontStyle: "oblique", fontSize: "4vh", marginTop: "2%"}}>Dish Of The Day</h2> */}
      <Card
        hoverable
        style={{
          marginLeft: "15%",
          marginTop:30,
          width: 330,
          height: 300,
          backgroundImage: `url("https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/malai-kofta-2-500x500.jpg")`,
          backgroundSize: "45vh",
        }}
      >
        <h2 style={{textAlign:'center'}}>Malai Kofta</h2>
        <Meta description={<span style={{ fontWeight: "bolder", color: "black", textAlign:'center' }}>Creamy and flavorful Indian curry with vegetable dumplings in a rich and smooth sauce.</span>} />
        <h2 style={{ color: "black" }}> A MUST TRY FOR TODAY</h2>
        <Button type="primary" onClick={() =>
          addCardToLS({
            title: "Malai Kofta",
            description: 399,
            image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/malai-kofta-2-500x500.jpg",
            quantity: 1
          })
        }>{labels("ADD")}+</Button>
      </Card>
      <br></br>
      <Card
        hoverable
        style={{
          marginLeft: "15%",
          width: 330,
          height: 300,
          backgroundImage: `url("https://christieathome.com/wp-content/uploads/2021/08/Army-Based-Stew-10.jpg")`,
          backgroundSize: "45vh",
        }}
      >
        <h2 style={{textAlign:'center'}}>Korean Stew</h2>
        <Meta description={<span style={{ fontWeight: "bolder", color: "black" }}>A hearty and comforting stew made with chicken, vegetables, and aromatic spices, perfect for chilly evenings.</span>} />
        <h2 style={{ color: "black" }}> A MUST TRY FOR TODAY</h2>
        <Button type="primary" onClick={() =>
          addCardToLS({
            title: "Korean Stew",
            description: 290,
            image: "https://christieathome.com/wp-content/uploads/2021/08/Army-Based-Stew-10.jpg",
            quantity: 1
          })
        }>{labels("ADD")}+</Button>
      </Card>
      <br></br>
      <Card
        hoverable
        style={{
          marginLeft: "15%",
          width: 330,
          height: 300,
          backgroundImage: `url("https://foodwithfeeling.com/wp-content/uploads/2023/05/White-Wine-Pasta-4-680x1020.jpg")`,
          backgroundSize: "45vh",
        }}
      >
        <h2 style={{textAlign:'center'}}>White Sauce Spaghetti</h2>
        <Meta description={<span style={{ fontWeight: "bolder", color: "black" }}>Spaghetti with garlic and olive oil topped with red paprika, sliced olives and with sprinkle of red pepper flakes and herbs.</span>} />
        <h2 style={{ color: "black" }}> A MUST TRY FOR TODAY</h2>
        <Button type="primary" onClick={() =>
          addCardToLS({
            title: "White Sauce Spaghetti",
            description: 400,
            image: "https://foodwithfeeling.com/wp-content/uploads/2023/05/White-Wine-Pasta-4-680x1020.jpg",
            quantity: 1
          })
        }>{labels("ADD")}+</Button>
      </Card>
    </>
  );
};

export default DishOftheDay;
