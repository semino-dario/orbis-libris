"use client";
import { StaticImageData } from "next/image";
import Header from "../components/Header";
import styles from "../page.module.scss";
import guarda from "./images/hoja-de-guarda.png";
import Link from "next/link";
import { useState } from "react";
import { ArticleProvider } from "./ArticleContext";
import ArticleButtons from "./ArticleButtons";
import { TbBackground } from "react-icons/tb";

interface ArticleProps {
  title: string;
  description: string;
  mainContent: string;
  date: string;
  image: string | StaticImageData;
  url: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  description,
  mainContent,
  image,
  date,
  url,
}) => {
  const imageSource = typeof image === "string" ? image : image.src;
  const [fontSizeBig, setFontSizeBig] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const contextValue = {
    title,
    description,
    mainContent,
    imageSource,
    date,
    url,
    fontSizeBig,
    setFontSizeBig,
    lightMode,
    setLightMode,
    isSticky,
    setIsSticky,
  };

  return (
    <ArticleProvider value={contextValue}>
      <div
        className={`${styles.containerTexts} ${
          lightMode ? styles.lightMode : styles.darkMode
        } `}
      >
        <Header />
        <main className={styles.containerArticle}>
          <img
            className={styles.mainImageArticle}
            src={imageSource}
            alt="imagen principal"
          />
          <header className={styles.hedaerArticle}>
            <h1>{title}</h1>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <ArticleButtons />
          </header>
          <div
            className={`${styles.textArticle} ${
              isSticky ? styles.paddingTopTextArticle : ""
            }`}
            style={{ fontSize: !fontSizeBig ? "1.4rem" : "1.8rem" }}
            dangerouslySetInnerHTML={{ __html: mainContent }}
          />
          <div
            style={{
              marginBlock: "3rem",
              height: "4px",
              backgroundColor: "white",
              width: "100%",
            }}
          ></div>
          <p className={styles.footerArticle}>
            Salvo que se indique lo contrario todos los textos de Orbis Libris
            fueron escritos por{" "}
            <a
              href="https://www.linkedin.com/in/dario-semino/"
              target="_blank"
              className={`${styles.offDecoration} ${styles.colorRed}`}
            >
              {" "}
              Darío Semino
            </a>
            . Para contactarse se puede escribir a orbislibriscontacto@gmail.com
          </p>
          <br />
          <Link href="/" className={styles.closeImage}>
            {" "}
            <img src={guarda.src} className={styles.closeImage} alt="" />
          </Link>
        </main>
      </div>
    </ArticleProvider>
  );
};

export default Article;
