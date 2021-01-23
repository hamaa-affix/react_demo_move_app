import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Store } from "../../store/index";
//router
import { Link } from "react-router-dom";
//css
import Style from "./Header.module.scss";
//fonrtawseme
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Header = ({ children }) => {
  const [term, setTerm] = useState("");
  const { globalState, setGlobalState } = useContext(Store);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setGlobalState({ type: "SET_TERM", playload: { term } });
    history.push(`/seach?query=${term}`);
  };

  useEffect(() => {
    setTerm(globalState.term);
    // eslint-disable-nextline react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header>
        <div className={Style.header}>
          <div className={Style.item}>
            <Link to="/">Video tube</Link>
          </div>
          <div className={Style.item}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="検索"
                onChange={(e) => setTerm(e.target.value)}
                value={term}
              />
              <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
