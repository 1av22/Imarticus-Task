import React, { useState } from 'react';

const Partners = () => {
    const [showMore, setShowMore] = useState(false);

    // Define the first 12 partners and additional partners
    const partners = [
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/1.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/2.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/3.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/4.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/5.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/6.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/7.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/8.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/9.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/10.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/11.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/12.webp"
    ];

    const additionalPartners = [
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/13.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/14.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/15.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/16.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/17.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/18.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/19.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/20.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/21.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/22.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/23.webp",
        "https://cdn.pegasus.imarticus.org/Mycaptain/hiringPartners/24.webp"
    ];

    // Combine initial and additional partners if "showMore" is true
    const displayedPartners = showMore ? [...partners, ...additionalPartners] : partners;

    return (
        <div id="hiring-partners" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            backgroundColor: "rgba(60,72,82,.08)"
        }}>
            <div style={{
                margin: '20px',
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '3.5rem',
            }}>
                <h1 style={{
                    fontSize: '2rem',
                    marginBottom: '1rem',
                    textAlign: 'center',
                    color: '#333',
                }}>Our Partners</h1>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    justifyContent: 'center',
                    marginTop: '20px'
                }}>
                    {displayedPartners.map((partner, index) => (
                        <img key={index} src={partner} alt={`Partner ${index + 1}`} style={{ width: '150px' }} />
                    ))}
                </div>
                {!showMore && (
                    <p
                        onClick={() => setShowMore(true)}
                        style={{
                            marginTop: '20px',
                            fontWeight: '700',
                            fontSize: '1.3rem',
                            lineHeight: '1.5',
                            color: '#3c4852',
                            cursor: 'pointer',
                            textDecoration: 'none'
                        }}
                    >
                        and more
                    </p>
                )}
            </div>
        </div>
    );
};

export default Partners;
