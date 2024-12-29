"use client"

import Link from 'next/link'
import styles from '../page.module.scss'
import aboutLogo from "./images/logo-about.svg" 
import aboutLogoRed from "./images/logo-about-red.svg" 
import { useState } from 'react'

export default function LogoAbout ( ) {

 const [hover, setHover] = useState(false)


    return(   

    <Link onMouseOver={()=> setHover(true)}
          onMouseOut={()=> setHover(false)}
          href="./acerca" >
        <img className={styles.aboutLogo} 
             src={ !hover ? aboutLogo.src : aboutLogoRed.src} 
             alt="silueta de un hombre con galera y libros" />
    </Link>
    )
}