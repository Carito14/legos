const navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-danger .text-white">
      <div class="container-fluid .text-white">
        <a class="navbar-brand .text-white" href="#"></a>
        <button
          class="navbar-toggler .text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse .text-white"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav .text-white">
            <a class="nav-link active .text-white" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link .text-white" href="#">
              About
            </a>
            <a class="nav-link" href="#">
              Lego Store
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default navbar
