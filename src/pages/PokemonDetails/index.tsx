import { useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { selectPokemonDetails } from "../../store/slices/pokemonDetailsSlice";
import { selectRequestData } from "../../store/slices/pokemonDetailsSlice";
import { Loader } from "../../components/Loader";
import { Error } from "../../components/Error";
import { Title } from "../../components/Title";
import { AbilityItem } from "../../components/AbilityItem";
import styles from "./index.module.scss";
import { Item } from "../../components/Item";

export const PokemonDetailsPage: FC = () => {
  const params = useParams();
  const pokemonDetails = useSelector(selectPokemonDetails);
  const { isLoading, error } = useSelector(selectRequestData);
  const { getPokemonDetails } = useActions();

  const { pokemonId } = params;

  const { name, abilities, sprites, forms } = pokemonDetails;

  useEffect(() => {
    if (pokemonId) {
      getPokemonDetails({ id: pokemonId });
    }
  }, [pokemonId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error errorText={error} />;
  }

  const frontPictureUrl = sprites["front_default"];
  const backPictureUrl = sprites["back_default"];

  return (
    <div className={styles.wrapper}>
      <Title HTag="h2">{name}</Title>
      <div>
        {frontPictureUrl && (
          <img width="150" height="150" src={frontPictureUrl} alt={name} />
        )}
        {backPictureUrl && (
          <img width="150" height="150" src={backPictureUrl} alt={name} />
        )}
      </div>
      <div className={styles["details-container"]}>
        <div>
          {abilities &&
            abilities.map((ability) => (
              <AbilityItem key={ability.ability.name} ability={ability} />
            ))}
        </div>
        <div className={styles.forms}>
          {forms &&
            forms.map((f) => (
              <div key={f.name} style={{ marginTop: "5px" }}>
                <Item url={f.url} name={f.name} to="pokemon-form" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
