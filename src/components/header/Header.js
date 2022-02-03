import { Fragment } from "react";
import { Modal } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Header.module.css'
import Logo from "./Logo";
import NavMenu from "./NavMenu"

const Header = () => {
  const headerClasses = `container ${classes.header}`

  return <Fragment>
    <header>
        <div className={headerClasses}>
            <Logo />
            <NavMenu />
            

            <div className={classes['right-side']}>
                <a className={classes.login}>Login</a>
                <a className={classes.menu} href="#" id="mobile-menu" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></a>

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
  </Fragment>;
};

export default Header;
