import AppButton from "./AppButton";
import AppTags from "./AppTags";
import style from "./AppCard.module.css";

function AppCard({title, image, content, tags }) {
    const imgSrc = image || "https://picsum.photos/id/2/600/400";

    return (
        <div className={style.card}>
            <img src={imgSrc} alt="" />
            <div className={style.description}>
                <h4 className={style.title}>{title}</h4>
                <AppTags tags={tags} />
                <p className={style.caption}>{content}</p>
                <AppButton />
            </div>
        </div>
    )
}

export default AppCard;