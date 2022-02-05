import { Fragment } from "react"
import PrimaryBtn from "../general-components/PrimaryBtn";

const BannerBottom = () => {
    return <div className="banner-bottom">
        <div className="container">
            <div className="col-6 left-side">
                <div>
                    <span className="title">Acceseaza peste 50 de produse in fiecare luna!</span>
                </div>
                <div>
                    <PrimaryBtn btnName={'Autentificare'} to={'/register'} />
                </div>
            </div>
        </div>
    </div>
}

export default BannerBottom;