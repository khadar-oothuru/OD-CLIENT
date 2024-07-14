// import React, { useState } from 'react';
// import api from '../services/api';

// const BillGeneration = () => {
//   const [bill, setBill] = useState(null);
//   const [sellerId, setSellerId] = useState('');

//   const handleGenerateBill = async () => {
//     const result = await api.get(`/transactions/bill/${sellerId}`);
//     setBill(result.data);
//   };

//   return (
//     <div>
//       <input type="text" value={sellerId} onChange={(e) => setSellerId(e.target.value)} placeholder="Seller ID" />
//       <button onClick={handleGenerateBill}>Generate Bill</button>
//       {bill && (
//         <div>
//           <h2>Bill</h2>
//           <pre>{JSON.stringify(bill, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BillGeneration;
