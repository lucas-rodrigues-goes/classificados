import styles from "./SearchBar.module.css"

function SearchBar() {

    return (
        <>
        <input 
            className={styles.input}
            placeholder="Pesquisar anuncios..."
        >

        </input>
        </>
    )
}

export default SearchBar