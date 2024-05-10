import { useEffect, useState} from "react";
import StepForm1 from "./StepForm1";
import StepForm2 from "./StepForm2";



const UI = {
  Form1: "form1",
  Form2: "form2",
};

export default function MultiStepRouter({setIsModalOpen , dishGroupOptions, cuisineOptions, data, setData ,payload, form ,setUpdatedCount}) {
 
  const [ui, setUi] = useState(UI.Form1);
  function success(){
    setUpdatedCount(count =>count+1) ;
    setIsModalOpen(false) ;
     setUi(UI.Form1)
  }

  return (
    <>
      {ui === UI.Form1 && (
        <StepForm1
          back={() =>  setIsModalOpen(false)}
          form={form}
          next={() => setUi(UI.Form2)}
          payload={payload}
          dishGroupOptions = {dishGroupOptions}
        />
      )}
      {ui === UI.Form2 && (
        <StepForm2
          back={() => setUi(UI.Form1)}
          form={form}
          success={success}
          cuisineOptions = {cuisineOptions}
          payload={payload}
            data = {data}
            setData = {setData}
         
        />
      )}
  
    </>
  );
}
