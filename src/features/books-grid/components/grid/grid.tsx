import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { BackendApi } from "../../../../api";
// import arrowSmallPrev from "../../../../assets/icons/arrow-back-small.svg";
// import arrowSmallNext from "../../../../assets/icons/arrow-next-small.svg";
import star from "../../../../assets/icons/star.svg";
import starActive from "../../../../assets/icons/star-active.svg";
// import { Paginator } from "../../../../Paginator";
import styles from "./grid.module.css";

interface BookGridItem {
  image?: string;
  isbn13: number;
  title: string;
  price: string;
}

export const Grid: FC = () => {
  const [books, setBooks] = useState<BookGridItem[]>([]);

  useEffect(() => {
    const url = new URL("https://api.itbook.store/1.0/new");

    BackendApi.get(url).then(({ resultJson }) => {
      /** TODO: do a runtime validation*/
      setBooks(resultJson.books);
    });
  }, []);

  return (
    <div>
      <h1>New Releases Books</h1>
      <div className={styles.grid}>
        {books.map(({ image, isbn13, title, price }) => {
          return (
            <Link key={isbn13} to={`/book/${isbn13}`}>
              <div className={styles.book}>
                <div className={styles.book__img}>
                  {image && <img src={image} alt={title} />}
                </div>
                <div className={styles.book__info}>
                  <h3>{title}</h3>
                  {/* <p>
                    by {authors}, {publisher} {year}
                  </p> */}
                </div>
                <div className={styles.book__bottom}>
                  <h3>{price}</h3>
                  {/* <span>{rating}</span> */}
                  <div className={styles.rating}>
                    <img src={starActive} alt=" " />
                    <img src={starActive} alt=" " />
                    <img src={starActive} alt=" " />
                    <img src={starActive} alt=" " />
                    <img src={star} alt=" " />{" "}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* <div className={styles.pages}>
        <button className={styles.pages__btnPrev}>
          <img src={arrowSmallPrev} alt=" " />
          Prev
        </button>
        <Paginator currentPage={page} onPageClick={handlePaginatorClick} />
        <div className={styles.pages__numbers}></div>
        <button className={styles.pages__btnNext}>
          Next
          <img src={arrowSmallNext} alt=" " />
        </button>
      </div> */}
    </div>
  );
};
