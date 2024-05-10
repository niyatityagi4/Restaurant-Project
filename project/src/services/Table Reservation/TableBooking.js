import crud from '../../utils/CrudService';
import data from './TableBooking.json';



export const  getData = () =>{
    return new Promise(resolve =>{
        resolve(data);
    });
}

export const updateData = (list , newObj , time) =>{
    return new Promise(resolve =>{
       
        let result = crud.update(list , newObj , 'tableId' , time);
       
        resolve(result);
    })
}

export const removeObj = (list,id ) => {    
    return new Promise(resolve => {
        //const response = fetch(url/removePlayer)
        let newList = crud.remove(list, id )
        resolve(newList);

    })
};

