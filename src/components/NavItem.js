const NavItem = (props) => {
  console.log(props.content)

  return <span className="item">{props.content}</span>
}

export default NavItem
