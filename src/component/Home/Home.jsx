import "./Home.css";
import logo from "../../assets/download.png";

const Home = () => {
  return (
    <div className="Home">
      <img src={logo} />
      <div className="Field">Vikrant Mainwal</div>
      <div className="Field">20227057</div>
      <button onClick={() => {}}>Visit my instagram</button>
    </div>
  );
};

export default Home;
