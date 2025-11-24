import { Link } from "react-router-dom";
import styles from "./Home.module.css";
// import Button from "../../ui/Buttton";
import { Button } from "@heroui/react";

const Home = () => {
  return (
    <main className={styles.home}>
      <h1 className="text-red-600 text-2xl">Welcome to rzv cafe</h1>
      <Link to="/login">
        <Button color="primary">Login</Button>
      </Link>
    </main>
  );
};

export default Home;
