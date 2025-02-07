import React, {useEffect, useState} from 'react';
import Hero from "../../components/hero/Hero";
import "./Home.scss";
import Product from "../../components/product/Product";
import {axiosClient} from "../../utils/axiosClient";
import Collection from "../collection/Collection";
import Categories from "../../components/category/Categories";
function Home(){

    const[category,setCategory]=useState(null);
    const[topPicks,setTopPicks]=useState(null);


    async function fetchData(){
        try {
            const category_data = await axiosClient.get("/categories?populate=image");
            const topPicks = await axiosClient.get("/products?filters[isTopPick]=true&populate=Image&populate=collection");
            setCategory(category_data.data.data);
            setTopPicks(topPicks.data.data);

            console.log('Collection Image:', category);
            // console.log('Top Picks:', topPicks);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData().then();
    },[]);


    return(
        <div className="Home">
            <Hero/>
            <section className="collection container">
                <div className="info">
                    <h2 className="heading">Shop by Category</h2>
                    <p className="sub-heading">Shop from the best </p>
                </div>
                <div className="content">
                    {category?.map(category=><Categories key={category.id} category={category}/>)}
                </div>
            </section>

            <section className="collection container">
                <div className="info">
                    <h2 className="heading">Our Top Picks</h2>
                    <p className="sub-heading">Shop it now </p>
                </div>
                <div className="content">
                    {topPicks?.map(product=><Product key={product.id} product={product}/>)}
                </div>
            </section>
        </div>
    )
}

export default Home;