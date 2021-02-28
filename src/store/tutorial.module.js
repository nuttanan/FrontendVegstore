// import TutorialDataService from '../services/TutorialDataService';

// const product = JSON.parse(localStorage.getItem('product'));
// const initialState = product 
//     ? { status: { loggedIn: true}, product }
//     : { status: { loggedIn: false}, product: null};

export const tutorial = {
    state: {
        forSale: [
          { invId: 1, name: 'An Item', image: '//placehold.it/200', price: 999 },
          { invId: 2, name: 'Thing', image: '//placehold.it/200', price: 1499 },
          { invId: 3, name: 'Doo-dad', image: '//placehold.it/200', price: 499 },
          { invId: 4, name: 'Other thing', image: '//placehold.it/200', price: 299 },
        ],
        inCart: [],
      },
    mutations: {
    ADD_TO_CART(state, invId) { 
        state.inCart.push(invId); 
        localStorage.setItem('tutorial', JSON.stringify(invId));
        
    },
    REMOVE_FROM_CART(state, index) { 
        
        state.inCart.splice(index, 1); },

    },
    getters: {
        forSale: state => state.forSale,
        inCart: state => state.inCart,
      },
    actions: {
        addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
        removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  
    },
};