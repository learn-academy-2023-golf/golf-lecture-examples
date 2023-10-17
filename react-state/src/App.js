import Tracker from "./components/Tracker"
import './App.css'

const App = () => {
  return(
    <>
      <h2>Mile Tracker</h2>
      <h3>October</h3>
      <Tracker />
      <h3>November</h3>
      <Tracker />
      <h3>December</h3>
      <Tracker />
    </>
  )
}

export default App