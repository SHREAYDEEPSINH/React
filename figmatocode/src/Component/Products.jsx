import React from "react";
import productlogo1 from "../Assets/producticon1.png"
import productlogo2 from "../Assets/producticon2.png"
import productlogo3 from "../Assets/producticon3.png"
import './Products.css'
// import icon1 from "..Assets/producticon1.png"


const Products = () => {
  return (
    <div className="container">
      {/* <div
        style={{
          width: "100%",
          height: "559px",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "80px",
          display: "flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            gap: "150px",
            display: "flex",
          }}
        >
          <div
            style={{
              flex: "1 1 0",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "14px",
              display: "flex",
            }}
          >
            <div style={{ alignSelf: "stretch" }}>
              <span
                style={{
                  color: "white",
                  fontSize: "38px",
                  fontFamily: "Lexend",
                  fontWeight: "500",
                  lineHeight: "72px",
                  wordWrap: "break-word",
                }}
              >
                Our{" "}
              </span>
              <span
                style={{
                  color: "#CAFF33",
                  fontSize: "38px",
                  fontFamily: "Lexend",
                  fontWeight: "500",
                  lineHeight: "72px",
                  wordWrap: "break-word",
                }}
              >
                Products
              </span>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                color: "#B3B3B3",
                fontSize: "16px",
                fontFamily: "Lexend",
                fontWeight: "300",
                lineHeight: "27px",
                wordWrap: "break-word",
              }}
            >
              Discover a range of comprehensive and customizable banking
              products at YourBank, designed to suit your unique financial needs
              and aspirations.
            </div>
          </div>
          <div
            style={{
              padding: "12px",
              background: "#1C1C1C",
              borderRadius: "82px",
              border: "1px #262626 solid",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              display: "flex",
              height : "65px"
            }}
          >
            <div
              style={{
                background: "#CAFF33",
                borderRadius: "140px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                display: "flex",
                width : "139px",
                height : "41px"
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "#1C1C1C",
                  fontSize: "14px",
                  fontFamily: "Lexend",
                  fontWeight: "400",
                  lineHeight: "27px",
                  wordWrap: "break-word",
                }}
              >
                For Individuals
              </div>
            </div>
            <div
              style={{
                borderRadius: "140px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                display: "flex",
                width : "139px",
                height : "41px"
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "14px",
                  fontFamily: "Lexend",
                  fontWeight: "400",
                  lineHeight: "27px",
                  wordWrap: "break-word",
                }}
              >
                For Businesses
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          <ProductCard
            title="Checking Accounts"
            description="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
            iconStyle={{ width: "29.75px", height: "25.50px" }} 
          />
          <div
            style={{
            height : "300px",
              alignSelf: "stretch",
              transformOrigin: "0 0",
              border: "1px #262626 solid",
            }}
          ></div>
          <ProductCard
            title="Savings Accounts"
            description="Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
            iconStyle={{ width: "29.75px", height: "25.50px" }}
          />
          <div
            style={{
                height : "300px",
                alignSelf: "stretch",
                transformOrigin: "0 0",
                border: "1px #262626 solid",
                
            }}
          ></div>
          <ProductCard
            title="Loans and Mortgages"
            description="Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
            iconStyle={{ width: "29.75px", height: "26.41px" }}
          />
        </div>
      </div> */}

      <div className="products-section" style={{ marginTop: "120px" }}>
        <div className="products-header">
          <div className="products-title-container">
            <div className="products-title">
              <span className="products-title-main">Our </span>
              <span className="products-title-highlight">Products</span>
            </div>
            <div className="products-subtitle">
              Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations.
            </div>
          </div>
          <div className="products-tabs">
            <div className="tab-individuals">
              <div className="tab-text-individuals">For Individuals</div>
            </div>
            <div className="tab-businesses">
              <div className="tab-text-businesses">For Businesses</div>
            </div>
          </div>
        </div>
        <div className="products-list">
          <ProductCard
            title="Checking Accounts"
            description="Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."
            
            iconimg={productlogo1}
          />
          <div className="divider"></div>
          <ProductCard
            title="Savings Accounts"
            description="Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."
          
            iconimg={productlogo2}
          />
          <div className="divider"></div>
          <ProductCard
            title="Loans and Mortgages"
            description="Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."
       
            iconimg={productlogo3}
          />
        </div>
      </div>

    </div>
  );
};

const ProductCard = ({ title, description, iconStyle, iconimg }) => {
  return (
    <div className="container">

      <div className="product-card">
        <div className="product-card-icon-container">
          <div className="product-card-icon-background">
            <div className="product-card-icon-inner-background">
              <div className="product-card-icon d-flex justify-content-center align-items-center">
                  <img src={iconimg} alt="" />
              
              </div>
            </div>
          </div>
        </div>
        <div className="product-card-content">
          <div className="product-card-title">
            {title}
          </div>
          <div className="product-card-description">
            {description}
          </div>
        </div>
      </div>


    </div>
  );
};

export default Products;
