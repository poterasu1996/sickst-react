import subscription1 from '../../assets/img/parfume-img.jpg';
import SecondaryLink from "../general-components/SecondaryLink";

const Subscriptions = () => {
    return <>
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
                        <SecondaryLink className="big" btnname={'Mystery'} to="/"/>

                    </div>
                </div>
            </div>
        </div>

        {/* <div className="row subscriptions">
            <div className="col">
                <div className="container">
                    <div className="col-6 left-side">
                        <img src={subscription1} alt=""></img>
                    </div>
                    <div className="col-6 right-side">
                        <div className="text">
                            <div className="title">Iti place sa detii controlul, stii ce iti doresti?</div>
                            <div className="subtitle">"Sickst" este kitul perfect ce iti permite sa alegi 6 arome preferate, fiind in top cu Fragrance-ul sezonier.</div>
                        </div>
                        <SecondaryButton btnname={'Sickst'} size={'big'}/>
                    </div>
                </div>
            </div>
        </div> */}
    </>
}

export default Subscriptions;