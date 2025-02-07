import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Navbar from "./components/navbar/Navbar";
import Footer from "./footer/Footer";
import Collection from "./pages/collection/Collection";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchCategories} from "./redux/categorySlice";
import Categories from "./components/category/Categories";
import Payments from "./components/payments/Payments";

function App() {

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/category/:categoryId' element={<Collection/>}></Route>
                <Route path='/category' element={<Collection/>}></Route>
                <Route path='/products/:productId' element={<ProductDetails/>}></Route>
                <Route path='/payments/:status' element={<Payments/>}></Route>
                <Route path='*' element={
                    <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center',height: '100vh', fontSize: '2em'}}>
                        404 Not Found
                    </h1>}>
                </Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
