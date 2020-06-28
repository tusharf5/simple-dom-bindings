# Simple Dom Bindings

This **experimental** library enables you to establish multiple two way `smart` bindings with DOM Nodes.The idea is to create a JS virtual dom library that creates smart bindings with js objects in a script or application just like how in React your JSX automatically flushes all the changes to vDOM and then from there only the new changes are commited to the actual DOM. It would be amazing if instead of JSX we could connect vDOM directly with objects that contain your state even in non-react applications.

## Getting Started

## Usage

```js
import { bindToDOM } from 'simple-dom-bindings'

const App = bindToDOM([
  {
    accessor: 'version',
    query: '#version',
    initialValue: '1.0.0',
  },
  {
    accessor: 'firstName',
    query: '.firstName',
    initialValue: 'John',
  },
  {
    accessor: 'firstNameClass',
    attribute: 'class', // can bind to dom attributes
    query: '.firstName',
    initialValue: 'primary-text',
  },
  {
    accessor: 'lastName',
    query: 'input#lastName', // handle text inputs
    initialValue: 'Doe',
  }
])

// at this point your App object has established a two way
// binding with the corresponding DOM nodes

console.log(App)
// { version: '1.0.0', firstName: 'John', firstNameClass: 'primary-text' , lastName: 'Doe' }

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
