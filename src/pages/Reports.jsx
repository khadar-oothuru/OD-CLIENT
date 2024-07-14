// import React, { useEffect, useState } from 'react';
// import api from '../services/api';

// const Reports = () => {
//   const [reports, setReports] = useState([]);

//   useEffect(() => {
//     const fetchReports = async () => {
//       const result = await api.get('/reports');
//       setReports(result.data);
//     };

//     fetchReports();
//   }, []);

//   return (
//     <div>
//       <h2>Reports</h2>
//       <ul>
//         {reports.map((report) => (
//           <li key={report.id}>{report.detail}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Reports;
