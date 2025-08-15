import React from 'react';
import './CategorySection.css'


function CategorySection({ title, items }) {
return(
    <section className="category-section">
        <h2>{title}</h2>
        <ul className="items-list">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </section>
);
}

export default CategorySection;