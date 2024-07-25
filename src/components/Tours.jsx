import Tour from "./Tour";

const Tours = ({ tours, handleClick }) => {
  return (
    <sections>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return (
            <Tour
              {...tour}
              key={tour.id}
              handleClick={() => handleClick(tour.id)}
            />
          );
        })}
      </div>
    </sections>
  );
};
export default Tours;
