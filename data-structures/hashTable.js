var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var smallestLimit = 4;
  var storageLimit = smallestLimit;
  var size = 0;

  result.insert = function(key, value) {
    let hash = getIndexBelowMaxForKey(key, storageLimit);
    let initialSize = size;

    if (storage[hash] === undefined) {
      storage[hash] = [[key, value]];
      size += 1;
    } else {
      let keys = storage[hash].map(item => item[0]);
      let keyIndex = keys.indexOf(key);
      if (keyIndex !== -1) {
        storage[hash][keyIndex][1] = value;
      } else {
        storage[hash].push([key, value]);
        size += 1;
      }
    }

    if (size > initialSize) {
      this._assureSize(true);
    }
  };

  result.retrieve = function(key) {
    let hash = getIndexBelowMaxForKey(key, storageLimit);
    let bucket = storage[hash];
    if (bucket === undefined) {
      return undefined;
    }

    for (tuple of bucket) {
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
  };

  result.remove = function(key) {
    let hash = getIndexBelowMaxForKey(key, storageLimit);
    storage[hash] = storage[hash].filter(item => {
      let keep = item[0] !== key;
      if (!keep) {
        size -= 1;
        this._assureSize(false);
      }
      return keep;
    });
  };

  result._assureSize = function(isIncrease) {
    let ratio = size / storageLimit;
    if (isIncrease) {
      if (ratio > 0.75) {
        this._resize(storageLimit * 2);
      }
    } else if (storageLimit > smallestLimit) {
      this_.remove(storageLimit / 2);
    }
  };

  result._resize = function(newLimit) {
    let oldStorage = storage;
    storageLimit = newLimit;
    storage = [];
    size = 0;

    for (i in oldStorage) {
      let bucket = oldStorage[i];
      for (tuple of bucket) {
        result.insert(...tuple);
      }
    }
  };

  return result;
};
