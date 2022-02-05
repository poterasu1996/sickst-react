import { Fragment } from "react";

import subscription1 from '../../assets/img/parfume-img.jpg';
import SecondaryButton from "../general-components/SecondaryButton";

const Subscriptions = () => {
    return <Fragment>
        <div className="row subscriptions">
            <div className="col">
                <div className="container flex-row-reverse">
                    {/* subscription */}
                    <div className="col-6 left-side">
                        <img src={subscription1} alt=""></img>
                    </div>
                    <div className="col-6 right-side">
                        <div className="text">
                            <div className="title">Esti o fire misterioasa? Iti place sa incerci lucruri noi?</div>
                            <div className="subtitle">Alege abonamentul "Mystery" care te va ajuta sa descoperi lunar noi arome.</div>
                        </div>
                        <SecondaryButton btnName={'Mystery'} size={'big'} to={'/register'} />
                    </div>
                </div>
            </div>
        </div>

        <div className="row subscriptions">
            <div className="col">
                <div className="container">
                    {/* subscription */}
                    <div className="col-6 left-side">
                        <img src={subscription1} alt=""></img>
                    </div>
                    <div className="col-6 right-side">
                        <div className="text">
                            <div className="title">Iti place sa detii controlul, stii ce iti doresti?</div>
                            <div className="subtitle">"Sickst" este kitul perfect ce iti permite sa alegi 6 arome preferate, fiind in top cu Fragrance-ul sezonier.</div>
                        </div>
                        <SecondaryButton btnName={'Sickst'} size={'big'} to={'/register'}/>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default Subscriptions;