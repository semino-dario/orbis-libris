import Link from 'next/link';
import styles from '../page.module.scss'
import { StaticImageData } from 'next/image'; 


interface CardVerticalProps {
  mainImage: string | StaticImageData
  title:string
    description: string
    link:string
}

const CardVertical: React.FC<CardVerticalProps> = ({ mainImage, title, description, link}) => {
  
  const imageSource = typeof mainImage === 'string' ? mainImage : mainImage.src;

  
  return (
        <Link href={`articulos/${link}`} className={`${styles.artv} ${styles.cardStyle} ${styles.offDecoration}` }>
        <img
          className={`${styles.imgCard} ${styles.imgTop}`}
          src={imageSource}
          alt=""
        />
        <div className={styles.contentVertical}>
          <p className={styles.titleVertical}>{title}</p>
          <p className={styles.cardText} dangerouslySetInnerHTML={ {__html: description}} /> 
        </div>
      </Link>
    )
}

export default CardVertical