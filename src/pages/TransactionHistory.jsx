// import React, { useEffect, useState } from 'react';
// import api from '../services/api';

// const TransactionHistory = () => {
//   const [history, setHistory] = useState([]);
//   const user = useSelector((state) => state.user);

//   useEffect(() => {
//     const fetchHistory = async () => {
//       const result = await api.get(`/transactions/seller/${user.id}`);
//       setHistory(result.data);
//     };

//     fetchHistory();
//   }, [user]);

//   return (
//     <div>
//       <h2>Your Transaction History</h2>
//       <ul>
//         {history.map((transaction) => (
//           <li key={transaction.id}>{transaction.quantity}L of {transaction.milkType}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TransactionHistory;
