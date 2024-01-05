import React from 'react';
import "./Catcircle.css";
import men from '../../images/image-box3.jpg';
import women from '../../images/image-box2.jpg';
import children from '../../images/image-box1.jpg';
import exclusive from '../../images/image-box4.jpg';

const catcircles = [
    {
        id: 1,
        category: 'Men',
        bgimage: men,
    },
    {
        id: 2,
        category: 'Women',
        bgimage: women,
    },
    {
        id: 3,
        category: 'Children',
        bgimage: children,
    },
    {
        id: 4,
        category: 'Exclusive',
        bgimage: exclusive,
    },
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
