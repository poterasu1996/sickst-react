import { Fragment, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import HamburgerBtn from "./HamburgerBtn";

import Logo from "./Logo";
import NavMenu from "./NavMenu";
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
            <a className="login">Login</a>
            <HamburgerBtn onClick={() => setModalShow(true)} />
            {/* <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch modal
                </Button> */}

            <SideModal show={modalShow} onHide={() => setModalShow(false)} />
            {/* <a className='menu' href="#" id="mobile-menu" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></a> */}

            {/* <Modal show={true}>Modal</Modal> */}

            {/* modal */}
            {/* <div className="modal fade left-slide" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span className="text">Menu</span>
                                <button className="btn-close" type="button" id="close-modal" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div> */}
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
