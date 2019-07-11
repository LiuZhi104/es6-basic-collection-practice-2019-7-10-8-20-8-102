'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.map(v=>v.key).filter(x=>x==objectB.value.filter(y=>y==x));
}
