// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { register } from '../redux/actions';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('milkSeller');
//   const [milkType, setMilkType] = useState('cow');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(register({ email, password, role, milkType }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//       <select value={role} onChange={(e) => setRole(e.target.value)}>
//         <option value="milkSeller">Milk Seller</option>
//         <option value="dairyOwner">Dairy Owner</option>
//       </select>
//       {role === 'milkSeller' && (
//         <select value={milkType} onChange={(e) => setMilkType(e.target.value)}>
//           <option value="cow">Cow Milk</option>
//           <option value="buffalo">Buffalo Milk</option>
//         </select>
//       )}
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;
