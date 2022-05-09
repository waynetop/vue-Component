export function langFilter(val) {
  const langArr = [
    {
      name: "Chinese",
      value: 0,
    },
    {
      name: "English",
      value: 1,
    },
  ];
  let result = "";
  langArr.forEach((item, index) => {
    if (item.value === parseInt(val)) {
      result = item.name;
    }
  });
  return result;
}
