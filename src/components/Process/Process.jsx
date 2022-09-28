import React from "react";
import { GoPackage } from "react-icons/go";
import { RiSettings5Fill } from "react-icons/ri";
import { BsFillCalculatorFill } from "react-icons/bs";

import styles from "./Process.module.css";

export const Process = () => {
    return (
        <section className={styles.process}>
            <div className="container">
                <h3 className="section__subtitle">New-Old</h3>
                <h2 className="section__title">Как это работает</h2>

                <div className={styles.processInner}>
                    <hr className={styles.hr} />
                    <div className={styles.processItem}>
                        <span>
                            <RiSettings5Fill size={78} fill="#cf7500" />
                        </span>
                        <div className={styles.processName}>
                            Формирование заказа
                        </div>
                        <div className={styles.processDescription}>
                            Включает в себя конткретное описание желаемого Вами
                            изделия, цветов, размеров
                        </div>
                    </div>

                    <div className={styles.processItem}>
                        <span>
                            <BsFillCalculatorFill size={78} />
                        </span>

                        <div className={styles.processName}>
                            Утверждение цены
                        </div>
                        <div className={styles.processDescription}>
                            После определения с целью работы выявляется конечная
                            стоимость
                        </div>
                    </div>

                    <div className={styles.processItem}>
                        <span>
                            <GoPackage size={78} fill="#cf7500" />
                        </span>

                        <div className={styles.processName}>Доставка</div>
                        <div className={styles.processDescription}>
                            На конечном этапе изготовления утверждается способ и
                            дата доставки
                        </div>
                    </div>
                </div>
                <div className={styles.moreInfo}>
                    <a
                        href="https://www.instagram.com/newold_massiv/"
                        className={styles.button}
                    >
                        <span>подробнее</span>
                    </a>
                    <a
                        href="https://vk.com/newmassiv"
                        className={styles.button}
                    >
                        <span id="reviews">заказать</span>
                    </a>
                </div>
            </div>
        </section>
    );
};
