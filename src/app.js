export default function orderByProps(obj, sortMethod) {
  const array = [];

  for (const key in obj) {
    if (!sortMethod.includes(key)) {
      array.push(key);
    }
  }

  sortMethod.push(...array.sort());

  return sortMethod.reduce((result, elem) => {
    result.push({ key: elem, value: obj[elem] });
    return result;
  }, []);
}

export function destructor(obj) {
  const { special } = obj;

  special.forEach((element) => {
    if (!Object.prototype.hasOwnProperty.call(element, "description")) {
      element.description = "Описание недоступно";
    }
  });

  return special;
}
