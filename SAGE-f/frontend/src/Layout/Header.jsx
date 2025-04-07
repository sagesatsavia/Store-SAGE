import "../Style.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="container-fluid bg-white sticky-top shadow-sm">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-white bg-white">
              <div className="container-fluid">
                {/* Off-canvas toggle button (left side) */}
                <button
                  className="navbar-toggler border-0"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar"
                  style={{ outline: 'none', boxShadow: 'none' }}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                {/* Centered brand name */}
                <div className="mx-auto">
                <Link to={'/'} className="text-dark text-decoration-none">
                <h2 className="headertext mb-0">XALIA</h2>
                </Link>
                </div>

                {/* Shopping bag and person icon (right side) */}
                <div className="d-flex">
                  <Link to={'/cart'} className="text-dark">
                    <i className="bi bi-bag me-2 fs-5"></i>
                  </Link>
                  <Link to={'/menu'} className="text-dark">
                    <i className="bi bi-person mainicons me-3 ms-3"></i>
                  </Link>
                </div>

                {/* Off-canvas navigation */}
                <div
                  className="offcanvas offcanvas-start navText"
                  tabIndex="-1"
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                >
                  <div className="offcanvas-header border-bottom">
                    <h5 className="offcanvas-title fs-2" id="offcanvasNavbarLabel">XALIA</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      style={{ outline: 'none', boxShadow: 'none' }}
                    ></button>
                  </div>
                  <div className="offcanvas-body d-flex flex-column">
                    {/* Main Navigation Links */}
                    <ul className="navbar-nav mb-auto">
                      <li className="nav-item">
                        <Link className="nav-link active fs-5" aria-current="page" to={"/"}>
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link fs-5" to={"/aboutus"}>
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link fs-5" to={"/collections"}>
                          Collections
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link fs-5" to={"/contact"}>
                          Contact
                        </Link>
                      </li>
                    </ul>

                    {/* Newsletter Section */}
                    <div className="border-top pt-4">
                      <h6 className="px-3 mb-3">NEWSLETTER</h6>
                      <div className="px-3 mb-4">
                        <input 
                          type="email" 
                          className="form-control rounded-0 mb-2" 
                          placeholder="Your email address"
                        />
                        <button className="btn btn-dark rounded-0 w-100 mt-2">
                          Subscribe
                        </button>
                      </div>
                    </div>

                    {/* Language & Currency Selector */}
                    <div className="border-top pt-3 mb-5">
                      <select className="form-select rounded-0 mb-3 mt-2">
                        <option>English (EN)</option>
                        <option>Français (FR)</option>
                      </select>
                      <select className="form-select rounded-0">
                        <option>CAD ($)</option>
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}