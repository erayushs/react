import React from "react";
import ReactDOM from "react-dom/client";

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

const Navbar = () => {
  return (
    <div className="navbar-nav">
      <div className="nav-icon">
        <img
          className="nav-img"
          src={require("./resources/1855.png")}
          alt="Burger Image"
        />
      </div>
      <div className="nav-items-div">
        <ul className="nav-items-list">
          <li className="nav-items">Home</li>
          <li className="nav-items">About Us</li>
          <li className="nav-items">Contact</li>
          <li className="nav-items">Cart</li>
        </ul>
      </div>
    </div>
  );
};

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

const Card = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img
          className="card-img"
          src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
        ></img>
      </div>

      <div className="card-items">
        <p>Burger King</p>
        <p>Rating: 4.3</p>
        <p>Kakadeo, Kanpur</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="card-divs">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
