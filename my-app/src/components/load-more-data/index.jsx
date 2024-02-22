import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );

        const result = await response.json();

        if (result && result.products && result.products.length) {
          //setProducts(result.products);
          //setProducts((oldProducts) => [...oldProducts, ...result.products]);
          if(count === 0){
            setProducts(result.products);
          }else{
            setProducts((oldProducts) => [...oldProducts, ...result.products]);
          }
          setLoading(false);
        }

        console.log(result);
      } catch (e) {
        console.log("Error: ", e);
        setLoading(false);
      }
    }

    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div> Loading Data ! Please Wait. </div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product">
                {/*this should be added to this div but I get warning messages. To be added later. key={item.id}*/}
                <img src={item.thumbnail} alt={item.title}></img>
                <p>{item.title}</p>
              </div>
            ))
          : //<div>No Products Found</div>
            null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
