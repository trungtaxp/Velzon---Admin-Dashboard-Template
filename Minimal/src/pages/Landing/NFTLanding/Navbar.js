import React, {useState, useEffect} from 'react';
import { Collapse, Container, NavbarToggler, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom'; import Scrollspy from "react-scrollspy";


//import Images
import logodark from "../../../assets/images/logo-dark.png";
import logolight from "../../../assets/images/logo-light.png";

const Navbar = () => {
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [navClass, setnavClass] = useState("");

    const toggle = () => setisOpenMenu(!isOpenMenu);

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setnavClass("is-sticky");
        } else {
            setnavClass("");
        }
    }
    return (
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg navbar-landing navbar-light fixed-top " + navClass} id="navbar">
                <Container>
                    <Link className="navbar-brand" to="/index">
                        <img src={logodark} className="card-logo card-logo-dark" alt="logo dark" height="17" />
                        <img src={logolight} className="card-logo card-logo-light" alt="logo light" height="17" />
                    </Link>

                    <NavbarToggler className="navbar-toggler py-0 fs-20 text-body" onClick={toggle} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </NavbarToggler>

                    <Collapse
                        className="navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <Scrollspy
                            offset={-18}
                            items={[
                                "hero",
                                "wallet",
                                "marketplace",
                                "categories",
                                "creators",
                            ]}
                            currentClassName="active"
                            className="navbar-nav mx-auto mt-2 mt-lg-0"
                            id="navbar-example"
                        >
                            <li className="nav-item">
                                <NavLink href="#hero" className="fs-14">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#wallet" className="fs-14">Wallet</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#marketplace" className="fs-14">Marketplace</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#categories" className="fs-14">Categories</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#creators" className="fs-14">Creators</NavLink>
                            </li>
                        </Scrollspy>

                        <div className="">
                            <Link to="/apps-nft-wallet" className="btn btn-primary btn-sm">Wallet Connect </Link>
                        </div>
                    </Collapse>
                </Container>
            </nav>
            <div className="bg-overlay bg-overlay-pattern"></div>
        </React.Fragment>
    );
}

export default Navbar;