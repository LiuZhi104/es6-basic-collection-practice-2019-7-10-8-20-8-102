'use strict';

module.exports = function countSameElements(collection) {
let transItem=item=>{
    if(item.replace(/[^0-9]+/g,'')){
        return item[0].repeat(+(item.replace(/[^0-9]+/g,'')));
    }else{
        return item;
    }


}

  return [...new Set(collection.map(transItem).join("").split(""))].map(item=>{return{name:item,summary:(collection.map(transItem).join("").split("").filter(i=>i==item).length)}});
}
