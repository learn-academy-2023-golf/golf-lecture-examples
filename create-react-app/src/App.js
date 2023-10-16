import Header from './components/Header.js'
import Book from './components/Book.js'
import Footer from './components/Footer.js'
import './App.css'

const App = () => {
  return(
    <>    
      <Header />
      <h1>Golf's Library:</h1>
      <Book />
      <Footer />
    </>
  )
}

export default App