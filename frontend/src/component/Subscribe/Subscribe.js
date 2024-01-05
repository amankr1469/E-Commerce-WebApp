import React from 'react';
import "./Subscribe.css";

const SectionWithBackground = () => {
    return (
        <section className="section-with-background">
            <div className="background-image" />
            <div className="content">
                <h2 className="heading">Subscribe to LCF newsletter</h2>
                <p className="description">Keep in touch with us by subscribing to our newsletter to stay updated on upcoming sales,
                    special discounts and limited edition launches.</p>
                <div className="email-input">
                    <input className="email" type="email" placeholder="Enter your email" />
                    <button className="subscribe-button">Subscribe</button>
                </div>
            </div>
        </section>
    );
};

export default SectionWithBackground;
