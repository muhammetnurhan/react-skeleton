import { Link } from "react-router-dom"
import React from "react"
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Dashboard } from "./Dashboard";
import { Footer } from "./Footer";

export const Wrapper = ({ children }) => {
    const [show, setShow] = React.useState(true)
    const sendDataToParent = (val) => {
        setShow(val)
    };
    return (
        <div className="wrapper">
            <Header />
            <Menu />
            <div>
                <div className="content-wrapper">
                    <section className="content">
                        <div className="container-fluid">
                            {children}
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
};