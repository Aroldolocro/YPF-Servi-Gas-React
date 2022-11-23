import "./Searcher.css";
import { useContext } from "react";
import { AppContext } from "../../../../AppContext/AppContext";

const Searcher = () => {
  const {
    setFiltered,
    AlldbCollections,
    setOpenPopUp5,
    StateWord,
    setStateWord,
    SearcherOn,
  } = useContext(AppContext);

  const handeFiltered = (event) => {
    const word = event.target.value;
    setStateWord(word);
    const NewFiltered = AlldbCollections.filter((valor) =>
      valor.Nombre.toLowerCase().includes(word.toLowerCase())
    );

    if (word === "") {
      setFiltered([]);
    } else {
      setFiltered(NewFiltered);
    }
  };

  const ClearInput = () => {
    setStateWord("");
  };

  return (
    <div className="Searcher-background" onClick={() => setOpenPopUp5(true)}>
      <input
        className="Searcher-input"
        placeholder="Buscar en Servi Gas"
        onChange={handeFiltered}
        value={StateWord}
        disabled={!SearcherOn}
      />
      {StateWord !== "" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="Searcher-svg-1"
          viewBox="-2.5 -1.5 20 20"
          stroke="#808080"
          strokeWidth={1}
          onClick={() => ClearInput()}
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="currentColor"
          className="Searcher-svg-1"
          viewBox="-2.5 -1.5 20 20"
          stroke="#808080"
          strokeWidth={1}
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      )}
    </div>
  );
};

export default Searcher;
