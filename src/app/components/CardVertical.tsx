import styles from '../page.module.css'

interface CardVerticalProps {
    mainImage: string,
    title:string,
    description: string
}

const CardVertical: React.FC<CardVerticalProps> = ({ mainImage, title, description}) => {
    return (
        <article className={`${styles.artv} ${styles.cardStyle}` }>
        <img
          className={styles.imgCard}
          src={mainImage}
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