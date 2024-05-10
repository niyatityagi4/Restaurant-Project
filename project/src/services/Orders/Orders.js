import jData from "./Orders.json"
let data = jData;

export const getData = () => {
  return new Promise((resolve) => {
    resolve(data);
  });
};



