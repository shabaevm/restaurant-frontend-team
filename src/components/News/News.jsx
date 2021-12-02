import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadNews } from '../../redux/features/NewsReducer';
import cl from '../News/news.module.css';
import ReadMoreReact from 'read-more-react';

const News = () => {

  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.newsList);

  useEffect(() => {
    dispatch(loadNews());
  }, [dispatch]);

  return (
    <>
      {news.map((news) => {
        return (
          <div className={cl.newsMainBlock}>
            <div className={cl.newsCard}>
              <div className={cl.imageBlock}>
                <img src={news.image} className={cl.newsImage} alt="..."/>
              </div>
                <div className={cl.titleBlock}>
                    <h3>  {news.title}  </h3>
                  <div>
                    <ReadMoreReact text={news.text}
                                   min={5}
                                   ideal={100}
                                   max={100}
                                   readMoreText="click here to read more"/>


                  </div>
                </div>

            </div>

          </div>
        )
      })}
    </>
  );
};

export default News;