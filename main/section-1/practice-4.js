'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var collectionAkey=[];
  collectionAkey.push(collectionA.map(m=>m).key);
  return (collectionAkey.filter(x=>
                x==objectB.value.filter(y=>y==x)));
}
