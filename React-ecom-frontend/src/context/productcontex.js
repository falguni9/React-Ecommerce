import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";

const AppContext = createContext(); // creating a storage.

// const API = "https://api.pujakaitem.com/api/products";
const API = "https://react-backend-ecommerce.onrender.com/reacteccomBack/api/v1/productlist/all";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],  // all product list
  featureProducts: [], // all feature product in home page (true value in feacture api list)
  isSingleLoading: false,
  singleProduct: {},
};
// AppProvider = ({ children }) main funtion
//children === <app/> area of service. wrape in index.js for provider.
const AppProvider = ({ children }) => { 
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      // console.log(res)
      const products = await res.data.result;//changes done
      // console.log(products)
      // payload get all api data // dispatch works as a broker send type to action done.
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data.result; //changes done
      // console.log(singleProduct)
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
 // useEffect() for only one time api call
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
     //value is act as props that provider send it to other component
     //all state of reduser for that ... state
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
