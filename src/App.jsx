import { useEffect } from "react";
import { useState } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      if (response.ok) {
        setTours(tours);
      }
      console.log(response);
    } catch (error) {}
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleClick = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const handleRefresh = () => {
    fetchTours();
  };

  if (isLoading) {
    return (
      <main className="main">
        <Loading />
      </main>
    );
  }

  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <div>
            <h2>No Tours Left</h2>
            <button
              type="button"
              style={{ marginTop: "2rem" }}
              onClick={handleRefresh}
            >
              Refresh
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} handleClick={handleClick} />
    </main>
  );
};
export default App;
