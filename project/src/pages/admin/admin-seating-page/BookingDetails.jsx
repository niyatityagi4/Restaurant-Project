export default function BookingDetails({selectedBooking}){
 
    return(
        <div>
            {selectedBooking && selectedBooking.length > 0 && (
            <div>

              {selectedBooking[0].userName && <p>
               <strong>User Name:</strong> {selectedBooking[0].userName}
              </p>}
              {selectedBooking[0].contact &&<p>
               <strong>Contact No :</strong> {selectedBooking[0].contact}
              </p>}
              { selectedBooking[0].memberCount &&<p>
              <strong>Total Members :</strong> {selectedBooking[0].memberCount}
              </p>}
              {<p>
              <strong>Table Capacity :</strong> {selectedBooking[0].tableCapacity}
              </p>}
              {selectedBooking[0].orders && <p style={{ display: "flex", flexWrap: "wrap" }}>
                <strong>Orders:</strong>
                {selectedBooking[0].orders.map((item, index) => {
                  return (
                    <li style={{ marginLeft: "5px" }} key={index}>
                      {item.dishName}
                    </li>
                  );
                })}
              </p>}
             
              {selectedBooking[0].bill &&<p style={{ backgroundColor: "lightblue" }}>
                <strong>Bill:</strong> {selectedBooking[0].bill}
              </p>}
            </div>
          )}
     
        </div>
    )
}