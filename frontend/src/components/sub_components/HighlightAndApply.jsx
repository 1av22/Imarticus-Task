import React from "react";

function HighlightAndApply() {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",  // Allow wrapping for responsiveness
            gap: "2rem",
            width: "100%",
            padding: "2rem",
            backgroundColor: "#035642",
            borderRadius: "8px",
            margin: "auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginTop: "2rem",
            alignItems: "center",
        }}>
            {/* Key Highlights Section */}
            <div className="key_highlights" style={{ flex: "1 1 45%", marginLeft: "2.5rem" }}>
                <h2 style={{
                    fontSize: "36px",
                    color: "#fff",
                    marginBottom: "1rem",
                    fontWeight: "700"
                }}>
                    Key Highlights
                </h2>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "1rem",
                    marginTop: "2.5rem",
                    marginBottom: "2.5rem",
                }}>
                    <div style={{
                        backgroundColor: "rgb(255, 122, 79)",
                        height: "6.5rem",
                        width: "90%",
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: "bold",
                        marginBottom: "2rem"
                    }}>
                        <h1 style={{ fontWeight: "700", margin: "0" }}>1600+</h1>
                        <p>Students Placed</p>
                    </div>
                    <div style={{
                        backgroundColor: "rgb(255, 122, 79)",
                        height: "6rem",
                        width: "90%",
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: "bold",
                        marginBottom: "2rem"
                    }}>
                        <h1 style={{ fontWeight: "700", margin: "0" }}>12LPA</h1>
                        <p>Highest CTC</p>
                    </div>
                    <div style={{
                        backgroundColor: "rgb(255, 122, 79)",
                        width: "90%",
                        height: "6rem",
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: "bold"
                    }}>
                        <h1 style={{ fontWeight: "700", margin: "0" }}>10</h1>
                        <p>Assured Interviews</p>
                    </div>
                    <div style={{
                        backgroundColor: "rgb(255, 122, 79)",
                        width: "90%",
                        height: "6rem",
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: "bold"
                    }}>
                        <h1 style={{ fontWeight: "700", margin: "0" }}>1000+</h1>
                        <p>Hiring Partners</p>
                    </div>
                </div>
                <h5
                    style={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: "700",
                        marginTop: "2rem"
                    }}
                >
                    The Program has been created in collaboration with Managers from
                </h5>

                <div className="partners" style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                    <img style={{ height: "3.5rem" }} src="https://webcdn.imarticus.org/mycaptain/image.webp" alt="zomatop" />
                    <img style={{ height: "3.5rem" }} src="https://webcdn.imarticus.org/mycaptain/logo5.webp" alt="rapido" />
                    <img style={{ height: "3.5rem" }} src="https://webcdn.imarticus.org/mycaptain/logo6.webp" alt="mfine" />
                    <img style={{ height: "3.5rem" }} src="https://webcdn.imarticus.org/mycaptain/deloitte2.webp" alt="deloitte" />
                </div>
            </div>

            {/* Form Section */}
            <div className="course_submission_form" style={{
                display: "flex",
                justifyContent: "center",
                flex: "1 1 45%",
                padding: "1.5rem",
                borderRadius: "8px",
            }}>
                <form style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    width: "100%",
                    backgroundColor: "#fff",
                    padding: "1rem",
                    borderRadius: "8px",
                }}>
                    <h2 style={{
                        fontSize: "24px",
                        color: "#333",
                        marginBottom: "1rem",
                        marginTop: "1rem",
                        fontWeight: "bold"
                    }}>
                        Apply for the <span style={{ color: "rgb(255, 122, 79)" }}>MyCaptain Digital Marketing Job Assurance Program</span>
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{
                            fontSize: "14px",
                            color: "#3c4852",
                            fontWeight: "700"
                        }}>Full Name</label>
                        <input
                            type="text"
                            style={{
                                padding: "0.5rem",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                backgroundColor: "white",
                                color: "black"
                            }}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{
                            fontSize: "14px",
                            color: "#3c4852",
                            fontWeight: "700"
                        }}>Email ID</label>
                        <input
                            type="email"
                            style={{
                                padding: "0.5rem",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                backgroundColor: "white",
                                color: "black"
                            }}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{
                            fontSize: "14px",
                            color: "#3c4852",
                            fontWeight: "700"
                        }}>Mobile Number</label>
                        <div style={{ display: "flex", gap: "0.5rem", }}>
                            <select
                                style={{
                                    padding: "0.5rem",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    flex: "0 0 25%",
                                    backgroundColor: "white",
                                    color: "black"
                                }}
                            >
                                <option value="+91">India(+91)</option>
                                <option value="+1">+1</option>
                            </select>
                            <input
                                type="text"
                                style={{
                                    padding: "0.5rem",
                                    border: "1px solid #ccc",
                                    borderRadius: "4px",
                                    flex: 1,
                                    backgroundColor: "white",
                                    color: "black"
                                }}
                            />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label style={{
                            fontSize: "14px",
                            color: "#3c4852",
                            fontWeight: "700"
                        }}>Location</label>
                        <select
                            style={{
                                padding: "0.5rem",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                backgroundColor: "white",
                                color: "black"
                            }}
                        >
                            <option>Select location</option>
                            <option>India</option>
                            <option>USA</option>
                            <option>UK</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        style={{
                            padding: "0.7rem",
                            backgroundColor: "rgb(255, 122, 79)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                            fontWeight: "bold"
                        }}
                    >
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
}

export default HighlightAndApply;
