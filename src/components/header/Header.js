import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AuthContext from "../../store/auth-context";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import SideModal from "./SideModal";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  const accountBtn = <Link to="/account">Account</Link>
  const loginBtn = <Link to="/register/login">Log in</Link>

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header>
      <div className="container header">
        <Logo />
        <NavMenu />

        <div className="right-side">
          {!isLoggedIn && loginBtn}
          {isLoggedIn && accountBtn}

          <Button 
            variant="menu"
            onClick={() => setModalShow(true)}
          >
          </Button>

          <SideModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </header>
  );
};

export default Header;
