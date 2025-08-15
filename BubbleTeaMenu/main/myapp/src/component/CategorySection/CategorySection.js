import React from 'react';
import './CategorySection.css'


function chunkIntoColumns(items, itemsPerCol, minColumns=2)
{
    if (!Array.isArray(items)) return Array.from({ length: minColumns }, () => []);

    if (items.length <=itemsPerCol && minColumns == 2)
    {
        const mid = Math.ceil(items.length /2);
        const first = items.slice(0, mid);
        const second = items.slice(mid);
        return [first, second.length ? second: []];
    }

    const chunks = [];
    for (let i = 0; i< items.length; i += itemsPerCol)
    {
        chunks.push(items.slice(i, i + itemsPerCol));
    }

    while(chunks.length < minColumns) chunks.push([]);
    return chunks;
}

export default CategorySection;

function CategorySection({ title, items = [], itemsPerColumn =5, minColumns = 2 }) {

    const columns = chunkIntoColumns(items, itemsPerColumn, minColumns);
return(
    <section className="category-section">
        <h2 className="category-title">{title}</h2>
        <div className="category-columns">
            {columns.map((col, idx) => (
                <ul className='category-column' key={idx}>
                    {col.map((item,i) => (
                        <li className="category-item" key={item.id || item.name || i}>
                            <span className="item-name">{item}</span>
                            {item.price && <span className="item-price">{item.price}</span>}
                        </li>
                    ))}

                </ul>
            ))}
        </div>
    </section>
);
}