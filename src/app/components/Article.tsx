"use client"
import { StaticImageData } from 'next/image'
import Header from '../components/Header'
import styles from '../page.module.scss'
import Footer from './Footer'
import guarda from "./images/hoja-de-guarda.png"
import Link from 'next/link'
import ShareButton from './ShareButton'
import { useState } from 'react'
import FontSizeIcon from './icons/FontSizeIcon'
import FontSizeIconCancel from './icons/FontSizeIconCancel'

interface ArticleProps {
    title: string,
    description: string,
    mainContent: string,
    date: string,
    image: string | StaticImageData
    url:string
}

const Article: React.FC<ArticleProps> = ({title, description, mainContent, image, date, url}) => {
    
    const imageSource = typeof image === 'string' ? image : image.src;
    const [fontSizeBig, setFontSizeBig] = useState(false)

    return(
        <div className={styles.containerTexts}>
            <Header/>
        <main className={styles.containerArticle}>
            <img src={imageSource} alt="imagen principal" />
            <header  className={styles.hedaerArticle}>
                <h1>{title}</h1>
                <p dangerouslySetInnerHTML={{ __html: description}}/>
                <div className={styles.dateAndButtonsContainer}>
                <h5 >{date}</h5>
            <div className={styles.articleButtonsContainer}>
                { !fontSizeBig ?
                <FontSizeIcon 
                onClick={()=>setFontSizeBig(!fontSizeBig)}
                />                
                :
                <FontSizeIconCancel 
                onClick={()=>setFontSizeBig(!fontSizeBig)}
                />}
                <ShareButton
                url={url}
                text='Compartir'
                />
            </div>
            </div>
            </header>
          <div className={styles.textArticle}
           style={{fontSize: !fontSizeBig ? "1.4rem" : "1.8rem"}}
           dangerouslySetInnerHTML={{ __html: mainContent }} />
          <Link href="/" className={styles.closeImage} >  <img src={guarda.src} className={styles.closeImage} alt="" /></Link>
            <p className={styles.footerArticle}>Salvo que se indique lo contrario todos los textos de Orbis Libris fueron escritos por <a href="https://www.linkedin.com/in/dario-semino/" target="_blank" className={`${styles.offDecoration} ${styles.colorRed}`}> Darío Semino</a>. Para contactarse se puede escribir a orbislibriscontacto@gmail.com</p>
        </main>
        </div>
    )
}

export default Article