import './App.css'
import data from './data/legos.json'
import Legos from './components/Legos'
import Prices from './components/Prices'
import Navbar from './components/Navbar'

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
