"use client"
import Link from "next/link"
import styles from "../page.module.scss"
import LineOrnament from "./icons/LineOrnament"
import { useArticle } from "./ArticleContext"

const Header = () => {

  const articleContext = useArticle();
  const lightMode = articleContext ? articleContext.lightMode : false;

    return (
        <header>
          <Link style={{textDecoration:"none"}} href='/'>   
            <div className={`${styles.siteTitle} ${styles.link} ${lightMode ? styles.lightMode : styles.darkMode}`}>
              <h1 className={`${styles.siteName} ${lightMode ? styles.lightMode : styles.darkMode}`}>ORBIS LIBRIS</h1> 
              <br />
              {/* <p className={`${styles.siteSubTitle} ${lightMode ? styles.lightMode : styles.darkMode}`}>Libros de cualquier tiempo y lugar</p> */}
              <LineOrnament />
            </div>
          </Link>
        </header>
    )
}

export default Header;