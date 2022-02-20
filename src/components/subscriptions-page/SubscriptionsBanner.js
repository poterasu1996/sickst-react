import bimg1 from "../../assets/img/subs-banner1.jpg";
import SecondaryLink from "../general-components/SecondaryLink";

const SubscriptionsBanner = () => {
  return (
    <>
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
            <SecondaryLink btnname={"Get started"} to="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionsBanner;
