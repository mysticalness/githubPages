import { useEffect, useState } from "react";
import List from "../components/List";
import "./Summary.css";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Summary() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/bookList")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="summaryContent">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1} // 전체 슬라이드 개수
        pagination={{ clickable: true }}
      >
        {loading
          ? ""
          : // books를 3개씩 그룹화
            Array.from({ length: Math.ceil(books.length / 3) }).map((_, slideIndex) => {
              const start = slideIndex * 3; // 각 슬라이드의 시작 인덱스
              const slideBooks = books.slice(start, start + 3); // 3개씩 잘라서 가져옴

              return (
                <SwiperSlide key={slideIndex}>
                  <div className="slideContent">
                    {slideBooks.map((book) => (
                      <List
                        key={book.number}
                        number={book.number}
                        name={book.bookName}
                        duration={book.duration}
                        img={book.bookImg}
                        imgLink={book.bookImgLink}
                        type={book.type}
                        dataType={book.database}
                      />
                    ))}
                  </div>
                </SwiperSlide>
              );
            })}
      </Swiper>
    </div>
  );
}

export default Summary;
