import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setbackground] = useState(" ");
  const [query, setquery] = useState("");

  const navigate = useNavigate();

  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    // const bg =
    //   url.backdrop +
    //   data?.results?.[Math.floor(Math.random() * 15)]?.backdrop_path; // get bacground
    // console.log(bg);

    // setbackground(bg);
    load();
  }, [data]);

  const load = () => {
    const bg =
      "https://image.tmdb.org/t/p/original/" +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path; // get bacground

    setbackground(bg);
    console.log(background);
  };

  const searchHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  function searchBtn() {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
          {console.log(background)}
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Wellcome</span>
          <span className="subTitle">
            The bride gets the THRILLS, the father gets the BILLS.
          </span>
          {/* search button */}
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or Tv show..."
              onChange={(e) => setquery(e.target.value)}
              onKeyUp={searchHandler}
            />
            <button onClick={searchBtn}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
