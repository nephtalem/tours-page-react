import { useState } from "react";

const Tour = ({ name, info, image, price, handleClick }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const description = isReadMore ? info : `${info.slice(0, 200)}...`;

  // we can use substring method as well

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h2>{name}</h2>
        <p>
          {description}
          <button type="button" onClick={handleReadMore} className="info-btn">
            {isReadMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={handleClick}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
