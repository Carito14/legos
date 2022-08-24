import NavItem from './NavItem'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavItem content="Home" />
      <NavItem content="Lego Store" />
      <NavItem content="More Info" />
    </nav>
  )
}

export default NavBar
