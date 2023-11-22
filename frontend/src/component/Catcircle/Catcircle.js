import React from 'react';
import "./Catcircle.css";

const catcircles = [
    {
        id: 1,
        category: 'Men',
        bgimage: require('../../images/image-box1.jpg'),
    },
    {
        id: 2,
        category: 'Women',
        bgimage: require('../../images/image-box2.jpg'),
    },
    {
        id: 3,
        category: 'Children',
        bgimage: require('../../images/image-box3.jpg'),
    },
    {
        id: 4,
        category: 'Exclusive',
        bgimage: require('../../images/image-box4.jpg'),
    },
    // Add more products as needed
];

export default function Catcircle() {
    return (
        <>
            {catcircles.map(catcircle => (
                <div className='cat-circle' key={catcircle.id}>
                    <img src={catcircle.bgimage} className='cr' alt={catcircle.category} />
                    <p>{catcircle.category}</p>
                </div>
            ))}

        </>
    )
}
