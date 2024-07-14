// const initialState = {
//     user: null,
//     error: null,
//   };
  
//   const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'LOGIN_SUCCESS':
//         return { ...state, user: action.payload };
//       case 'LOGIN_FAIL':
//         return { ...state, error: action.payload };
//       case 'REGISTER_SUCCESS':
//         return { ...state, user: action.payload };
//       case 'REGISTER_FAIL':
//         return { ...state, error: action.payload };
//       default:
//         return state;
//     }
//   };
  
//   export default rootReducer;

// //   // src/redux/reducers.js

// // import { combineReducers } from 'redux';

// // const initialAuthState = {
// //   isAuthenticated: false,
// //   user: null
// // };

// // const authReducer = (state = initialAuthState, action) => {
// //   switch(action.type) {
// //     case 'LOGIN_SUCCESS':
// //       return {
// //         ...state,
// //         isAuthenticated: true,
// //         user: action.payload
// //       };
// //     case 'LOGOUT':
// //       return {
// //         ...state,
// //         isAuthenticated: false,
// //         user: null
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // export default combineReducers({
// //   auth: authReducer
// // });
