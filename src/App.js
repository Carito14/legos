import './App.css'
import data from './data/legos.json'
import Legos from './components/Legos'
import Navbar from './components/Navbar'
import Prices from './components/Prices'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <h1> Lego Set vs Real Thing</h1>
      <Prices />
      <Legos data={data} />
    </div>
  )
}

export default App
