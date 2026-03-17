import Article from "../../components/Article";
import content from "../../content.json";
import { Metadata } from "next";
type ContentKey = keyof typeof content;

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const datafetch = params.id as ContentKey;
  const data = content[datafetch].content;

  // Extraer las primeras líneas del description limpiando HTML
  const cleanDescription = data.description.replace(/<[^>]*>/g, "");

  return {
    title: data.title,
    description: cleanDescription,
    openGraph: {
      title: data.title,
      description: cleanDescription,
      url: `https://orbislibris.com/articulos/${params.id}`,
      siteName: "Orbis Libris",
      images: [
        {
          url: data.image,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      type: "article",
      locale: "es_AR",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: cleanDescription,
      images: [data.image],
    },
  };
}

export default function Articulo({ params }: { params: { id: string } }) {
  const datafetch = params.id as ContentKey;
  const data = content[datafetch].content;

  return (
    <Article
      image={data.image}
      date={data.date}
      title={data.title}
      description={data.description}
      mainContent={data.text}
      url={`https://orbislibris.com/articulos/${params.id}`}
    />
  );
}
