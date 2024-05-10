import AmountWiseOrderList from "./AmountWiseOrderList";
import OrderTable from "./OrderTable";
import TimeWiseOrderList from "./TimeWiseOrderList";
import TopDishList from "./TopDishList";


export default function AdminOrderPage(){
   return(
    <div style={{backgroundColor : '#EAE4E6' , paddingBottom: '50px'}}>
      <h1 style={{color:'navy', fontSize: "36px" , fontWeight : 'bold' , textAlign : 'center' , paddingTop : '24px'}}>Orders</h1>
    <div style={{display  : 'flex' , flexDirection : 'column' , }}>
    <TopDishList/>
    <TimeWiseOrderList/>
    <AmountWiseOrderList/>
    <OrderTable/>
    </div>
    </div>
    
   ) 
}