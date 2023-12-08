import "./home.css";

function home() {
  return (
    <>
      <title>Step Elegance</title>
      <div className={"profile"}>
        <label>profile</label>
      </div>
      <div className={"categories"}>
        <label>Home</label>
        <label>New</label>
        <label>Men</label>
        <label>Women</label>
        <label>Kids</label>
        <label>Sale</label>
      </div>
      <div>
        <input type="text" placeholder="search" />
      </div>
    

      <div></div>
    </>
  );
}
export default home;
