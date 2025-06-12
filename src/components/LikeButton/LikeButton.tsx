import React, { useState } from "react";
import styles from "./LikedButton.module.css";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
const LikeButton = () => {
  const [toggle, SetToggle] = useState(true);

  if (toggle)
    return (
      <AiFillLike
        className={[styles.on].join(" ")}
        onClick={() => {
          SetToggle(false);
        }}
      ></AiFillLike>
    );
  else
    return (
      <AiOutlineLike
        className={[styles.off].join(" ")}
        onClick={() => {
          SetToggle(true);
        }}
      ></AiOutlineLike>
    );
};

export default LikeButton;
