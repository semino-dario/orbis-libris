import Link from 'next/link'
import styles from '../page.module.css'


interface LinkButtonProps{
    text: string,
    href: string
}

const LinkButton: React.FC<LinkButtonProps> = ({text, href}) => {

    return (
        <Link href={href} className={styles.link}> {text} </Link>
    )
}

export default LinkButton