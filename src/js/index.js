//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";
import InjectContext from "./store/appContext";
import CardVehicles from "./component/CardVehicles";

const LoQueSea = InjectContext(CardVehicles);

//render your react application
ReactDOM.render(<LoQueSea />, document.querySelector("#app"));
