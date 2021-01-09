import React from "react";
import { Link } from "react-router-dom";
import Style from "./SideListIteme.module.scss";
const SideListItem = ({ id, src, title }) => {
  return (
    <>
      <Link
        className={Style.item}
        to={{ pathname: "watch", search: `?v=${id}` }}
      >
        <img src={src} alt={title} />
      </Link>
      <div className={Style.info}>
        <span>{title}</span>
      </div>
    </>
  );
};

export default SideListItem;
