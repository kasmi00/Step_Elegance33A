import "./about.css";
function about() {
  return (
    <>
        <section className="about-us">
    <div className="about">
    <img src="girl.png" className="pic"/>
      <div className="text">
        <h2>About Us</h2>
        <h5>Front-end Developer & <span>Designer</span></h5>
          <p>description</p>
        <div className="data">
        <a href="#" className="hire">Hire Me</a>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
export default about;