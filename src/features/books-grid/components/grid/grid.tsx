import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import arrowSmallPrev from "../../../../assets/icons/arrow-back-small.svg";
import arrowSmallNext from "../../../../assets/icons/arrow-next-small.svg";
import bookTest from "../../../../assets/icons/book-example.png";
import star from "../../../../assets/icons/star.svg";
import starActive from "../../../../assets/icons/star-active.svg";
import styles from "./grid.module.css";

// interface BookGridItem {
//   image?: string;
//   isbn13: string;
//   title: string;
//   // authors: string;
//   // publisher: string;
//   // year: string;
//   price: string;
//   // rating: string;
// }

// export const Grid: FC = () => {
//   const [books, setBooks] = useState<BookGridItem[]>([]);

//   useEffect(() => {
//     fetch("https://api.itbook.store/1.0/new")
//       .then((response) => response.json())
//       .then((data) => {
//         /** TODO: do a runtime validation*/
//         setBooks(data);
//       });
//   }, []);

//   return (
//     <ul>
//       {books.map(({ image, isbn13, title, price }) => {
//         return (
//           <Link key={isbn13} to={`/${isbn13}`}>
//             <li>
//               {image && <img src={image} alt={title} />}
//               <div>
//                 <h4>{title}</h4>
//                 {/* <p>
//                       by {authors}, {publisher} {year}
//                     </p> */}
//               </div>
//               <div>
//                 <span>{price}</span>
//                 {/* <span>{rating}</span> */}
//               </div>
//             </li>
//           </Link>
//         );
//       })}
//     </ul>
//   );
// };

export const Grid: FC = () => {
  return (
    <div>
      <h1>New Releases Books</h1>
      <div className={styles.grid}>
        <div className={styles.book}>
          <div className={styles.book__img}>
            <img src={bookTest} alt=" " />
          </div>
          <div className={styles.book__info}>
            <h3>Mastering ROS for Robotics Programming</h3>
            <p>by Lentin Joseph, Apress 2018</p>
          </div>
          <div className={styles.book__bottom}>
            <h3>$31.38</h3>
            <div className={styles.rating}>
              <img src={starActive} alt=" " />
              <img src={starActive} alt=" " />
              <img src={starActive} alt=" " />
              <img src={starActive} alt=" " />
              <img src={star} alt=" " />
            </div>
          </div>
        </div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
      </div>
      <div className={styles.pages}>
        <button className={styles.pages__btnPrev}>
          <img src={arrowSmallPrev} alt=" " />
          Prev
        </button>
        <div className={styles.pages__numbers}>
          <a href="">1</a>
          <a href="">2</a>
          <a href="">3</a>
          <a href="">...</a>
          <a href="">6</a>
        </div>
        <button className={styles.pages__btnNext}>
          Next
          <img src={arrowSmallNext} alt=" " />
        </button>
      </div>
    </div>
  );
};
