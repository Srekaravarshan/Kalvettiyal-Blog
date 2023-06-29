import "./ArticleCard.css";

import React from "react";

function ArticleCard() {
  return (
    <div className="article_card">
      <div className="article_top">
        <div className="article_profile"></div>
        <div className="article_user">
          <h3 className="article_name">Niranjana</h3>
          <h4 className="article_desc">The founder of NOVA</h4>
        </div>
      </div>
      <div className="article_center">
        <h1 className="article_title">
          Extraction of Curved lines from images
        </h1>
        <h4 className="article_desc">
          In this paper a method to extract curvilinear structures and their
          widths from digital images is presented. The approach is based on
          differential geometric properties of the image function. For each
          pixel, the second order Taylor polynomial is computed by...
        </h4>
      </div>
    </div>
  );
}

export default ArticleCard;
