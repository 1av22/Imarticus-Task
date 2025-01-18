import React from "react";
import { Container } from "react-bootstrap";

function MyCaptain() {
    return (
        <Container className="text-center mt-5" id="overview">
            <img src="https://webcdn.imarticus.org/myCaptainDM/mycaptain-logo_11.svg" alt="Logo" />
            <div className="hdng">
                <h1
                    style={{
                        fontSize: "48px",
                        fontWeight: "700",
                        lineHeight: "120%",
                        color: "#3c4852",
                        textAlign: "center",
                        fontFamily: "Source Sans 3",
                        margin: "10px",
                        padding: "10px"
                    }}
                >
                    Become a{" "}
                    <span style={{ color: "rgb(255, 122, 79)" }}>
                        Digital Marketer
                    </span>
                    in<br />18 Weeks
                </h1>
            </div>
            <p
                style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    lineHeight: "120%",
                    color: "#3c4852",
                    fontFamily: "Source Sans 3",
                    margin: "10px",
                    padding: "10px"
                }}
            >
                MyCaptain Digital Marketing Program with Job Assurance
            </p>
            <div
                className="batch_details_table container"
                style={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    padding: "0",
                }}
            >
                <table
                    style={{
                        margin: "0 auto",
                        width: "100%",
                        tableLayout: "fixed", // Ensures equal column width
                        borderCollapse: "collapse", // Makes table cleaner
                    }}
                >
                    <thead>
                        <tr>
                            <th
                                style={{
                                    padding: "20px 10px",
                                    borderRight: "1px solid grey",
                                    textAlign: "center",
                                }}
                            >
                                <h5 style={{ fontSize: "16px" }}>Next Batch</h5>
                                <h4 style={{ fontSize: "20px" }}>February 1</h4>
                            </th>
                            <th
                                style={{
                                    padding: "20px 10px",
                                    borderRight: "1px solid grey",
                                    textAlign: "center",
                                }}
                            >
                                <h5 style={{ fontSize: "16px" }}>Available Seats</h5>
                                <h4 style={{ fontSize: "20px" }}>29/60</h4>
                            </th>
                            <th
                                style={{
                                    padding: "20px 10px",
                                    textAlign: "center",
                                }}
                            >
                                <h5 style={{ fontSize: "16px" }}>Taught by experts from</h5>
                                <h4 style={{ fontSize: "20px" }}>Rapido, Deloitte, MFine, Zomato</h4>
                            </th>
                        </tr>
                    </thead>
                </table>
                <p
                    colSpan="3"
                    style={{
                        background: "#f8f9fa",
                        borderRadius: "10px",
                        padding: "10px",
                        textAlign: "center", // Center aligns the content
                        width: "20%",
                    }}
                >
                    4.51 1.2 Lacs+ Learners
                </p>
            </div>

            <div className="enroll_btn" style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", width: "70%", margin: "0 auto", gap: "10px" }}>
                    <button
                        style={{
                            flex: 1,
                            backgroundColor: "rgb(255, 122, 79)",
                            color: "#fff",
                            border: "none",
                            padding: "20px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            borderRadius: "10px",
                        }}
                    >
                        Apply now
                    </button>
                    <button
                        style={{
                            flex: 1,
                            backgroundColor: "rgb(33, 42, 57)",
                            color: "#fff",
                            border: "none",
                            padding: "20px 20px",
                            fontSize: "16px",
                            cursor: "pointer",
                            borderRadius: "10px",
                        }}
                    >
                        Download Brochure
                    </button>
                </div>
            </div>
        </Container>
    );
}

export default MyCaptain;