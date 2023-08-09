import NavBar from "../components/NavBar";
import HomePageBody from "../components/HomePageBody";
import "../assets/stylesheet/style.css";

const Welcome = () => {
  return (
    <div className="welcome-cont">
      <NavBar />
      <HomePageBody />
    </div>
  );
};

export default Welcome;
