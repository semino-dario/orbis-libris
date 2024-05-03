import { StaticImageData } from 'next/image'
import Header from '../components/Header'
import styles from '../page.module.css'

interface ArticleProps {
    title: string,
    description: string,
    mainContent: string,
    date: string,
    image: string | StaticImageData
}

const Article: React.FC<ArticleProps> = ({title, description, mainContent, image, date}) => {
    
    const imageSource = typeof image === 'string' ? image : image.src;

    return(
        <div className={styles.containerTexts}>
            <Header/>
        <main className={styles.containerArticle}>
            <img src="https://res.cloudinary.com/dsw6fpqoz/image/upload/fl_preserve_transparency/v1714766089/dawn_ul5a8p.jpg?_s=public-apps" alt="imagen del artículo" />
            <header className={styles.hedaerArticle}>
                <h1>{title}</h1>
                <p>{description}</p>
                <span>- {date} -</span>
            </header>
            <article>
          <div  dangerouslySetInnerHTML={{ __html: mainContent }} />
            </article>
        </main>
        </div>
    )
}

export default Article