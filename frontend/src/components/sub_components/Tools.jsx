import React from 'react';

const Tools = () => {
    const tools = [
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/1.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/2.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/3.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/4.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/5.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/image-20.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/image-21.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/image-22.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/image-23.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/image-24.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/image-25.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/image-26.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/image-27.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/image-28.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/image-29.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/master/image-30.webp"

    ];

    return (
        <div style={{
            width: "100%",
            backgroundColor: "#035642",
            padding: '40px 0',
            color: 'white',
            display: 'flex',
            // alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div
                style={{
                    width: "80%"
                }}
            >
                <div style={{
                    margin: '0 auto',
                    width: '85%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        marginBottom: '2rem',
                        fontWeight: '700',
                    }}>Master <span style={{ color: "rgb(255, 122, 79)" }}>Industry-Relevant Tools</span></h1>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        columnGap: '2rem',
                        rowGap: '1.5rem',
                    }}>
                        {tools.map((tool, index) => (
                            <img
                                key={index}
                                src={tool}
                                alt={`Tool ${index + 1}`}
                                style={{
                                    width: '150px',
                                    height: 'auto',
                                    maxWidth: '100%',
                                    objectFit: 'contain',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;
