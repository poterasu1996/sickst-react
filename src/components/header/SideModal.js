import { Fragment } from "react";
import { Button } from "react-bootstrap";
import SecondaryButton from "../general-components/SecondaryButton";
import Transition from "react-transition-group/Transition";

const SideModal = (props) => {
    return (
        <Fragment>
            <div 
                className="side-modal-bg"
                style={{
                    display: props.show === true
                    ? "block"
                    : "none",
                }}
                onClick={props.onHide}
            ></div>
            <Transition
                in={props.show} 
                timeout={10}   
            >
                {state => (
                    <div className="side-modal"
                        id="side-modal"
                        style={{
                            transform: state === 'entered' 
                            ? "translateX(0px)" 
                            : "translateX(100%)",
                            transition: "all .5s ease"
                        }}
                    >
                        <div className="side-modal-header">
                            <span className="text">Menu</span>
                            <Button 
                                variant="close"
                                onClick={props.onHide}
                            ></Button>
                        </div>
                        <div className="side-modal-body">
                            <div className="mid-menu">
                                <a href="#">Cum functioneaza</a>
                                <a href="#">Gifts</a>
                                <a href="#">Despre noi</a>
                            </div>
                            <SecondaryButton btnName={'Autentificare'} to={'/register'} onClick={props.onHide} />
                        </div>
                    </div>
                )}
            </Transition>
        </Fragment>
    );
}

export default SideModal;