import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNews } from "../../redux/features/NewsReducer";
import cl from "../News/news.module.css";
import ReadMoreReact from "read-more-react";

const News = () => {

  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.newsList);

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...подробнее" : "...скрыть"}
      </span>
      </p>
    );
  };

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  return (
    <div className={cl.around}>
      {news.map((news) => {
        return (
          <div className={cl.newsMainBlock}>
            <div className={cl.newsCard}>
              <div className={cl.imageBlock}>
                <img src={news.image} className={cl.newsImage} alt="..." />
              </div>
              <div className={cl.titleBlock}>
                <h4> {news.title} </h4>
                <div className={cl.textBlock}>
                  <ReadMore>
                    {news.text}
                  </ReadMore>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default News;
