import AppButton from "./AppButton";
import style from "./AppCard.module.css";

function AppCard({title, image, content, tags}) {
    const imgSrc = image || "https://placehold.co/600x400";
    return (
        <div className={style.card}>
            <div className={style.row}>
                <div className={style.col60}>
                    <img src={imgSrc} alt="" />
                </div>
                <div className={style.col40}>
                    <div className={style.description}>
                        <h4 className={style.title}>{title}</h4>
                        {tags.map((curTag, index) => <span key={index}>{curTag}</span>)}
                        <p className={style.caption}>{content}</p>
                        <AppButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppCard;