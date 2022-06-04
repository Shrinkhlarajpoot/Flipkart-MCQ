import './App.css';
import { Cards } from './components/Cards/Cards';
import { Nav } from './components/Header/Nav';
import { useProducts } from './context/productContext';

function App() {
 const {state, dispatch, getuniqueSize, filteredProducts}= useProducts();
 const filterClearHandler = () => {
  dispatch({type: "FILTER_CLEAR", payload: {price: "", size: [], brand: "", category: ""}})
}
  return (
    <div className="App bg-green">
    <Nav/>
    <div className="main-container">
      <div className="filter-section">
           <h2>Filters</h2>
           <h3 onClick={filterClearHandler} className="clear_filter">Clear</h3>
           <h4>Sort By Price</h4>
           <label><input type="radio" name="sortbyprice" checked={state.price && state.price === "LOW_TO_HIGH"}
                 
                    onChange={() =>
                      dispatch({ type: "LOW_TO_HIGH", payload: "LOW_TO_HIGH" })
                    }  ></input>Low to High</label>
           <label><input type="radio" name="sortbyprice" checked={state.price && state.price === "HIGH_TO_LOW"}
                
                    onChange={() =>
                      dispatch({ type: "HIGH_TO_LOW", payload: "HIGH_TO_LOW" })
                    }></input>High to Low</label>

           <h4>Filter By Size</h4>
         {getuniqueSize?.map((size,i)=>
         <label key={i}><input type="checkbox" 
         checked={state.size.includes(size)}
                        onChange={() =>
                          dispatch({ type: "CLOTHS_SIZE", payload: size })
                        }
         ></input>{size}</label>
         )}

           <h4>Sort By Gender</h4>
           <label className="text-sm">
                  <input
                    type="radio"
                    checked={state.category && state.category === "Men"}
                    name="category"
                    onChange={() =>
                      dispatch({ type: "SORT_BY_CATEGORY", payload: "Men" })
                    }
                  />{" "}
                  <span>Men</span>
                </label>
                <label className="text-sm">
                  <input
                    type="radio"
                    checked={state.category && state.category === "Women"}
                    name="category"
                    onChange={() =>
                      dispatch({ type: "SORT_BY_CATEGORY", payload: "Women" })
                    }
                  />{" "}
                  <span>Women</span>
                </label>
      </div>
      <div className="product-container">
       {filteredProducts?.map((products)=>
       <Cards products={products} key={products.id}/>)}
      </div>
    </div>
    </div>
  );
}

export default App;
