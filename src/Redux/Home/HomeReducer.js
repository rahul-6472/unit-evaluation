import {
  GET_ALL_LATEST_MOVIES,
  GET_ALL_LATEST_MOVIES_LOADING,
  GET_ALL_LATEST_MOVIES_FAILURE,
  GET_ALL_LATEST_MOVIES_SUCCESS,
} from "./Action";

export const HomeReducer = (store = {movies:[],isLoading:false,isError:false},{type,payload}) => {
    switch (type) {
        case GET_ALL_LATEST_MOVIES_LOADING:
      return {
        ...store,
       isLoading:true,
       isError:false,
       movies: [],
      };

    case GET_ALL_LATEST_MOVIES_SUCCESS:
      return {
        ...store,
        isLoading:false,
        isError:false,
        movies:[...payload]
      };

    case GET_ALL_LATEST_MOVIES_FAILURE:
      return {
        ...store,
         isLoading:false,
         isError:true,
         movies:[]
      };
    default:
      return store;
  }
 }
