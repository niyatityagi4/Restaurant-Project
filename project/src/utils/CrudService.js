const crud={
    get : function (list){
        return list;
    },

    add : function(list, newObj){
        list.push(newObj);
        return list;
    },

    remove : function(list, id, pk){

        return list.filter(item=>{
            return item[pk]!= id;
        })
    },

    update : function(list, obj, pk ){
        return list.map(item=>{
            if(item[pk]===obj[pk]){
                return obj;
            }
            else{
                return item
            }
        })

    }
}

Object.freeze(crud);
export default crud;