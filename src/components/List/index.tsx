import { useEffect, useState, FC } from "react";
import { useSelector } from "react-redux";
import PropTypes, { InferProps } from "prop-types";
import { Item } from "../Item";
import { Pagination } from "../Pagination";
import { selectTotalCount } from "../../store/slices/pokemonsSlice";
import { useActions } from "../../hooks/useActions";
import { Loader } from "../Loader";
import { Error } from "../Error";
import styles from "./index.module.scss";

const libPropTypes = {
  pageSize: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

type TSPropsType = InferProps<typeof libPropTypes>;

/**
 * @param {PokemonFromList[]} list array of pokemons
 * @param {number} pageSize  number of items per page
 * @param {boolean} isLoading  loading status
 * @param {string} error  error message
 */

export const List: FC<TSPropsType> = ({ list, pageSize, isLoading, error }) => {
  const pageNumberSaved = localStorage.getItem("pageNumber");
  const pageDefaultValue =
    pageNumberSaved && !isNaN(Number(pageNumberSaved))
      ? Number(pageNumberSaved)
      : 1;

  const totalCount = useSelector(selectTotalCount);
  const [currentPage, setCurrentPage] = useState(pageDefaultValue);
  const [totalPages, setTotalPages] = useState(0);

  const { getPokemons } = useActions();

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    localStorage.setItem("pageNumber", pageNumber.toString());
    const offset = (pageNumber - 1) * pageSize;
    getPokemons({ offset, limit: pageSize });
  };

  useEffect(() => {
    setTotalPages(Math.ceil(totalCount / pageSize));
  }, [totalCount, pageSize]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error errorText={error} />;
  }

  return (
    <>
      <div className={styles.wrapper}>
        {list.map((i) => (
          <Item key={i.name} url={i.url} name={i.name} to="pokemon" />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={handlePageChange}
      />
    </>
  );
};

List.propTypes = libPropTypes;
