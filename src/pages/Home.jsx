import React from "react";

import {
    Footer,
    Gallery,
    Header,
    Process,
    Service,
    ReviewsSlider,
} from "../components";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="bg-image" />
            <div className="dot" id="service" />
            <Service />
            <Gallery />
            <Process />
            <ReviewsSlider />
            <Footer />
        </div>
    );
};

export default Home;
