//React/////
import { useState, useEffect } from "react";

//Components/////
import StatisticDisplay from "../../components/statistic-display/StatisticDisplay";

//Images/////
import HeaderDesktopImage from "../../assets/image-header-desktop.jpg";
import HeaderMobileImage from "../../assets/image-header-mobile.jpg";

//Style/////
import "./StatsPreview.scss";

const StatsPreview = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobileScreen = screenWidth <= 540;

  return (
    <main className="main-container">
      <article className="main-container_stats-preview-card">
        <section className="stats-preview-card_stats-preview-section">
          <div className="stats-preview-section_stats-preview-box">
            <section className="stats-preview-box_promotional-text-section">
              <h1 className="promotional-text-section_heading">
                Get
                <span style={{ color: "hsl(277, 64%, 61%)" }}> insights </span>
                that help your business grow.
              </h1>

              <p className="promotional-text-section_promotional-text">
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
              </p>
            </section>

            <section className="stats-show-section">
              <StatisticDisplay statistic="10k+" statisticName="COMPANIES" />
              <StatisticDisplay statistic="314" statisticName="TEMPLATES" />
              <StatisticDisplay statistic="12M+" statisticName="QUERIES" />
            </section>
          </div>
        </section>

        <div className="stats-preview-card_header-image-background">
          <img
            src={isMobileScreen ? HeaderMobileImage : HeaderDesktopImage}
            alt="header-image"
            className="header-image-background_header-image"
          />
        </div>
      </article>
    </main>
  );
};

export default StatsPreview;
