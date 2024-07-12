import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import data from "./utils/mockData";

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
  return (
    <div>
      <Navbar />
      <SearchBar />
      <div className="card-divs">
        {data.map((data) => (
          <Card key={data.info.id} data={data} />
        ))}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
