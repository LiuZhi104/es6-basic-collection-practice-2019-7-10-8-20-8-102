'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(x=>x==collectionB[0].filter(y=>y==x));
}
