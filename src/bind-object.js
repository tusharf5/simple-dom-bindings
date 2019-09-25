// eslint-disable-next-line no-unused-vars
/**
 *
 * @param elements.accessor key name on the returned object REQUIRED
 * @param elements.initialValue initial value OPTIONAL
 * @param elements.query selector query for the corresponding dom node REQUIRED
 * @param elements.attribute sattribute name for the corresponding dom node OPTIONAL
 * @param config
 */
function bindObject(elements, config) {
  const domCache = {};
  const prototype = {};
  const linkObject = {};
  function setAttr(cache, value) {
    cache.node.setAttribute(cache.attribute, value);
  }
  function setValue(cache, value) {
    if (cache.type === 'text') {
      cache.node.textContent = value;
    } else if (cache.type === 'input') {
      cache.node.value = value;
    }
  }
  elements.forEach(element => {
    const privateField = `__$$${element.accessor}`;
    const field = element.accessor;
    const initialValue = element.initialValue;
    const attribute = element.attribute;
    const node = document.querySelector(element.query);
    if (!node) {
      console.warn(field, 'element not found');
      return;
    }
    domCache[privateField] = { type: '', node };
    // add more types

    if (attribute) {
      domCache[privateField].attribute = attribute;
    } else if (node.constructor.prototype === HTMLInputElement.prototype) {
      domCache[privateField].type = 'input';
    } else if (node.text) {
      domCache[privateField].type = 'text';
    }
    Object.defineProperty(prototype, field, {
      enumerable: false,
      configurable: false,
      set(val) {
        if (val !== this[privateField]) {
          this[privateField] = val;
          if (domCache[privateField].attribute) {
            setAttr(domCache[privateField], val);
          }else {
            setValue(domCache[privateField], val); 
          }
        }
      },
      get() {
        return this[privateField];
      }
    });
    Object.defineProperty(linkObject, field, {
      enumerable: true,
      configurable: false,
      set(val) {
        prototype[field] = val;
      },
      get() {
        return prototype[field];
      }
    });
    initialValue && (linkObject[field] = initialValue);
  });
  return linkObject;
}
