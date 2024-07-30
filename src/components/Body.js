import Card from "./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [res, setRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleFilter = () => {
    const filteredList = res.filter((res) => res.info.avgRating >= 4.5);

    console.log(filteredList);

    setFilteredRes(filteredList);
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
    setFilteredRes(swiggyData);
  };

  return (
    <div>
      <div className="search-div">
        <input
          className="inputBox"
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          id="btn"
          onClick={() => {
            const filterRes = res.filter((data) => {
              return data?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });

            setFilteredRes(filterRes);
          }}
        >
          Search
        </button>
      </div>
      <div className="filterDiv">
        <button id="filter-btn" onClick={handleFilter}>
          Top Rated
        </button>
      </div>

      <div className="card-divs">
        {res.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRes.map((data) => <Card key={data?.info?.id} data={data} />)
        )}
      </div>
    </div>
  );
};

export default Body;
