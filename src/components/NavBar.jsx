import { useState } from "react";
import "../assets/stylesheet/style.css";

const NavBar = () => {
  const [whoIsToggled, setWhoIsToggled] = useState({
    feature: false,
    company: false,
  });

  const dropDownFeatureList = () => {
    setWhoIsToggled({ feature: true, company: false });
    console.log(whoIsToggled.feature);
  };

  const dropDownCompanyList = () => {
    setWhoIsToggled({ feature: false, company: true });
    console.log(whoIsToggled.company);
  };

  const closeDropdowns = () => {
    setWhoIsToggled({ feature: false, company: false });
    console.log(whoIsToggled);
  };

  return (
    <nav className="nav-cont">
      <div className="logoOpt-cont">
        <h1 className="main-logo">UPBP</h1>
        <div className="navOpt">
          <div>
            <div
              onClick={() => dropDownFeatureList()}
              onMouseEnter={() => dropDownFeatureList()}
              onMouseLeave={() => closeDropdowns()}
            >
              Features<span>{whoIsToggled.feature ? "^" : "v"}</span>
            </div>
            {whoIsToggled.feature && (
              <div
                className="dropdown-list"
                onMouseEnter={() => dropDownFeatureList()}
                onMouseLeave={() => closeDropdowns()}
              >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
              </div>
            )}
          </div>
          <div>
            <div
              onClick={() => dropDownCompanyList()}
              onMouseEnter={() => dropDownCompanyList()}
              onMouseLeave={() => closeDropdowns()}
            >
              Company<span>{whoIsToggled.company ? "^" : "v"}</span>
            </div>
            {whoIsToggled.company && (
              <div
                className="dropdown-list"
                onMouseEnter={() => dropDownCompanyList()}
                onMouseLeave={() => closeDropdowns()}
              >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
              </div>
            )}
          </div>

          <div>Careers</div>
          <div>About</div>
        </div>
      </div>

      <div className="user-btn">
        <button>login</button>
        <button className="sign-up">Register</button>
      </div>
    </nav>
  );
};

export default NavBar;
