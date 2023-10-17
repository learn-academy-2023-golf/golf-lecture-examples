# React State
- State is a special variable that holds information within your application that belongs to a React component.
- State will affect how our page is rendered

- React hook: sets of built in methods that belong to React
- useState is a React hook
  - useState gives us a variable to store temporary data and a method to update the variable
  - state variables can be assigned to any valid data type

```javascript
import React, {useState} from 'react'

const App = () => {
  const [miles, setMiles] = useState(0)

  const addMile = () => {
    setMiles(miles + 1)
  }
  return(
    <>
      <h2>Mile Tracker</h2>
      <p>Miles: {miles}</p>
      <button onClick={addMile}>Add a mile</button>
    </>
  )
}

export default App
```

App.js is the highest level component we are using in our application making it the container component.

Tracker is a presentational component since it's main purpose is to display content