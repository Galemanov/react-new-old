import React from "react";
import {
    FaCat,
    FaCloudSun,
    FaHammer,
    FaInfo,
    FaRegFileAlt,
} from "react-icons/fa";

import styles from "./Service.module.css";

export const Service = () => (
    <section className="section">
        <div className="container">
            <h3 className="section__subtitle">New-Old</h3>
            <h2 className="section__title">Услуги</h2>
            <div className={styles.inner}>
                <div className={styles.item}>
                    <h4 className={styles.title}>
                        <FaCat size={24} />
                        <span>Мебель для дома</span>
                    </h4>
                    <div className={styles.examples}>
                        <div>Столы</div>
                        <div>Стулья</div>
                        <div>Гардеробы</div>
                        <div>Полки</div>
                        <div>Стеллажи</div>
                        <div>Кровати</div>
                        <div>Диваны</div>
                    </div>
                    <div
                        className={styles.hint}
                        datatooltip="Цена на данную категорию определяется индивидуально
                            "
                    >
                        <FaInfo size={24} />
                    </div>
                </div>

                <div className={styles.item}>
                    <h4 className={styles.title}>
                        <FaCloudSun size={24} />
                        <span>Мебель для улицы</span>
                    </h4>
                    <div className={styles.examples}>
                        <div>Столы</div>
                        <div>Стулья</div>
                        <div>Перголы</div>
                        <div>Беседки</div>
                        <div>Предметы ландшафтного дизайна</div>
                    </div>
                    <div
                        className={styles.hint}
                        datatooltip="Цена на данную категорию определяется индивидуально"
                    >
                        <FaInfo size={24} />
                    </div>
                </div>

                <div className={styles.item}>
                    <h4 className={styles.title}>
                        <FaHammer size={24} />
                        <span>Столярные заполнения</span>
                    </h4>
                    <div className={styles.examples}>
                        <div>Входные двери</div>
                        <div>Межкомнатные двери</div>
                        <div>Утеплённые двери</div>
                        <div>Утеплённые окна</div>
                        <div>Банная атрибутика</div>
                    </div>
                    <div
                        className={styles.hint}
                        datatooltip="Цена на данную категорию определяется индивидуально
                            "
                    >
                        <FaInfo size={24} />
                    </div>
                </div>
            </div>

            <div className={styles.individual}>
                <div className={styles.individualItem}>
                    <div className={styles.title}>
                        <FaRegFileAlt size={24} />
                        <span>Разработка технической документации</span>
                    </div>
                    <span className={styles.individualSubtitle} id="gallery">
                        разработка подробного проекта для самостоятельного
                        изготовления мебели
                    </span>
                </div>
            </div>
        </div>
    </section>
);
