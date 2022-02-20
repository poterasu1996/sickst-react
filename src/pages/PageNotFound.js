import img from "../assets/img/svg/404.svg"
import SecondaryLink from "../components/general-components/SecondaryLink";

const PageNotFound = () => {
    return <>
        <div className="page-not-found">
            <div className="wrapper">
                <img src={img} alt="page not found"></img>
                <div className="wrapper--info">
                    <div className="title">Oops! Our bad.</div>
                    <div className="text">
                        The page you are looking for does not exist.<br/>
                        Stay calm, take a deep breath and smile.<br/>
                        Try going to sickst.ro<br/>
                    </div>
                    <SecondaryLink className="mt-5" btnname="Go to sickst.ro" to="/" />
                </div>
            </div>
        </div>
    </>
}

export default PageNotFound;