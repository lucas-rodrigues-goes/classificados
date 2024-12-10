import Header from "../../components/Header";
import Button from "../../components/Button";
import styles from "./Home.module.css";
import {useNavigate} from "react-router-dom";


function Home() {

  return (
    <>
    <Header></Header>
    <Button>Anuncios</Button>
    </>
  );
}

export default Home;
