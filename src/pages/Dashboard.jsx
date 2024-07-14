// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import api from '../services/api';

// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const user = useSelector((state) => state.user);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (user.role === 'dairyOwner') {
//         const result = await api.get('/transactions');
//         setData(result.data);
//       } else if (user.role === 'milkSeller') {
//         const result = await api.get(`/transactions/seller/${user.id}`);
//         setData(result.data);
//       }
//     };

//     fetchData();
//   }, [user]);

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {user.role === 'dairyOwner' ? (
//         <div>
//           <h3>All Transactions</h3>
//           <ul>
//             {data.map((transaction) => (
//               <li key={transaction.id}>{transaction.seller} sold {transaction.quantity}L of {transaction.milkType}</li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <div>
//           <h3>Your Transactions</h3>
//           <ul>
//             {data.map((transaction) => (
//               <li key={transaction.id}>Sold {transaction.quantity}L of {transaction.milkType} to {transaction.dairyOwner}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
