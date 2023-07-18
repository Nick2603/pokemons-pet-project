import { useEffect, FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectPokemonForm,
  selectRequestData,
} from "../../store/slices/pokemonFormSlice";
import { useActions } from "../../hooks/useActions";
import { Loader } from "../../components/Loader";
import { Error } from "../../components/Error";
import styles from "./index.module.scss";

export const PokemonFormPage: FC = () => {
  const params = useParams();
  const pokemonForm = useSelector(selectPokemonForm);
  const { isLoading, error } = useSelector(selectRequestData);
  const { getPokemonForm } = useActions();

  const { pokemonFormId } = params;

  const { sprites } = pokemonForm;

  useEffect(() => {
    if (pokemonFormId) {
      getPokemonForm({ id: pokemonFormId });
    }
  }, [pokemonFormId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error errorText={error} />;
  }

  return (
    <div className={styles.wrapper}>
      {Object.keys(sprites).map((key) => {
        const value = sprites[key];
        if (value) {
          return (
            <img key={key} width="150" height="150" src={value} alt={key} />
          );
        }
        return null;
      })}
    </div>
  );
};
