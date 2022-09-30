const reduce = (items: Array<any>, callable: Function, init?: any) => {
  let res = init === undefined ? items[0] : init;
  const start = init === undefined ? 1 : 0;
  for (let i = start; i < items.length; i++) {
    res = callable(res, items[i]);
  }
  return res;
};

export default reduce;
