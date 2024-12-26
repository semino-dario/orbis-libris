import Link from "next/link"
import styles from "../page.module.scss"

const Header = () => {

    return (
        <header>
      <div className={styles.siteTitle}>
     <Link className={styles.link} href='/'> <h1 className={styles.siteName}>ORBIS LIBRIS</h1> </Link>
      <p className={styles.siteSubTitle}>Libros de cualquier tiempo y lugar</p>
      </div>
      </header>
    )
}

export default Header;