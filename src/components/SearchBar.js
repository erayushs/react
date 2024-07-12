const SearchBar = () => {
  return (
    <div className="search-div">
      <input
        className="inputBox"
        style={{ fontFamily: "Quicksand" }}
        placeholder="Search Restaurant"
      ></input>
      <button id="btn" style={{ fontFamily: "Quicksand" }}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
