import React from "react";
//router
import { Link } from "react-router-dom";
//css
import Style from "./Header.module.scss";
//fonrtawseme
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const Header = ({ children }) => {
  return (
    <>
      <header>
        <div className={Style.header}>
          <div className={Style.item}>
            <Link to="/">Video tube</Link>
          </div>
          <div className={Style.item}>
            <form>
              <input type="text" placeholder="検索" />
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
