
[![Version](https://img.shields.io/npm/v/simple-dom-bindings.svg)](https://www.npmjs.com/package/simple-dom-bindings)
[![MIT license](https://img.shields.io/npm/l/simple-dom-bindings.svg)](https://github.com/deiucanta/simple-dom-bindings/blob/master/LICENSE)
[![dependencies](https://david-dm.org/deiucanta/simple-dom-bindings.svg)](https://david-dm.org/deiucanta/simple-dom-bindings)
[![devDependency Status](https://david-dm.org/deiucanta/simple-dom-bindings/dev-status.svg)](https://david-dm.org/deiucanta/simple-dom-bindings#info=devDependencies)
[![airbnb code style](https://img.shields.io/badge/code%20style-airbnb-fd5c63.svg)](https://github.com/airbnb/javascript)

---

# Simple Dom Bindings

This enables you to establish multiple two way `smart` bindings with DOM Nodes. 

## Getting Started

### NPM

```shell
npm install simple-dom-bindings --save
```

### Yarn

```shell
yarn add simple-dom-bindings
```


## Usage

```javascript
import { bindObject } from 'simple-dom-bindings'

const App = bindObject([
  {
    accesor: 'version',
    query: '#version',
    initialValue: 1.0.0,
  },
  {
    accesor: 'firstName',
    query: '.firstName',
    initialValue: 'John',
  },
  {
    accesor: 'lastName',
    query: '.lastName',
    initialValue: 'Doe',
  }
])

// at this point your App object has established a two way
// binding with the corresponding DOM nodes

console.log(App)
// { version: 1.0.0, firstName: 'John', lastName: 'Doe' }

// will update the corresponding DOM node value to `Peter`
App.firstName = 'Peter'


// will not update the corresponding DOM node value to `Peter`
// as it is already the same value
App.firstName = 'Peter'

// will update the corresponding DOM node value to `Elon`
App.firstName = 'Elon'
```

I use this mostly in vanilla JS,HTML,CSS projects without a framework.

## Contributing

Before you submit a pull request, please take the following actions.

1. Open an issue describing the contribution you would like to make
2. Discuss until we all agree that your idea is useful for the project
3. Create a pull request but make sure you follow the style guide and the tests pass
4. Voila! You've done an amazing job.

## License

MIT @ [Tushar Sharma](https://twitter.com/tusharf5)
