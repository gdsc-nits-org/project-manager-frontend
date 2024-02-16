import { useFetchOnAction } from "../../Hooks";

import style from "./Home.module.scss";

const Home = () => {
  const [fetchData, fetchFunc] = useFetchOnAction();

  const { data, loading, error } = fetchData;

  const handleClick = () => {
    fetchFunc("/db/demo.json");
  };

  return <main className={style.home}>{loading ? <h1>Loading...</h1> : <></>}</main>;
};

export default Home;
