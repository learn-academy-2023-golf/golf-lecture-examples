const UpperCased = (props) => {
  // Create a function that will take props.name as an argument which is our userInput and then return the userInput upper cased using .toUpperCase
  const changeToUpperCase = (userInput) => {
    return userInput.toUpperCase()
  }

  return (
    <>
      <h2>HELLO, I SEE YOUR NAME IS:</h2>
      {/* Display our props of name on the the UpperCased component */}
      {/* Call the function that will manipulate the value so that the output of the function is displayed */}
      <p>{changeToUpperCase(props.name)}</p>
    </>
  )
}

export default UpperCased