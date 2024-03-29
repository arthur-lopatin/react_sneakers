import React from "react";
// @ts-ignore
import styles from "./Card.module.scss";

type CardPropsType = {
  id?: any;
  title: string;
  price: number;
  imageUrl: string;
  onFavorite?: any;
  onClickFavorite?: any;
  onClickPlus?: any;
  onPlus: any;
  favorited?: any;
};

const Card: React.FC<CardPropsType> = ({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
}) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt="Unliked"
        />
      </div>
      <img
        style={{ width: "133px", height: "112px" }}
        src={imageUrl}
        alt="Sneakers"
      />
      <h5>{title}</h5>
      <div className={styles.cardItem}>
        <div className={styles.cardItemFlex}>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Plus"
        ></img>
      </div>
    </div>
  );
};

export default Card;
