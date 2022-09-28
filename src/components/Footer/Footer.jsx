import React from "react";

import styles from "./Footer.module.css";

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerInner}>
                    <div className={styles.footerLeft}>
                        <div className={styles.phoneItem}>
                            <span>Для заказов: </span>
                            <a href="tel:+79524874136">
                                WhatsApp: +7 (952) 487 41-36
                            </a>
                        </div>
                        <div className={styles.workTime}>
                            Рабочие часы в выходные дни с 10:00 до 18:00.
                        </div>
                        <div className={styles.workEmail}>
                            <a
                                href="https://www.google.com/intl/us/gmail/about/"
                                target="blank"
                            >
                                Email: newoldmassiv@yandex.ru
                            </a>
                        </div>
                    </div>
                    <div className={styles.social}>
                        <a
                            href="https://www.instagram.com/newold_massiv/"
                            target="blank"
                        >
                            Мы в INSTAGRAM!
                        </a>
                        <a href="https://vk.com/newmassiv" target="blank">
                            Мы в VK!
                        </a>
                        <a
                            href="https://www.avito.ru/user/73df6120d23834b0fafd72b649b1def9/profile?src=sharing"
                            target="blank"
                        >
                            Мы в AVITO!
                        </a>
                    </div>
                </div>
                <div className={styles.footerBottom}>© {year}. «NewOld»</div>
            </div>
        </footer>
    );
};
