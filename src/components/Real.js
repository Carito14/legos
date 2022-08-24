const Real = (props) => {
  console.log(props)
  return (
    <div className="shadow">
      <img src={props.real_image} alt="real object" />
    </div>
  )
}

export default Real
