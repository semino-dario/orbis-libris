import styles from '../page.module.css'
import { StaticImageData } from 'next/image'; 


interface CardVerticalProps {
  mainImage: string | StaticImageData,
  title:string,
    description: string
}

const CardVertical: React.FC<CardVerticalProps> = ({ mainImage, title, description}) => {
  
  const imageSource = typeof mainImage === 'string' ? mainImage : mainImage.src;

  
  return (
        <article className={`${styles.artv} ${styles.cardStyle}` }>
        <img
          className={styles.imgCard}
          src={imageSource}
          alt=""
        />
        <div className={styles.contentVertical}>
          <p className={styles.titleVertical}>{title}</p>
          <p className={styles.cardText}>
            {description}
          </p>
        </div>
      </article>
    )
}

export default CardVertical