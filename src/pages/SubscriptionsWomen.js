import { Fragment } from "react";
import Header from "../components/header/Header";
import SubscriptionsBanner from "../components/subscriptions-page/SubscriptionsBanner";
import CollectionSection from "../components/subscriptions-page/CollectionSection";

const SubscriptionsWomen = () => {
    return (
        <Fragment>
            <div className="subs-body">
                <SubscriptionsBanner />
                <CollectionSection />
            </div>
        </Fragment>
    );
}

export default SubscriptionsWomen;