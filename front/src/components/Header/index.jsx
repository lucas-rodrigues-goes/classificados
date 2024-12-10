import styles from "./Header.module.css"
import SearchBar from "../SearchBar"
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
                        draggable='false'
                    >
                    </img>
                </Button>
            </div>
            <div className={styles.center}>
                <SearchBar/>
            </div>
            <div className={styles.right}>
                <Button theme="img">
                    <img style={{backgroundColor: "white", borderRadius: "30px", padding: "5px"}}
                        src="/images/user_placeholder.webp"
                        height="40px"
                        draggable='false'
                    >
                    </img>
                </Button>
            </div>
        </div>
        </>
    )
}

export default Header