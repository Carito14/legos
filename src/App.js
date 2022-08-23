import './App.css'
import data from './data/legos.json'
import Legos from './components/Legos'

const App = () => {
  return (
    <div className="App">
      <h1> Lego Set vs Real Thing</h1>
      <Legos data={data} />
    </div>
  )
}

export default App
