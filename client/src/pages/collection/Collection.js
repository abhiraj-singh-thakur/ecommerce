// noinspection BadExpressionStatementJS

import React, {useEffect, useState} from "react";
import './Collection.scss'
import Product from "../../components/product/Product";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {axiosClient} from "../../utils/axiosClient";

function Collection() {
    const navigate = useNavigate();
    const params = useParams();
    const [categoryId, setCategoryId] = useState('');
    const categories = useSelector(state => state.categoryReducer.categories);
    const [products, setProducts] = useState([]);

    const sortOptions = [
        {
            value: 'Price - Low to High',
            sort: 'Price'
        },
        {
            value: 'Newest First',
            sort: 'createdAt'
        }
    ];
    const [sortBy, setSortBy] = useState(sortOptions[0].sort);

    async function fetchProducts() {
        try {
            console.log('params', params.categoryId);
            console.log('sortBy', sortBy);
            let url = null;
            if (sortBy === 'Price') {
                  url = params.categoryId ? `/products?populate=Image&filters[category][key][$eq]=${params.categoryId}&sort=${sortBy}` : `/products?populate=Image&sort=${sortBy}`;
            }
            else {
                url = params.categoryId ? `/products?populate=Image&filters[category][key][$eq]=${params.categoryId}&sort=${sortBy}:desc` : `/products?populate=Image&sort=${sortBy}:desc`;
            }
            const response = await axiosClient.get(url);
            setProducts(response.data.data);
            console.log('Products:', products)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        setCategoryId(params.categoryId);
        fetchProducts().then();
    }, [params, sortBy]);

    const updateCategory = (event) => {
        navigate(`/category/${event.target.value}`);
        console.log("Checked", event.target.value);
    }
    console.log(params.categoryId);

    return (
        <div className="Categories">
            <div className="container">
                <div className="header">
                    <div className="info">
                        <h2>Explore All Print and Artwork</h2>
                        <p>
                            India's largest collection of wall posters for your bedroom, living room, kids room, kitchen
                            and posters & art prints at the highest quality lowest price guaranteed.
                        </p>
                    </div>
                    <div className="sort-by">
                        <div className="sort-by-container">
                            <h3 className="sort-by-text">Sort By</h3>
                            <select
                                className="select-sort-by"
                                name="sort-by"
                                id="sort-by"
                                onChange={(event) => setSortBy(event.target.value)}
                            >
                                {sortOptions.map((option) => (
                                    <option key={option.sort} value={option.sort}>
                                        {option.value}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="filter-box">
                        <div className="category-filter">
                            <h3>Category</h3>
                            {categories?.map((item) => (
                                <div className="filter-radio" key={item.attributes.key}>
                                    <input
                                        type="radio"
                                        id={item.attributes.key}
                                        value={item.attributes.key}
                                        name="category"
                                        onChange={updateCategory}
                                        checked={item.attributes.key === categoryId}
                                    />
                                    <label htmlFor={item.attributes.key}>
                                        <div className="category-item">
                                            <h4>{item.attributes.Title}</h4>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="products-box">
                        {products.map((product) => <Product key={product.id} product={product}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
