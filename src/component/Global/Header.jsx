import { useNavigate } from "react-router-dom";
import "./Header.css";
import Cross from "../../assets/Cross.png";
import Burger from "../../assets/Burger.png";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(0);

  const tabs = [
    {
      tab: "Home",
      path: "/home",
    },
    {
      tab: "Grid",
      path: "/",
    },
  ];

  return (
    <div className="Header">
      <div className="FlexEnd">
        {!menu ? (
          <img src={Burger} className="Icon" onClick={() => setMenu(1)} />
        ) : (
          <img src={Cross} className="Icon" onClick={() => setMenu(0)} />
        )}
      </div>
      {menu ? (
        <>
          {tabs.map((tab) => (
            <div
              key={tab.path}
              onClick={() => {
                navigate(tab.path);
              }}
              className="Tab"
            >
              {tab.tab}
            </div>
          ))}
          <a href="https://www.linkedin.com/in/vikrant-mainwal-7b0579249/" className="Tab">
            Linkdin
          </a>
        </>
      ) : (
        ""
      )}

      <div className="NotMobile">
        {tabs.map((tab) => (
          <div
            key={tab.path}
            onClick={() => {
              navigate(tab.path);
            }}
            className="Tab"
          >
            {tab.tab}
          </div>
        ))}
        <a href="https://www.linkedin.com/in/vikrant-mainwal-7b0579249/" className="Tab">
          Linkdin
        </a>
      </div>
    </div>
  );
};

export default Header;
