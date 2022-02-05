import { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import HamburgerBtn from "./HamburgerBtn";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
import NavLink from "./NavLink";
import SideModal from "./SideModal";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Fragment>
      <header>
        <div className="container header">
          <Logo />
          <NavMenu />

          <div className="right-side">
            <NavLink btnName={'Login'} to={'/register/login'} />
            <Button 
              variant="menu"
              onClick={() => setModalShow(true)}
            >
            </Button>

            <SideModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
