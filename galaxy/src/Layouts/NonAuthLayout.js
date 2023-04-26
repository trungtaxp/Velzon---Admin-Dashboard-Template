import React, { useEffect } from 'react';
import withRouter from '../Components/Common/withRouter';

//redux
import { useSelector } from "react-redux";

const NonAuthLayout = ({ children }) => {
    const {
        layoutModeType, backgroundImageType
    } = useSelector(state => ({
        layoutModeType: state.Layout.layoutModeType,
        backgroundImageType: state.Layout.backgroundImageType,
    }));

    useEffect(() => {
        const landing = window.location.pathname.slice(1);
        const nftLanding = window.location.pathname.slice(1);

        if (layoutModeType === "dark") {
            document.body.setAttribute("data-layout-mode", "dark");
            document.documentElement.setAttribute("data-layout-mode", "dark");
            document.documentElement.setAttribute("data-body-image", backgroundImageType);

            if (landing === "landing") { document.documentElement.setAttribute("data-body-image", "none"); }
            if (nftLanding === "nft-landing") { document.documentElement.setAttribute("data-body-image", "none"); }

        } else {
            document.body.setAttribute("data-layout-mode", "light");
            document.documentElement.setAttribute("data-layout-mode", "light");
            document.documentElement.setAttribute("data-body-image", backgroundImageType);

            if (landing === "landing") { document.documentElement.setAttribute("data-body-image", "none"); }
            if (nftLanding === "nft-landing") { document.documentElement.setAttribute("data-body-image", "none"); }
        }
        return () => {
            document.body.removeAttribute("data-layout-mode");
            document.documentElement.removeAttribute("data-layout-mode");
            document.documentElement.removeAttribute("data-body-image");
        }
    }, [layoutModeType, backgroundImageType]);
    return (
        <div>
            {children}
        </div>
    );
};

export default withRouter(NonAuthLayout);