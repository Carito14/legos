const Legos = (props) => {
  console.log(props)
  return (
    <div>
      <section className="Legos"></section>

      {props.data.map((legos) => (
        <div className="card">
          <h1>{legos.lego_set_name}</h1>
          <img className="top" src={legos.lego_set_image} />
          <h3>Price: {legos.price}</h3>
        </div>
      ))}
    </div>
  )
}

export default Legos
