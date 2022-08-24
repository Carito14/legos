import Prices from './Prices'

const Legos = (props) => {
  console.log(props)
  return (
    <div>
      <section className="Legos">
        <h1>{props.lego_set_name}</h1>
        <img src={props.lego_set_image} alt="object" class="center"></img>
        <img src={props.real_image} alt="real object" />
        <h3>Price: {props.price}</h3>
        <a href="https://www.lego.com/en-us">
          <button>Buy</button>
        </a>
        {/* {props.price.map((price) => (
          <Prices key={price.price} />
        ))} */}
      </section>
    </div>
  )
}

export default Legos
