import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import classnames from "classnames";

import { data } from "./data";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import styles from "./Header.module.css";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const sidebarRef = useRef(null);

    useOnClickOutside(sidebarRef, () => setIsOpen(false));

    const isOpenHandler = () => setIsOpen((prevState) => !prevState);

    const navigationList = data.map((el) => (
        <li key={el.id} className={isOpen ? styles.burgerLi : styles.li}>
            <a
                href={el.href}
                className={isOpen ? styles.burgerLink : styles.link}
            >
                {el.name}
            </a>
        </li>
    ));

    return (
        <header className={styles.header}>
            <div className="container" ref={sidebarRef}>
                <div className={styles.inner}>
                    <Link to="/" className="react-router-link">
                        <h1 className={styles.logo}>NewOld massiv</h1>
                    </Link>
                    <ul className={styles.ul}>
                        <Link
                            to="/about"
                            className={`${
                                isOpen ? styles.burgerLink : styles.link
                            } mr-40`}
                        >
                            О нас
                        </Link>
                        {navigationList}
                    </ul>

                    {!isOpen && (
                        <FaBars
                            size={20}
                            onClick={isOpenHandler}
                            className={styles.icon}
                        />
                    )}

                    <div
                        className={
                            isOpen
                                ? classnames(styles.burgerMenu, styles.active)
                                : styles.burgerMenu
                        }
                    >
                        <ul className={styles.dropdown}>
                            <ImCross
                                size={20}
                                onClick={isOpenHandler}
                                className={styles.icon}
                            />
                            <li
                                className={isOpen ? styles.burgerLi : styles.li}
                            >
                                <Link
                                    to="/about"
                                    className={
                                        isOpen ? styles.burgerLink : styles.link
                                    }
                                >
                                    О нас
                                </Link>
                            </li>
                            {navigationList}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};
