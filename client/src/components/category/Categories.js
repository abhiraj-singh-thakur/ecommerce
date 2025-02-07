import React from 'react';
import './Categories.scss';
import {useNavigate} from "react-router-dom";
function Categories({category}){
    const navigate = useNavigate();
    console.log('Collection inside Categories:',category);
    return(
        <div className="Category" style={{backgroundImage: `url(${category?.attributes?.image.data[0].attributes.url})`}}>
            <div className ="category-content center" onClick={()=>navigate(`/category/${category.attributes.key}`)}>
                <h3 className="heading">{category.attributes.Title}</h3>
            </div>
        </div>
    )
}

export default Categories;