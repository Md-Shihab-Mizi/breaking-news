import React, { useEffect, useState } from 'react';



const TopHeadline = () => {


    const [articles, setArticles] =useState([]);


    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c3867e59fbff487cb50fb52f3dfc7aac';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))

    },[] )
    return (
        <div>
            <h1>Top Headlines {articles.length}</h1>
        </div>
    );
};

export default TopHeadline;