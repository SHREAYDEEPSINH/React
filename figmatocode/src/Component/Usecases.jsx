import React from "react";
import './Usecases.css'
import useCaseIcon1 from "../Assets/useCaseIcon1.png"
import useCaseIcon2 from "../Assets/useCaseIcon2.png"
import useCaseIcon3 from "../Assets/useCaseIcon3.png"
import useCaseIcon4 from "../Assets/useCaseIcon4.png"
import useCaseIcon5 from "../Assets/useCaseIcon5.png"
import useCaseIcon6 from "../Assets/useCaseIcon6.png"
import useCaseIcon7 from "../Assets/useCaseIcon7.png"
import useCaseIcon8 from "../Assets/useCaseIcon8.png"

function Usecases() {
  return (
    <div className="container">
      <div style={{ height: "1000px", marginTop: "120px" }}>

        {/* Use Cases Section */}
        <div className="use-cases-section">
          {/* first */}
          <div className="use-cases-header">
            <div className="use-cases-title">Use Cases</div>
            <div className="use-cases-subtitle">
              At YourBank, we cater to the diverse needs of individuals and businesses
              alike, offering a wide range of financial solutions
            </div>
          </div>

          {/* second */}
          <div className="use-cases-content">
            <div className="use-cases-cards-main  use-cases-cards-main-1">
              <div className="use-cases-cards">
                <div className="use-case-card">
                  <div className="use-case-icon-container">
                    <div className="use-case-icon">
                      <div className="icon-inner">
                        <img src={useCaseIcon1} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="use-case-text">Managing Personal Finances</div>
                </div>

                <div className="use-case-card">
                  <div className="use-case-icon-container">
                    <div className="use-case-icon">
                      <div className="icon-inner">
                        <img src={useCaseIcon2} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="use-case-text">Saving for the Future</div>
                </div>


              </div>

              <div className="use-cases-cards ">
                <div className="use-case-card use-case-card-2">
                  <div className="use-case-icon-container">
                    <div className="use-case-icon">
                      <div className="icon-inner">
                        <img src={useCaseIcon3} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="use-case-text">Homeownership</div>
                </div>

                <div className="use-case-card use-case-card-2">
                  <div className="use-case-icon-container">
                    <div className="use-case-icon">
                      <div className="icon-inner">
                        <img src={useCaseIcon4} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="use-case-text">Education Funding</div>
                </div>
              </div>
            </div>




            <div className="use-cases-stats">
              <div className="use-cases-stats-content">
                <div className="use-cases-stats-header">
                  <div className="stats-title">For Individuals</div>
                  <div className="stats-description">
                    For individuals, our mortgage services pave the way to homeownership,
                    and our flexible personal loans provide vital support during various
                    life milestones. We also prioritize retirement planning, ensuring a
                    financially secure future for our customers
                  </div>
                </div>

                <div className="stats-cards">
                  <div className="stats-card">
                    <div className="stats-percentage">78%</div>
                    <div className="stats-text">Secure Retirement Planning</div>
                  </div>
                  <div className="stats-separator"></div>
                  <div className="stats-card">
                    <div className="stats-percentage">63%</div>
                    <div className="stats-text">Manageable Debt Consolidation</div>
                  </div>
                  <div className="stats-separator"></div>
                  <div className="stats-card">
                    <div className="stats-percentage">91%</div>
                    <div className="stats-text">Reducing financial burdens</div>
                  </div>
                </div>

                <div className="learn-more-button">
                  <div className="learn-more-text">Learn More</div>
                </div>
              </div>
            </div>
          </div>

        </div>



        {/* third */}
        <div className="use-cases-content">
          <div className="use-cases-stats">
            <div className="use-cases-stats-content">
              <div className="use-cases-stats-header">
                <div className="stats-title">For Individuals</div>
                <div className="stats-description">
                  For individuals, our mortgage services pave the way to homeownership,
                  and our flexible personal loans provide vital support during various
                  life milestones. We also prioritize retirement planning, ensuring a
                  financially secure future for our customers
                </div>
              </div>

              <div className="stats-cards">
                <div className="stats-card">
                  <div className="stats-percentage">78%</div>
                  <div className="stats-text">Secure Retirement Planning</div>
                </div>
                <div className="stats-separator"></div>
                <div className="stats-card">
                  <div className="stats-percentage">63%</div>
                  <div className="stats-text">Manageable Debt Consolidation</div>
                </div>
                <div className="stats-separator"></div>
                <div className="stats-card">
                  <div className="stats-percentage">91%</div>
                  <div className="stats-text">Reducing financial burdens</div>
                </div>
              </div>

              <div className="learn-more-button">
                <div className="learn-more-text">Learn More</div>
              </div>
            </div>
          </div>




          <div className="use-cases-cards-main">
            <div className="use-cases-cards">
              <div className="use-case-card">
                <div className="use-case-icon-container">
                  <div className="use-case-icon">
                    <div className="icon-inner">
                      <img src={useCaseIcon5} alt="" />
                    </div>
                  </div>
                </div>
                <div className="use-case-text">Managing Personal Finances</div>
              </div>

              <div className="use-case-card">
                <div className="use-case-icon-container">
                  <div className="use-case-icon">
                    <div className="icon-inner">
                       <img src={useCaseIcon6} alt="" />
                    </div>
                  </div>
                </div>
                <div className="use-case-text">Saving for the Future</div>
              </div>
            </div>

            <div className="use-cases-cards ">
              <div className="use-case-card use-case-card-2">
                <div className="use-case-icon-container">
                  <div className="use-case-icon">
                    <div className="icon-inner">
                      <img src={useCaseIcon7} alt="" />
                    </div>
                  </div>
                </div>
                <div className="use-case-text">Homeownership</div>
              </div>

              <div className="use-case-card use-case-card-2">
                <div className="use-case-icon-container">
                  <div className="use-case-icon">
                    <div className="icon-inner">
                      <img src={useCaseIcon8} alt="" />
                    </div>
                  </div>
                </div>
                <div className="use-case-text">Education Funding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usecases;
