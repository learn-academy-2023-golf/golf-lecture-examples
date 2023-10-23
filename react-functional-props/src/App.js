import React, {useState} from 'react'
import MenuItem from './components/MenuItem'

const App = () => {
  const [menu, setMenu] = useState([
    {name: "Ribs", ordered: false},
    {name: "BBQ beans", ordered: false},
    {name: "Mashed potatoes", ordered: false},
    {name: "Hot links", ordered: false},
    {name: "Cornbread", ordered: false}
  ])

  const orderItem = (selectedItem) => {
    console.log(selectedItem)
    // find item by index using bracket notation in the menu array
    // access the ordered key
    // reassign the value of ordered to true
    menu[selectedItem].ordered = true
    // Spread operator makes a copy of menu with the update value and then we set state with the updated array
    setMenu([...menu])
  }

  return(
    <>
      <h1>Golf 2023 BBQ</h1>
      <h2>Menu</h2>
      {menu.map((item, index) => {
        return( 
          <MenuItem 
            item={item} 
            orderItem={orderItem}
            index={index}
            key={index}
          />
        )
      })}
    </>
  )
}

export default App