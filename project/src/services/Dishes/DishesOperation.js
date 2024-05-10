import crud from "../../utils/CrudService";
// import Menu from "./menuItems.json"
import Menu from "./menuPage.json"
 export const MenuMain=()=>{
    const menu=Menu
     console.log(menu)
 }
export const getMenuDish =()=>{
    return new Promise(resolve => {
        let list = crud.get(Menu)
        resolve(list);
    })
};

export const addMenuDish = (newDish) =>{
    return new Promise(resolve => {
        let list = crud.add(Menu, newDish)
        resolve(list);
     })
};

export const removeMenuDish = (id)=>{
    return new Promise(resolve =>{
        let list= crud.remove(Menu, id, "foodId")
        resolve(list);
    })
};

export const updateMenuDish = (updateDish) =>{
    return new Promise(resolve =>{
        let list = crud.update(Menu)
        resolve(list);
    })
}
