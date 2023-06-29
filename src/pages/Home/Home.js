import React from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="articles">
        <h2>Blogs</h2>
        <hr />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </section>
    </div>
  );
}

export default Home;
