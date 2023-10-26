import { FC, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { BackendApi } from "../../../../api";
import arrowBackBig from "../../../../assets/icons/arrow-back.svg";
import dropdown from "../../../../assets/icons/dropdown-black.svg";
import facebook from "../../../../assets/icons/facebook.svg";
import more from "../../../../assets/icons/more-dots-horizontal.svg";
import star from "../../../../assets/icons/star.svg";
import starActive from "../../../../assets/icons/star-active.svg";
import twitter from "../../../../assets/icons/twitter.svg";
import { Subscribe } from "../../../../components/Subscribe";
import styles from "./book.module.css";

interface BookDetails {
  isbn13: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  pages: number;
  year: number;
  rating: number;
  desc: string;
  image: string;
  price: string;
}

export const BookPage: FC = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState<BookDetails | null>(null);

  useEffect(() => {
    if (!params.isbn13) {
      return;
    }

    const url = new URL(`https://api.itbook.store/1.0/books/${params.isbn13}`);
    url.searchParams.set("isbn13", params.isbn13);

    setIsLoading(true);
    BackendApi.get(url)
      .then(({ resultJson }) => {
        setDetails(resultJson);
      })
      .finally(() => setIsLoading(false));
  }, [params.isbn13]);

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  if (!details) {
    return <h4>Something went wrong</h4>;
  }

  return (
    <div className={styles.book}>
      <div className={styles.backArrow}>
        <Link to={"/"}>
          <img src={arrowBackBig} alt="Go back" />
        </Link>
      </div>
      <h1>{details.title}</h1>
      <div className={styles.book__main}>
        <div className={styles.book__main_img}>
          <img
            className={styles.book__main_img}
            src={details.image}
            alt="Book Cover"
          />
        </div>
        <div className={styles.book__main_detais}>
          <div className={styles.book__main_price}>
            {details.price && <h2>{details.price}</h2>}
            <div className={styles.book__main_rating}>
              <img src={starActive} alt="star" />
              <img src={starActive} alt="star" />
              <img src={starActive} alt="star" />
              <img src={starActive} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>
          <div className={styles.book__main_info}>
            <div className={styles.book__main_infoText}>
              <p>Authors</p>
              <span>{details.authors}</span>
            </div>
            <div className={styles.book__main_infoText}>
              <p>Publisher</p>
              <span>{details.publisher}</span>
            </div>
            <div className={styles.book__main_infoText}>
              <p>Language</p>
              <span>English</span>
            </div>
            <div className={styles.book__main_infoText}>
              <p>Format</p>
              <span>Paper book / ebook (PDF)</span>
            </div>
          </div>
          <div className={styles.book__main_moreDetails}>
            <button>
              More details
              <img src={dropdown} alt="dropdown_img" />
            </button>
          </div>
          <div className={styles.book__main_buttons}>
            <button className={styles.btn_addToCart}>
              <h3>Add to cart</h3>
            </button>
            <button className={styles.btn_preview}>
              <h4>Preview book</h4>
            </button>
          </div>
        </div>
      </div>
      {/* <div>
        <div>Decription | Authors | Reviews</div>
        <div>
          <span>{details.desc}</span>
        </div>
      </div> */}
      <div className={styles.book__socials}>
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#">
          <img src={more} alt="more" />
        </a>
      </div>
      <Subscribe />
      {/* <div>
        <div>
          Similar Books <button></button> <button></button>
        </div>
        <div></div>
      </div> */}
    </div>
  );
};
