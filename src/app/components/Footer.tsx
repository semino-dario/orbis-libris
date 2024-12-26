import styles from '../page.module.css'
import { StaticImageData } from 'next/image'; 

interface FooterProps {
    mainImage: string | StaticImageData,
}

const Footer: React.FC<FooterProps> = ({ mainImage }) => {
  
    const imageSource = typeof mainImage === 'string' ? mainImage : mainImage.src;
  
    
    return (

<div className={styles.footer}>
     <img className={styles.closeImage} src={imageSource} alt="" />
     <p className={styles.footerText}>
     Orbis Libris es un sitio creado y administrado por Darío Semino. Comenzó a estar en línea en el mes de abril de MMXXI, segundo año de la Gran Pandemia que asoló el orbe y le recordó a los frágiles humanos el consuelo de los libros.     </p>
     </div>)}

export default Footer