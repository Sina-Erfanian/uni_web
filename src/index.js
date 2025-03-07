import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import VideoCall from "./VideoCall"; // Import your VideoCall component
import "./global.css";
import DetailsPage from "./DetailsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/videocall" element={<VideoCall />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
