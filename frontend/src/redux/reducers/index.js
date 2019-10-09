const initialState = {
  users: [], 
  productTypes: [], 
  products: [], 
  status: 'INIT',
}

export default (state = initialState, action = {}) => {
  switch (action.type) {

    case "FETCHING_USERS":
    return {
        ...state,
        status : 'FETCHING'
    };

    case "SET_USERS":
    return {
        ...state,
        users : action.payload,
        status: 'FETCHED'
    };

    case "FETCHED_PRODUCT_TYPE":
    return {
        ...state,
        productTypes : action.payload,
        status: 'FETCHED'
    };

    case "FETCHED_PRODUCTS":
    return {
        ...state,
        products : action.payload,
        status: 'FETCHED'
    };

    case "ADD_USER":
    return {
        ...state,
        users : [...state.users, ...[action.payload]]
    };
    
    default:
      return state;
  }
}
