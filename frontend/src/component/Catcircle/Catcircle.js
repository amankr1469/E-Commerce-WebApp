import React from 'react';
import "./Catcircle.scss";

const catcircles = [
    {
        id: 1,
        category: 'Kurta',
        bgimage: require('../../images/image-box1.jpg'),
    },
    {
        id: 2,
        category: 'Shrugs',
        bgimage: require('../../images/image-box2.jpg'),
    },
    {
        id: 3,
        category: 'Bottoms',
        bgimage: require('../../images/image-box3.jpg'),
    },
    {
        id: 4,
        category: 'Sets',
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
