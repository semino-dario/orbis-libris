import Link from "next/link"
import styles from "../page.module.scss"
import LineOrnament from "./icons/LineOrnament"

interface HeaderProps{
  lightMode?: boolean
}

const Header:React.FC<HeaderProps> = ({lightMode}) => {

    return (
        <header>
          <Link style={{textDecoration:"none"}} href='/'>   
            <div className={`${styles.siteTitle} ${styles.link} ${lightMode ? styles.lightMode : styles.darkMode}`}>
              <h1 className={`${styles.siteName} ${lightMode ? styles.lightMode : styles.darkMode}`}>ORBIS LIBRIS</h1> 
              <p className={`${styles.siteSubTitle} ${lightMode ? styles.lightMode : styles.darkMode}`}>Libros de cualquier tiempo y lugar</p>
              <LineOrnament />
            </div>
          </Link>
        </header>
    )
}

export default Header;