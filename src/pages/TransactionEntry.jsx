// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import api from '../services/api';

// const TransactionEntry = () => {
//   const [quantity, setQuantity] = useState('');
//   const user = useSelector((state) => state.user);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const transaction = {
//       seller: user.id,
//       dairyOwner: user.dairyOwner,  // Assuming this info is stored in user object
//       quantity,
//       milkType: user.milkType,
//     };
//     await api.post('/transactions', transaction);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" />
//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default TransactionEntry;
