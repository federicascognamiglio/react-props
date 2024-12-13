import AppButton from "./AppButton";
import style from "./AppCard.module.css";

function AppCard({id, title, image, content, tags }) {
    const imgSrc = image || "https://picsum.photos/id/2/600/400";

    return (
        <div className={style.card}>
            <img src={imgSrc} alt="" />
            <div className={style.description}>
                <h4 className={style.title}>{title}</h4>
                {tags.map((curTag, index) => <span key={index} className={`${style.tag} ${style[curTag]}`}>{curTag}</span>)}
                <p className={style.caption}>{content}</p>
                <AppButton />
            </div>
        </div>
    )
}

export default AppCard;