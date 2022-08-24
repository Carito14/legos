import Real from './Real'

const Legos = (props) => {
  console.log(props)
  return (
    <div>
      {props.data.map((legos) => (
        <div className="card">
          <img
            className="rounded mx-auto d-block"
            src={legos.lego_set_image}
            alt="object"
          />
          <Real real_image={legos.real_image} />
          <h5 className="card-title">{legos.lego_set_name}</h5>
          <p className="card-text">Price: {legos.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Legos
