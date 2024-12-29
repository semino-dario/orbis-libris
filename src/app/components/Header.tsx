import Link from "next/link"
import styles from "../page.module.scss"

const Header = () => {

    return (
        <header>
          <Link style={{textDecoration:"none"}} href='/'>   
            <div className={`${styles.siteTitle} ${styles.link}`}>
              <h1 className={styles.siteName}>ORBIS LIBRIS</h1> 
              <p className={styles.siteSubTitle}>Libros de cualquier tiempo y lugar</p>
            </div>
          </Link>
        </header>
    )
}

export default Header;