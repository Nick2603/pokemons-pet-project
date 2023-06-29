import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { PokemonFromList } from "../../models/Pokemon";
import { Item } from "../Item";
import { Pagination } from "../Pagination";
import { selectTotalCount } from "../../store/slices/pokemonsSlice";
import { useActions } from "../../hooks/useActions";
import { Loader } from "../Loader";
import { Error } from "../Error";
import styles from "./List.module.scss";

interface IProps {
  list: PokemonFromList[];
  pageSize: number;
  isLoading: boolean;
  error: string;
};

/**
 * @param {PokemonFromList[]} list array of pokemons
 * @param {number} pageSize  number of items per page
 * @param {boolean} isLoading  loading status
 * @param {string} error  error message
 */

export function List({ list, pageSize, isLoading, error }: IProps) {
  const { loadPokemons } = useActions();

  const totalCount = useSelector(selectTotalCount);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const offset = (pageNumber - 1) * pageSize;
    loadPokemons({ offset, limit: pageSize })
  };

  useEffect(() => {
    setTotalPages(Math.ceil(totalCount / pageSize));
  }, [totalCount, pageSize]);

  
  if (isLoading) {
    return <Loader />
  };

  if (error) {
    return <Error errorText = {error} />
  };

  return (
    <>
      <div className={styles.wrapper}>
        {list.map(i => <Item key={i.name} url={i.url} name={i.name} />)}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onChange={handlePageChange} />
    </>
  )
};

List.propTypes = {
  pageSize: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
