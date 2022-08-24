import NavItems from './NavItems'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavItems content="Home" />
      <NavItems content="Lego Store" />
      <NavItems content="More Info" />
    </nav>
  )
}

export default NavBar
