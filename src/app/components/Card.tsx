import styles from '../page.module.css'
import { StaticImageData } from 'next/image'; 

interface CardProps {
    mainImage: string | StaticImageData,
    title:string,
    description: string
    cardType:string
}

const Card: React.FC<CardProps> = ({ mainImage, title, description, cardType }) => {
  
  const imageSource = typeof mainImage === 'string' ? mainImage : mainImage.src;

  
  return (
        <article className={`${cardType} ${styles.cardStyle}` }>
        <img
          className={styles.imgCard}
          src={imageSource}
          alt=""
        />
        <div className={styles.cardContent}>
          <p className={styles.cardTitle}>{title}</p>
          <p className={styles.cardText}>
            {description}
          </p>
        </div>
      </article>
    )
}

export default Card