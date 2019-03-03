// eslint-disable-next-line no-unused-vars
export function bindObject(elements, config) {
  const linkObject = {};
  elements.forEach((element) => {
    Object.defineProperty(linkObject, element.accessor, {
      enumerable: true,
      configurable: false,
      set(val) {
        if (val !== this[`_${element.accessor}`]) {
          this[`_${element.accessor}`] = val;
          document.querySelector(element.query).textContent = val;
        }
      },
      get() {
        return this[`_${element.accessor}`];
      },
    });
    linkObject[element.accessor] = element.initialValue;
  });
  return linkObject;
}
