import homeImg from "../assets/images/image-hero-desktop.png";

const HomePageBody = () => {
  return (
    <section className="home-cont">
      <article className="home-info">
        <h1 className="home-title">
          Make
          <br /> remote work
        </h1>
        <p className="home-note">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="more-info-btn">Learn more</button>
        <div className="sponsers"></div>
      </article>
      <div className="home-icon-cont">
        <img className="home-icon" src={homeImg} alt="Home page image" />
      </div>
    </section>
  );
};

export default HomePageBody;
