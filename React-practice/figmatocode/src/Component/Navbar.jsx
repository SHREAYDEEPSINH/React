import React from "react";
import logo from "../Assets/Logo1.png";

function Navbar() {
  return (
    <div className="container">
      <nav
        className="navbar rounded-5  navbar-expand-lg"
        data-bs-theme="dark"
        style={{
          padding: "14px",
          marginTop: "30px",
          marginBottom: "30px",
          boxShadow:
            " rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
          backgroundColor: "#1C1C1C",
          border: "1px solid #262626",
        }}
      >
        <div className="container-fluid">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <a className="navbar-brand" href="#">
                <img src={logo} alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="d-flex justify-content-center collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="m-auto navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item d-flex gap-3">
                  <a
                    className="nav-link active bg-dark rounded-5 ps-3 pe-3"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                  <a className="nav-link active" aria-current="page" href="#">
                    Careers
                  </a>
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                  <a className="nav-link active" aria-current="page" href="#">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex gap-3">
              <button className="bg-transparent border-0 rounded-5">
                Sign Up
              </button>
              <button className=" border-0 rounded-5  ps-4 pe-4 bgyellow text-black ">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
