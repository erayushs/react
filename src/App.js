import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Shimmer from "./components/Shimmer";
// import data from "./utils/mockData";

// const ele = React.createElement("h1", { id: "h1Ele" }, "Hello from React 🚀");

// const ele = <h1 id="h1Ele">Hello React from JSX 🚀</h1>; //It's a react element

// const HeadingComponent = () => {
//   return <h1>My new Heading Component</h1>;
// };

// const DivComponent = () => {
//   return (
//     <div>
//       <HeadingComponent />
//       {console.log("hELLO wOELR 🚀")}
//       <p>
//         Component Composition is Composing two compopents inside other
//         compopents, Here Heading compopent is composed inside Div Component.
//       </p>
//     </div>
//   );
// };

const App = () => {
  const [res, setRes] = useState([]);

  const handleFilter = () => {
    const filteredList = res.filter((res) => res.info.avgRating >= 4.5);

    console.log(filteredList);

    setRes(filteredList);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49690&lng=80.32460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const response = await apiData.json();

    let swiggyData =
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRes(swiggyData);
  };

  // if (res.length === 0) {
  //   return <Shimmer />;
  // }

  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="filterDiv">
        <button id="filter-btn" onClick={handleFilter}>
          Top Rated
        </button>
      </div>

      <div className="card-divs">
        {res.length === 0 ? (
          <Shimmer />
        ) : (
          res.map((data) => <Card key={data?.info?.id} data={data} />)
        )}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
