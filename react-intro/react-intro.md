# React Intro

- React is a JavaScript library for building user interfaces
  - UI (user interface) is something a view that a person interacts with
  - API (Application Programming Interface) transmits data

- Library is a collection of code snippits for developers to use
- JavaScript library are code snippits are node modules
- Package manager - yarn (yet another resorce negotatior) organizes and manages the node modules


- Component based - built from little pieces

- Scalable
  - create code that will work under many conditions
  - can scale easily from 4 users to 4000

- Reusable
  - functions are reusable
  - every function needs a return and the return in React is JSX (JavaScript XML)
    - JSX looks and behaves like HTML but allows us to embed JavaScript code

- User interactions focused
  - DOM (Document Object Model) visual representation of your code.  DOM uses an HTML document as a tree of nodes
    - Node represents a single HTML element
    - DOM reloads are expensive
  - Virtual DOM listens to the individual nodes in the DOM, compares the change and refreshes only the affected elements
- SPA (single page application) - just a single view made up of lots of different components

- Components are little pieces that we can group together to create one React app
  - components are functions
  - functions are named with PascalCasing
  - returns JSX
  - most basic react component:
  ```javascript
  const App = () => {
    return <h1>Hello World!</h1>
  }
  ```

  - Component Call / Invocation: <App />

- App is the nerve center where all components come togeher
- When we need to return more than one element in our component, we need to use JSX fragments (`<></>`)
- Components are reusable and can be called many time as needed

Goal:
- Components are functions
- Components are pieces that can be brought together
- App is the nerve center where all the pieces come together
- Reuse components over and over