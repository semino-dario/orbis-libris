import { StaticImageData } from 'next/image'
import Header from '../components/Header'
import dawn from '../components/images/dawn.png'
import styles from '../page.module.css'
import content from '../content.json'

interface ArticuloProps {
    title: string,
    description: string,
    mainContent: string,
    date: string,
    image: string | StaticImageData,
}

const Articulo: React.FC<ArticuloProps> = ({title, description, mainContent, image, date}) => {
    
    image = dawn
    date= content.article2.content.date
    title = content.article2.content.title
    description = content.article2.content.description
    mainContent = content.article2.content.text

    const imageSource = typeof image === 'string' ? image : image.src;

    return(
        <div className={styles.containerTexts}>
            <Header/>
        <main className={styles.containerArticle}>
            <img src={imageSource} alt="" />
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

export default Articulo