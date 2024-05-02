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
     Orbis Libris es un sitio creado y administrado por Darío Semino. En la sección de información del sitio se muestra una foto de la hoja de guarda típica de la colección de libros Robin Hood, con la cual muchas generaciones se iniciaron en la lectura, la foto está tomada de Los Tigre de la Malasia  de Emilio Salgari. Orbis Libris comenzó a estar en línea en el mes de abril de MMXXI, segundo año de la Gran Pandemia que asoló el orbe y le recordó a los frágiles humanos el consuelo de los libros.     </p>
     </div>)}

export default Footer