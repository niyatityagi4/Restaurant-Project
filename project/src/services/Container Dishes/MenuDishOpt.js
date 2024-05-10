import crud from "../../utils/CrudService";
import MenuDishes from "./menuItems.json"

 export const Main=()=>{
    const menu=MenuDishes
     console.log(menu)
 }
export const getDish =()=>{
    return new Promise(resolve => {
        let list = crud.get(MenuDishes)
        resolve(list);
    })
};

export const addDish = (newDish) =>{
    return new Promise(resolve => {
        let list = crud.add(MenuDishes, newDish)
        resolve(list);
     })
};

export const removeDish = (id)=>{
    return new Promise(resolve =>{
        let list= crud.remove(MenuDishes, id, "foodId")
        resolve(list);
    })
};

export const updateDish = (updateDish) =>{
    return new Promise(resolve =>{
        let list = crud.update(MenuDishes)
        resolve(list);
    })
}
