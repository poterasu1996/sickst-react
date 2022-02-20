import { Fragment } from "react";

import cardImg1 from '../../assets/img/parfume-img.jpg'
import SecondaryLink from "../general-components/SecondaryLink";

const CollectionSection = () => {
    return <Fragment>
        <div className="container collection-section">
            <div className="title">Sickst collection</div>
            <div className="description">Whether you're on that WFH grind or are dreaming of warmer climes, our curated fragrance collections are here to kick off 2021 on a scent-sational note.</div>
            <div className="row collection-cards">
                {/* card */}
                <div className="col-4 card">
                    <div className="card-image">
                        <img src={cardImg1}></img>
                    </div>
                    <div className="card-content">
                        <div className="title">Make It Happen</div>
                        <div className="description">Staying in your comfort zone is so 2021. Boldly go into the new year with these badass scents.</div>
                        <SecondaryLink btnname={'Browse Collection'} to="/" />
                    </div>
                </div>

                <div className="col-4 card">
                    <div className="card-image">
                        <img src={cardImg1}></img>
                    </div>
                    <div className="card-content">
                        <div className="title">Make It Happen</div>
                        <div className="description">Staying in your comfort zone is so 2021. Boldly go into the new year with these badass scents these badass scents.</div>
                        <SecondaryLink btnname={'Browse Collection'} to="/" />
                    </div>
                </div>
                <div className="col-4 card">
                    <div className="card-image">
                        <img src={cardImg1}></img>
                    </div>
                    <div className="card-content">
                        <div className="title">Make It Happen</div>
                        <div className="description">Staying in your comfort zone is so 2021. Boldly go into the new year with these badass scents.</div>
                        <SecondaryLink btnname={'Browse Collection'} to="/" />
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default CollectionSection;