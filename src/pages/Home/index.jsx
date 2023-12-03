import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Product } from "../../components/Products";
import { data } from "../../utils/data";

export function Home() {
    const [allProducts, setAllProducts] = useState(data.map( product => {
        return(
            <Product 
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                rating={product.rating}
                votes={product.votes}
                popular={product.popular}
                available={product.available}
            />
        )
    }));

    const [productsInView, setProductsInView] = useState(allProducts);
    const [availableNowActive, setAvailableNowActive] = useState(false);

    const showAllProcuts = () => {
        setProductsInView(allProducts);
        setAvailableNowActive(false)
    }

    const showAvailableNow = () => {
        const availableNow = allProducts.filter(product => product.props.available);
        setProductsInView(availableNow);
        setAvailableNowActive(true)
    }

    return(
        <Container>
            <div className="image"></div>
            <main>
                <header>
                    <div className="icon"></div>
                    <h1>Our Collection</h1>
                    <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>

                    <div className="buttons">
                        <button onClick={showAllProcuts} className={!availableNowActive ? "active" : ""}>All Products</button>
                        <button onClick={showAvailableNow} className={availableNowActive ? "active" : ""}>Available Now</button>
                    </div>
                </header>

                <div className="products">
                    {
                        productsInView
                    }
                </div>
            </main>

        </Container>
    )
}