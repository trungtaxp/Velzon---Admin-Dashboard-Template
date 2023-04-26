import React, { useEffect } from 'react';
import Navbar from "./Navbar";
import Home from "./Home";
import Connect from './Connect';
import Products from "./Products";
import Features from './Features';
import Trending from "./Trending ";
import DiscoverItems from "./DiscoverItems";
import TopCreator from "./TopCreator ";
import CTA from './CTA';
import Footer from "./footer";
import { useDispatch } from "react-redux";
import { changeBackgroundImageType } from "../../../store/actions";


const Index = () => {
    document.title = " Landing | Velzon - React Admin & Dashboard Template";

    const dispatch = useDispatch();

    window.onscroll = function () {
        scrollFunction();
    };

    const scrollFunction = () => {
        const element = document.getElementById("back-to-top");
        if (element) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }
    };

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        dispatch(changeBackgroundImageType("none"));
    });

    return (
        <React.Fragment>
            <div className="layout-wrapper landing">
                <Navbar />
                <Home />
                <Connect />
                <Products />
                <Features />
                <Trending />
                <DiscoverItems />
                <TopCreator />
                <CTA />
                <Footer />
                <button onClick={() => toTop()} className="btn btn-primary btn-icon landing-back-top" id="back-to-top">
                    <i className="ri-arrow-up-line"></i>
                </button>
            </div>
        </React.Fragment>
    );
};

export default Index;