import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { Title } from "../../components/Title";
import { List } from "../../components/List";
import { selectPokemons, selectRequestData } from "../../store/slices/pokemonsSlice";
import { useActions } from "../../hooks/useActions";
import styles from "./Home.module.scss";

export function HomePage() {
  const PAGE_SIZE = 20;

  const pokemons = useSelector(selectPokemons);
  const { isLoading, error } = useSelector(selectRequestData);

  const { loadPokemons } = useActions();

  useEffect(() => {
    loadPokemons({ limit: PAGE_SIZE });
  }, []);

  return (
    <div className={styles.wrapper}>
      <Title Size="h2">List of all pokemons:</Title>
      <List list={pokemons} pageSize={PAGE_SIZE} isLoading={isLoading} error={error} />
    </div>
  )
};
