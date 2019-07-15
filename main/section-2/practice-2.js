'use strict';

module.exports = function countSameElements(collection) {
    let transItem=item=>{
        if(item.includes("-")){
            return item.split("-")[0].repeat(item.split("-")[1])
        }else{
            return item;
        }
    }
  return [...new Set(collection.map(transItem).join("").split(""))].map(item=>{return{key:item,count:(collection.map(transItem).join("").split("").filter(i=>i==item).length)}});
}
