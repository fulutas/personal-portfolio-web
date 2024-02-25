import Image from "next/image"

const DevImg = ({ containerStyles, imgSrc }) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} fill priority al="hero_img" />
        </div>
    )
}

export default DevImg