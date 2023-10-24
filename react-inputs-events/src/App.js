import { useState } from "react"
import UpperCased from './components/UpperCased'

const App = () => {

  const [name, setName] = useState("")

  const handleChange = (e) => {
    // e.target.value is the value that lives inside the input and we set it to state
    setName(e.target.value)
  }

  // We checked to see if the inputs value is in state
  // console.log(name)

  return(
    <>
      <h1>Greeter App</h1>
      <input 
        type="text" 
        // onchange is calling our handleChange function which collects the information from event
        onChange={handleChange}
        value={name}
      />
      {/* passed our state variable name with the input value as props to UpperCased component */}
      <UpperCased name={name} />
    </>
  )
}

export default App