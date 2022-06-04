import { createContext, useContext, useReducer } from "react";
import { products } from "../data";

  import { productreducer } from "./productreducer";
import { filterByCategory } from "../utils/filterByCategory";
import { sortByPrice } from "../utils/sortByPrice";
import { filterBySize } from "../utils/filtertBySize";
import {  uniqueSize } from "../utils/getUniqueSize";

const productContext = createContext();

const initialState = {
    price: "",
    size: [],
    brand: "",
    category: "",
  };
  const useProducts =()=> useContext(productContext);
const ProductContextProvider = ({children})=>{

 const [state,dispatch]= useReducer(productreducer,initialState);
 const getuniqueSize = uniqueSize(products)
 const filterByPrice = sortByPrice(products, state.price);
 const getFilterBySize = filterBySize(filterByPrice, state.size);
 const getFilterByCategory = filterByCategory(
   getFilterBySize,
   state.category
 );

 const filteredProducts = [...getFilterByCategory];

    return(
        <productContext.Provider value={{ products, state, dispatch, filteredProducts,getuniqueSize }} >{children}</productContext.Provider>
    )
}
export {useProducts,ProductContextProvider}