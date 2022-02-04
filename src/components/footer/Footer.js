
const Footer = () => {
    return <footer>
        <div className="container footer">
            <div className="row">
                <div className="col-3">
                    <span className="logo">
                        Sickst
                    </span>
                    <span className="text">Descopera un nou parfum in fiecare luna pentru 60 RON.</span>
                </div>
                <div className="col-2">
                    <span className="title">Despre Sickst</span>
                    <ul>
                        <li className="list-item">
                            <a href="#">Despre noi</a>
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
                            <a href="#">Ofera cadou</a>
                        </li>
                        <li className="list-item">
                            <a href="#">Shop pentru el</a>
                        </li>
                        <li className="list-item">
                            <a href="#">Shop pentru ea</a>
                        </li>
                    </ul>
                    <ul>
                        <li className="list-item">
                            <a href="#">Invita prietenii</a>
                        </li>
                        <li className="list-item">
                            <a href="#">Pool lunar</a>
                        </li>
                    </ul>
                </div>
                <div className="col">
                    <span className="title">Follow</span>
                    <div className="social-links">
                        <a className="insta" href="#">
                            <img src="../../assets/img/svg/instagram.svg"></img>
                        </a>
                        <a className="facebook" href="#">
                            <img src="../../assets/img/svg/instagram.svg"></img>
                        </a>
                        <a className="youtube" href="#">
                            <img src="../../assets/img/svg/instagram.svg"></img>
                        </a>
                    </div>
                </div>
            </div>
            <div className="all-rights">
                <div className="left">
                    <span className="company">SICKST &copy; 2021. All rights reserved. Created in Bucharest</span>
                </div>
                <div className="right">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;