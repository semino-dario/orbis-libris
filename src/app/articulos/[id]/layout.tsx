import styles from '../../page.module.scss';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import content from '../../content.json'
type ContentKey = keyof typeof content;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orbis Libris",
  description: "Libros de cualquier tiempo y lugar",
};



export default function ArticlesLayout({
    params,
    children,
  }: {
    params: { id: string };
    children: React.ReactNode;
  }) {

    const datafetch = params.id as ContentKey
    const data = content[datafetch].content
   
   const image = data.image
      const date = data.date
      const  title = data.title
      const description = data.description
      const mainContent = data.text

  const articleTitle = title; 
  const articleDescription = description; 
  const articleUrl = `https://orbislibris.com/articulos/${params.id}`; 
  const articleImage = image; 


  return (
    <html lang="en">
      <Head>
        <title>{articleTitle}</title>
        <meta name="description" content={articleDescription} />
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={articleDescription} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:image" content={articleImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={articleTitle} />
        <meta name="twitter:description" content={articleDescription} />
        <meta name="twitter:url" content={articleUrl} />
        <meta name="twitter:image" content={articleImage} />
      </Head>
      <body className={`${inter.className} ${styles.bodyArticle}`}>{children}</body>
    </html>

  );
}