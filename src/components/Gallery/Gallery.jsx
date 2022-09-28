import React from "react";

import img1 from "../../assets/img/grid1.jpg";
import img2 from "../../assets/img/grid2.jpg";
import img3 from "../../assets/img/grid3.jpg";
import img4 from "../../assets/img/grid4.jpg";
import img5 from "../../assets/img/grid5.jpg";

import styles from "./Gallery.module.css";

export const Gallery = () => {
    return (
        <section className="section">
            <div className="container relative">
                <h3 className="section__subtitle">New-Old</h3>
                <h2 className="section__title">Галерея</h2>
                <div className={styles.grid}>
                    <img
                        className={styles.gridBig}
                        src={img1}
                        alt="First img"
                    />
                    <img src={img2} alt="Second img" />
                    <img src={img3} alt="Third img" />
                    <img src={img4} alt="Fourth img" />
                    <img src={img5} alt="Fifth img" />
                </div>
                <div id="process" className="dot-2" />
            </div>
        </section>
    );
};
