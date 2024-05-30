import videoHomePage from "../../assets/video-homepage.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const HomePage = (props) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div>
          <h1 className="title-intro">
            {t("homepage.titleintro")}
          </h1>
        </div>
        <div className="title-body">
          <span>
          {t("homepage.titlebody")}
          </span>
        </div>
        <div className="title-footer">
          {isAuthenticated === false ? (
            <button onClick={() => navigate("/login")} className="btn-start">Get started-it's free</button>
          ) : (
            <button className="btn-start" onClick={() => navigate("/user")}>Doing quiz now</button>
          )}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
