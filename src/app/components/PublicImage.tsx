import { StaticImageData } from "next/image"

interface PublicImagesProps {

    image : StaticImageData
}

export const PublicImages: React.FC<PublicImagesProps> = ({image}) => {
   
   

    const imageSource = typeof image === 'string' ? image : image.src;

    return(

        <div>
            <img src={imageSource} alt="imagen" />
        </div>

    )
}