import { Fragment } from "react";

import SecondaryButton from "../general-components/SecondaryButton";

import bimg1 from "../../assets/img/subs-banner1.jpg";

const SubscriptionsBanner = () => {
  return (
    <Fragment>
      <div className="subs-banner">
        <div
          className="subs-banner--wrapper"
          style={{
            backgroundImage: `url(${bimg1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="subs-banner--content">
            <div className="title">You can have it all</div>
            <div className="description">
              Balancing perfumery with environmental responsibility, Skylar
              proves that you can have safe, clean scents that smell utterly
              alluring.
            </div>
            <SecondaryButton btnName={"Get started"} to={"/register"} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SubscriptionsBanner;
