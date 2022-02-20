

import insta from '../../assets/img/svg/instagram.svg'
import facebook from '../../assets/img/svg/facebook.svg'
import youtube from '../../assets/img/svg/youtube.svg'
import { Link } from "react-router-dom";

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
                            <Link to="/about-us">Despre noi</Link>
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
                            <a href="/gift">Ofera cadou</a>
                        </li>
                        <li className="list-item">
                            <a href="/subscriptions-men">Shop pentru el</a>
                        </li>
                        <li className="list-item">
                            <a href="/subscriptions-women">Shop pentru ea</a>
                        </li>
                    </ul>
                    <ul>
                        <li className="list-item">
                            <a href="/referall">Invita prietenii</a>
                        </li>
                        <li className="list-item">
                            <a href="/monthly-pool">Pool lunar</a>
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
                    <Link to='/privacy-policy'>Privacy Policy</Link>
                    <Link to='/terms'>Terms & Conditions</Link>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;