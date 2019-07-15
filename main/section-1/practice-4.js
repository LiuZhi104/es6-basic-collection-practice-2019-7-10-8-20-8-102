'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
    return (collectionA.filter(n=>objectB.value.indexOf(n.key)!=-1)).map(item=>item.key);
  }
