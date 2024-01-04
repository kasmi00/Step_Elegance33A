import { useRef, useState } from "react";
import "./home.css";
import TopBar from "./topBar";
import FooterComp from "./footerComp";

function home() {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropdown = (State: boolean) => {
    setOpen(!State);
  };
  const handleClickoutsideDropdown = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target as Node)) {
      console.log("Clicked active");
    }
  };
  window.addEventListener("click", handleClickoutsideDropdown);
  console.log(open);

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
