

const objectHandler = {

  // 객체 depth (recursive)
  flatten: function (ob) {
    let toReturn = {};
    for (let i in ob) {
      if (!ob.hasOwnProperty(i)) continue;

      if ((typeof ob[i]) == 'object') {
        let flatObject = objectHandler.flatten(ob[i]);
        for (let x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;

          toReturn[i + '.' + x] = flatObject[x];
        }
      } else {
        toReturn[i] = ob[i];
      }
    }
    return toReturn;
  },

  unFlatten: function (data) {
    var result = {}
    for (var i in data) {
      console.log(data)
      var keys = i.split('.')
      keys.reduce(function (acc, cur, idx) {
        console.log(acc)
        return acc[cur] || (acc[cur] = isNaN(Number(keys[idx + 1])) ? (keys.length - 1 == idx ? data[i] : {}) : [])
      }, result)
    }
    return result;
  }

}


module.exports = objectHandler