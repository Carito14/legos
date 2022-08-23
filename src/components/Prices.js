const Prices = (props) => {
  let color

  switch (props.price) {
    case '$239.99':
      color = 'orange'
      break
    case '$79.99':
      color = 'green'
      break
    case '$89.99':
      color = 'green'
      break
    case '$119.99':
      color = 'blue'
      break
    case '$99.99':
      color = 'green'
      break
    case '$49.99':
      color = 'green'
      break
    case '$249.99':
      color = 'orange'
      break
    case '$349.99':
      color = 'red'
      break
    case '$229.99':
      color = 'orange'
      break
    case '$399.99':
      color = 'red'
      break
    case '$169.99':
      color = 'blue'
      break
    case '$249.99':
      color = 'orange'
      break
    case '$59.99':
      color = 'green'
      break
    case '$549.99':
      color = 'red'
      break
    case '$209.99':
      color = 'orange'
      break
    case '$199.99':
      color = 'blue'
      break
    case '$679.99':
      color = 'red'
      break
    case '$69.99':
      color = 'green'
      break
    case '$129.99':
      color = 'green'
      break
    default:
      color = 'gray'
  }

  return (
    <div style={{ backgroundColor: color, color: 'white' }}>{props.price}</div>
  )
}

export default Prices
