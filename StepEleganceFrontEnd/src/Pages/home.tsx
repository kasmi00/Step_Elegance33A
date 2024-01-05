import { useRef, useState } from "react";
import "./home.css";
import TopBar from "./topBar";
import FooterComp from "./footerComp";

function home() {
  return (
    <>
      <TopBar />

      <div className="bodysec">
        <div className="slidesbody"></div>
      </div>
      <FooterComp />
    </>
  );
}
export default home;
