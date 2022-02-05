
import NavLink from "../header/NavLink";

import insta from '../../assets/img/svg/instagram.svg'
import facebook from '../../assets/img/svg/facebook.svg'
import youtube from '../../assets/img/svg/youtube.svg'

const Footer = () => {
    return <footer>
        <div className="container footer">
            <div className="row">
                <div className="col-4">
                    <span className="logo">
                        Sickst
                    </span>
                    <span className="text">Descopera un nou parfum in fiecare luna pentru 60 RON.</span>
                </div>
                <div className="col-2">
                    <span className="title">Despre Sickst</span>
                    <ul>
                        <li className="list-item">
                            <NavLink btnName={'Despre noi'} to={'/about-us'} />
                        </li>
                        <li className="list-item">
                            <a href="#">Ajutor</a>
                        </li>
                        <li className="list-item">
                            <a href="#">Contact</a>
                        </li>
                        <li className="list-item">
                            <a href="#">Reviews</a>
                        </li>
                    </ul>
                </div>
                <div className="col-2">
                    <span className="title">Shop</span>
                    <ul>
                        <li className="list-item">
                            <a href="#">Shop</a>
                        </li>
                        <li className="list-item">
                            <NavLink btnName={'Ofera cadou'} to={'/gift'} />
                        </li>
                        <li className="list-item">
                            <NavLink btnName={'Shop pentru el'} to={'subscription/men'} />
                        </li>
                        <li className="list-item">
                            <NavLink btnName={'Shop pentru ea'} to={'subscription/women'} />
                        </li>
                    </ul>
                    <ul>
                        <li className="list-item">
                            <NavLink btnName={'Invita prietenii'} to={'/referall'} />
                        </li>
                        <li className="list-item">
                            <NavLink btnName={'Pool lunar'} to={'/monthly-pool'} />
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <span className="title">Follow us</span>
                    <div className="social-links">
                        <a className="insta" href="#">
                            <img src={insta}></img>
                        </a>
                        <a className="facebook" href="#">
                            <img src={facebook}></img>
                        </a>
                        <a className="youtube" href="#">
                            <img src={youtube}></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="all-rights">
                <div className="left">
                    <span className="company">SICKST &copy; 2021. All rights reserved. Created in Bucharest</span>
                </div>
                <div className="right">
                    <NavLink btnName={'Privacy Policy'} to={'/privacy-policy'} />
                    <NavLink btnName={'Terms & Conditions'} to={'/terms'} />
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;