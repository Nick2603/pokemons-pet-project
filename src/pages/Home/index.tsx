import { useEffect, FC } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/Title";
import { List } from "../../components/List";
import {
  selectPokemons,
  selectRequestData,
} from "../../store/slices/pokemonsSlice";
import { useActions } from "../../hooks/useActions";
import styles from "./index.module.scss";
import { SearchInput } from "../../components/SearchInput";

export const HomePage: FC = () => {
  const PAGE_SIZE = 20;

  const pokemons = useSelector(selectPokemons);
  const { isLoading, error } = useSelector(selectRequestData);

  const { getPokemons, getPokemonDetails } = useActions();
  const navigate = useNavigate();

  useEffect(() => {
    getPokemons({ limit: PAGE_SIZE });
  }, []);

  const handleClick = (id: string) => {
    getPokemonDetails({ id });
    navigate(`/pokemon/${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <Title HTag="h2">List of all pokemons:</Title>
      <SearchInput
        placeholderText="Enter pokemon name"
        onClick={(id) => {
          handleClick(id);
        }}
      />
      <List
        list={pokemons}
        pageSize={PAGE_SIZE}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};
