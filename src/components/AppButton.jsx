import style from "./AppButton.module.css"

function AppButton() {
    const btnText = "LEGGI DI PIÙ"
    return (
        <button className={style.btn}>{btnText}</button>
    )
}

export default AppButton;