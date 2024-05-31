import React from "react";

const SideBar = ({ selectedTab , setSelectedTab}) => {
  const handleOnclick=(tabName)=>{
    setSelectedTab(tabName);
  }
  return (
    <div 
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar_component"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Menu bar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item" onClick={(event)=>{handleOnclick("Home")}}>
          <a
            href="#"
            className={`nav-link  text-white ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li onClick={(event)=>{handleOnclick("Create-post")}}>
          <a
            href="#"
            className={`nav-link  text-white ${
              selectedTab === "Create-post" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create-post
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
         
        >
          <img
            src="src\assets\Picsart_24-04-17_16-56-21-958.jpg"
            alt="img"
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>satish</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
