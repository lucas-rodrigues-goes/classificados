import styles from "./Header.module.css"
import Button from "../Button"

function Header() {

    return (
        <>
        <div className={styles.header}>
            <div className={styles.left}>
                <Button theme="img">
                    <img 
                        src="/images/hamburguer_menu.png"
                        height="30px"
                    >
                    </img>
                </Button>
            </div>
            <div className={styles.right}>
                <Button theme="img">
                    <img 
                        src="/images/hamburguer_menu.png"
                        height="30px"
                    >
                    </img>
                </Button>
            </div>
        </div>
        </>
    )
}

export default Header