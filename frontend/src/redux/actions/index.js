import firebase from '../../firebase';

const usersCollection = firebase.firestore().collection('users')
const productCollection = firebase.firestore().collection('product-type')
const productsCollection = firebase.firestore().collection('products')
const sellsCollection = firebase.firestore().collection('sells')


export const getUsers = () => {
  return (dispatch, getState) => {
    dispatch({ type: 'FETCHING_USERS' });
    usersCollection.get()
    .then((response) => {
      let payload = [] 
      response.forEach(e => {
        payload.push({ ...e.data(), id: e.id })
      });
      setTimeout(() => {
        dispatch({ type: 'SET_USERS', payload: payload });
      }, 3000);
    })
    .catch(err => {
      dispatch({ type: 'SET_STATUS', payload: 'NOT_FORM' })
    })

  }
}

export const getProductsTypes = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'FETCHING_PRODUCT_TYPE' });
    try {
      let response = await productCollection.get()
      let payload = [] 
      response.forEach(e => {
        payload.push({ ...e.data(), id: e.id })
      });
      dispatch({ type: 'FETCHED_PRODUCT_TYPE', payload }); 
    } catch (error) {
      dispatch({ type: 'SET_STATUS', payload: 'NOT_FORM' }) 
    }
  }
}

export const getProducts = () => {
  return async (dispatch, getState) => {
    dispatch({ type: 'FETCHING_PRODUCTS' });
      productsCollection.onSnapshot((response) => {

        let payload = [] 
        response.forEach(e => {
          payload.push({ ...e.data(), id: e.id })
        });
        console.log('====================================');
        console.log("SNAPSHOT");
        console.log('====================================');
        dispatch({ type: 'FETCHED_PRODUCTS', payload }); 
      })
  }
}

export const buyProduct = (product) => {
  return async (dispatch, getState) => {
 
    sellsCollection.add({
      product, 
      date: new Date().getTime()
    }).then(() => {
      alert('Ha comprado el producto')
    })
  }
}
