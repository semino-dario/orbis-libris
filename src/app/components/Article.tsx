"use client"
import { StaticImageData } from 'next/image'
import Header from '../components/Header'
import styles from '../page.module.scss'
import Footer from './Footer'
import guarda from "./images/hoja-de-guarda.png"
import Link from 'next/link'
import ShareButton from './ShareButton'
import { useEffect, useRef, useState } from 'react'
import FontSizeIcon from './icons/FontSizeIcon'
import FontSizeIconCancel from './icons/FontSizeIconCancel'
import ProgressBar from './ProgressBar'

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

  const [isSticky, setIsSticky] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const originalPositionRef = useRef<number | null>(null);
 
  const handleScroll = () => {
    if (divRef.current) {
      const offsetTop = divRef.current.getBoundingClientRect().top;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (originalPositionRef.current === null) {
        originalPositionRef.current = divRef.current.offsetTop;
      }

      if (scrollTop >= originalPositionRef.current) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return(
        <div className={styles.containerTexts}>
            <Header/>
        <main className={styles.containerArticle}>
            <img src={imageSource} alt="imagen principal" />
            <header  className={styles.hedaerArticle}>
                <h1>{title}</h1>
                <p dangerouslySetInnerHTML={{ __html: description}}/>
            
            <div ref={divRef} style={{width:"100%"}} className={`${isSticky ? styles.fixed : ''}`}>
                <div  className={`${styles.dateAndButtonsContainer}`}>
                <h5 >{date}</h5>
            <div  className={`${styles.articleButtonsContainer}`}>
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
            <ProgressBar/>
            </div>
            </header>
          <div className={`${styles.textArticle} ${isSticky ? styles.paddingTopTextArticle : ''}`}
           style={{fontSize: !fontSizeBig ? "1.4rem" : "1.8rem"}}
           dangerouslySetInnerHTML={{ __html: mainContent }} />
          <Link href="/" className={styles.closeImage} >  <img src={guarda.src} className={styles.closeImage} alt="" /></Link>
            <p className={styles.footerArticle}>Salvo que se indique lo contrario todos los textos de Orbis Libris fueron escritos por <a href="https://www.linkedin.com/in/dario-semino/" target="_blank" className={`${styles.offDecoration} ${styles.colorRed}`}> Darío Semino</a>. Para contactarse se puede escribir a orbislibriscontacto@gmail.com</p>
        </main>
        </div>
    )
}

export default Article