import React, { useState } from "react";
import styles from "./LikedButton.module.css";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
const LikeButton = () => {
  const [toggle, SetToggle] = useState(true);

  if (toggle)
    return (
      <AiFillHeart
        className={[styles.on].join(" ")}
        onClick={() => {
          SetToggle(false);
        }}
      ></AiFillHeart>
    );
  else
    return (
      <AiOutlineHeart
        className={[styles.off].join(" ")}
        onClick={() => {
          SetToggle(true);
        }}
      ></AiOutlineHeart>
    );
};

export default LikeButton;
