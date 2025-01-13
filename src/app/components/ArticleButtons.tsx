"use client"

import { useEffect, useRef } from "react";
import styles from "../page.module.scss";
import ProgressBar from "./ProgressBar";
import ShareButton from "./ShareButton";
import FontSizeIconCancel from "./icons/FontSizeIconCancel";
import FontSizeIcon from "./icons/FontSizeIcon";
import { useArticle } from "./ArticleContext";
import LightModeIcon from "./icons/LightModeIcon";
import DarkModeIcon from "./icons/DarkModeIcon";

const ArticleButtons = () => {

const divRef = useRef<HTMLDivElement>(null);
const originalPositionRef = useRef<number | null>(null);
const {date, url, isSticky, setIsSticky, fontSizeBig, setFontSizeBig, setLightMode, lightMode} = useArticle()

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

    return (

        <div ref={divRef} style={{width:"100%"}} className={`${isSticky ? styles.fixed : ''} ${lightMode ? styles.lightMode : styles.darkMode} `}>
            <div  className={`${styles.dateAndButtonsContainer}`}>
                <h5 >{date}</h5>
            <div  className={`${styles.articleButtonsContainer}`}>
                <div onClick={()=> setLightMode(!lightMode)}>
                    {
                    lightMode ? 
                    <DarkModeIcon/>
                    : 
                    <LightModeIcon/>}
                </div>
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
    )


}

export default ArticleButtons;