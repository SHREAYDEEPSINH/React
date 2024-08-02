import React from "react";
import './Openaccount.css'



function Openaccount() {
    return (
        <div className="container">
            <div  style={{ height: "223px", marginTop: "120px" }}>
                <div  className="Openaccount-main"
                    style={{
                        width: 1280,
                        height: 223,
                        padding: 60,
                            background:
                                "linear-gradient(0deg, #1C1C1C 0%, #1C1C1C 100%), linear-gradient(267deg, #1C1C1C 41%, rgba(28.05, 28.05, 28.05, 0) 100%)",
                        borderRadius: 20,
                        border: "1px rgba(202.47, 255, 51, 0.20) solid",
                        alignItems: "center",
                        gap: 150,
                        display: "inline-flex",
                    }}
                >
                
                    <div
                        style={{
                            flex: "1 1 0",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: 10,
                            display: "inline-flex",
                        }}
                    >
                        <div style={{ alignSelf: "stretch" }}>
                            <span style={{ color: 'white', fontSize: 30, fontFamily: 'Lexend', fontWeight: 400, lineHeight: '45px', wordWrap: 'break-word' }}>
                                Start your financial journey with{" "}
                            </span>
                            <span style={{ color: '#CAFF33', fontSize: 30, fontFamily: 'Lexend', fontWeight: 400, lineHeight: '45px', wordWrap: 'break-word' }}>
                                YourBank today!
                            </span>
                        </div>
                        <div
                            style={{
                                alignSelf: "stretch",
                                color: "#B3B3B3",
                                fontSize: 16,
                                fontFamily: "Lexend",
                                fontWeight: "300",
                                wordWrap: "break-word",
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
                            pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
                            Nascetur viverra arcu sed amet cursus purus.
                        </div>
                    </div>
                    <div
                        style={{
                            paddingLeft: 20,
                            paddingRight: 20,
                            paddingTop: 14,
                            paddingBottom: 14,
                            background: "#CAFF33",
                            borderRadius: 82,
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                            display: "flex",
                        }}
                    >
                        <div
                            style={{
                                color: "#1C1C1C",
                                fontSize: 14,
                                fontFamily: "Lexend",
                                fontWeight: "400",
                                wordWrap: "break-word",
                            }}
                        >
                            Open Account
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Openaccount;
