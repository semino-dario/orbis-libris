import Link from 'next/link';
import styles from '../page.module.scss'
import { StaticImageData } from 'next/image'; 

interface CardProps {
    mainImage: string | StaticImageData,
    title:string,
    description: string
    cardType:string
    link:string
    imgPosition?:string 
}

const Card: React.FC<CardProps> = ({ mainImage, title, description, cardType, link, imgPosition }) => {
  
  const imageSource = typeof mainImage === 'string' ? mainImage : mainImage.src;
  
  return (

        <Link href={`articulos/${link}`} className={`${cardType} ${styles.cardStyle} ${styles.offDecoration}` }>
        <img
          className={`${styles.imgCard}  ${ !imgPosition ? styles.imgCenter : imgPosition }`}
          src={imageSource}
          alt=""
        />
        <div className={styles.cardContent}>
          <p className={styles.cardTitle}>{title}</p>
          <p className={styles.cardText} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </Link>
    )
}

export default Card