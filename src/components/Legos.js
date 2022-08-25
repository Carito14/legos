import Prices from './Prices'

const Legos = (props) => {
  console.log(props)
  return (
    <div>
      <section className="Legos">
        <h1>{props.lego_set_name}</h1>

        <img className="bottom" src={props.lego_set_image} alt="object" />
        <img className="top" src={props.real_image} alt="real object" />

        <a href={props.website}>
          <button>Buy Now</button>
        </a>
        <Prices price={props.price} />
      </section>
    </div>
  )
}

export default Legos
