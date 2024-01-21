export default function getPath(listArray) {
  if (!listArray.length) {
    return '';
  }
  let map = {};
  const first = listArray.shift();
  let result = [first.source, first.destination];

  listArray.map(item => {
    if (result[0] === item.destination) {
      result.unshift(item.source);
    } else if (result[result.length - 1] === item.source) {
      result.push((item.destination));
    } else {
      map[item.source] = item.destination;
    }
  })
  // go through until map exists and add to according side
  while (Object.keys(map).length !== 0
    && (map.hasOwnProperty(result[result.length - 1]) || Object.values(map).includes(result[0]))
  ) {
    let source = result[result.length - 1];
    if (map.hasOwnProperty(source)) {
      result.push(map[source]);
      delete map[source];
    } else {
      Object.entries(map).map(([source, destination]) => {
        if (destination === result[0]) {
          result.unshift(source);
          delete map[source];
        }
      })
    }
  }
  return Object.keys(map).length === 0 ? result.join(', ') : '';
}
