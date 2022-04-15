// import { getUserData } from "./store/actions";
// import { useDispatch, useSelector } from "react-redux";
import "./css/main.css";
import Navbar from "./components/navbar/navbar";
import { Outlet } from "react-router-dom";
import React from "react";

// /**
//  * @typedef {import("./store/store").test} test
//  */

// function App() {
//   const dispatch = useDispatch();
//   const app = useSelector((/** @type test */ state) => state.user);

//   console.log("app", app);
//   function load() {
//     dispatch(getUserData());
//   }

//   function showSuperHero() {
//     if (!app.data) return;
//     return <h1>{app.data.name}</h1>;
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <span onClick={load}>load </span>
//       </header>
//       {showSuperHero()}
//     </div>
//   );
// }

function App() {
  return (
    <body>
      <Navbar />
      <Outlet />
    </body>
  );
}

export default App;
