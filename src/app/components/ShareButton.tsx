"use client"

import styles from '../page.module.scss';
import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp, FaTelegram, FaTimes } from 'react-icons/fa';
import ShareIcon from './ShareIcon';
import CancelIcon from './CancelIcon';
import { useArticle } from './ArticleContext';

interface ShareButtonProps {
  url: string;
  text: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, text }) => {
  
    const [show, setShow] = useState(false);
    const {lightMode} =  useArticle? useArticle() : {lightMode: false};

    const shareOnFacebook = () => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
    window.open(facebookShareUrl, '_blank', 'noopener,noreferrer');
  };

  const shareOnLinkedIn = () => {
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
    window.open(linkedInShareUrl, '_blank', 'noopener,noreferrer');
  };

  const shareOnWhatsApp = () => {
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}%20${encodeURIComponent(url)}`;
    window.open(whatsappShareUrl, '_blank', 'noopener,noreferrer');
  };

  const shareOnTelegram = () => {
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(telegramShareUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.shareContainer}>  
    {  !show ?
    
    <ShareIcon onClick={()=> setShow(!show)}  />
    : 
      <CancelIcon onClick={()=> setShow(!show)}  />
  } 
    {show &&
        <div className={styles.shareButtonContainer}>
            <h4 >Compartir: </h4>
            <FaFacebook className={styles.shareButton} onClick={shareOnFacebook} size={35} />
            <FaLinkedin className={styles.shareButton} onClick={shareOnLinkedIn}  size={35} />
            <FaWhatsapp className={styles.shareButton} onClick={shareOnWhatsApp} size={35} />
            <FaTelegram className={styles.shareButton} onClick={shareOnTelegram}  size={35} />
        </div>
        
}
    </div>
  );
};

export default ShareButton;