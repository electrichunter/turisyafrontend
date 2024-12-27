import React from 'react';
import styles from './CardGrid.module.css';

type Card = {
  id: number;
  image: string;
  alt: string;
  caption: string;
};

type CardGridProps = {
  cards: Card[];
};

const homecard: React.FC<CardGridProps> = ({ cards }) => {
  // Kartları 6 ile sınırlıyoruz
  const limitedCards = cards.slice(0, 6); 

  return (
    <div className={styles.cardGrid}>
      {limitedCards.map((card) => (
        <div key={card.id} className={styles.card}>
          <figure className={styles.figure}>
            <div className={styles.visual}>
              <img
                className={styles.img}
                src={card.image}
                alt={card.alt}
                width="222"
                height="175"
              />
            </div>
            <figcaption className={styles.figcaption}>{card.caption}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default homecard;
