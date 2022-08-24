import legos from './data/legos.json'
import Legos from './components/Legos'
import NavBar from './components/Navbar'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <h1>Legos Sets Inspired By Real Things</h1>
      <div className="card">
        {legos.map((legos) => (
          <Legos
            lego_set_name={legos.lego_set_name}
            lego_set_image={legos.lego_set_image}
            real_image={legos.real_image}
            price={legos.price}
            website={legos.website}
          />
        ))}
      </div>
    </div>
  )
}

export default App
