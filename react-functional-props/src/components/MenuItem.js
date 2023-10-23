const MenuItem = (props) => {
  return(
    <>
      <p>{props.item.name}</p>
      {/* Conditional Rendering: */}
      {/* props.item.ordered === true: display "ordered" */}
      {/* if props.item.ordered === false: nothing will display */}
      {props.item.ordered &&
        <p>Ordered</p>
      }
      {/* Use an anonymous function to invoke our onclick to avoid a stack overflow */}
      <button onClick={() => props.orderItem(props.index)}>Order</button>
    </>
  )
}

export default MenuItem