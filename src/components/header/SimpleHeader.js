import { Fragment } from "react";
import Logo from "./Logo";

const SimpleHeader = () => {
    return <Fragment>
        <header>
            <div className="container header register">
                <Logo />
            </div>
        </header>
    </Fragment>
}

export default SimpleHeader;