import styles from "./Button.module.css"

function Button({children, theme}) {

    let style = styles;

    switch (theme) {
        case "red":
            style = styles.red;
            break
        case "img":
            style = styles.img;
            break
    }

    return (
        <>
        <button 
            className={style}
        >
            {children}
        </button>
        </>
    )
}

export default Button