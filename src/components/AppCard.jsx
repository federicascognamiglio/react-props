import AppButton from "./AppButton";
import style from "./AppCard.module.css";

function AppCard({id, title, image, content, tags}) {
    return (
        <div key={id} className={style.card}>
            <div className={style.row}>
                <div className={style.col60}>
                    <img src={`/images/${image}`} alt="" />
                </div>
                <div className={style.col40}>
                    <div className={style.description}>
                        <h4 className={style.title}>{title}</h4>
                        {tags.map(curTag => <span>{curTag}</span>)}
                        <p className={style.caption}>{content}</p>
                        <AppButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppCard;