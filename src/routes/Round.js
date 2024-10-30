import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Round.css';
import "./common.css";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";

function Round() {
  const { name, dataType } = useParams();
  const [loading, setLoading] = useState(true);
  const [rounds, setRounds] = useState([]);

  useEffect(() => {
    setLoading(true); // Reset loading state when fetching
    fetch(`http://localhost:3001/${dataType}`)
      .then((response) => response.json())
      .then((data) => {
        setRounds(data);
        setLoading(false);
      });
  }, []); // Add dataType to the dependency array

  return (
    <div className="roundContent">
      <h1 className="titleName">{name}</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {loading ? (
          <div>Loading...</div> // Optional loading message
        ) : (
          Array.from({ length: Math.ceil(rounds.length / 10) }).map((_, slideIndex) => {
            const start = slideIndex * 10;
            const slideRounds = rounds.slice(start, start + 10);

            return (
              <div>
                <SwiperSlide key={slideIndex}>
                  <div className="roundContainer">
                    {Array.from({ length: 2 }).map((_, rowIndex) => (
                      <div className="roundList" key={rowIndex}>
                        {slideRounds.slice(rowIndex * 5, rowIndex * 5 + 5).map((r) => (
                          <Link to={`/content/${name}/${r.number}`} className="list">
                            <div key={r.number}>
                              <div className="day">{r.number}일차</div>
                              <div className="content">{r.content}</div> {/* Wrap in a parent div */}
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              </div>
            );
          })
        )}
      </Swiper>
    </div>
  );
}

export default Round; // This should be at the bottom, outside the function
