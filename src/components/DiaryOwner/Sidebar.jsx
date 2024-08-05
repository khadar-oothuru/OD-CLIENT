import  from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen p-4 border-r border-gray-500">
      <ul className="space-y-4">
        <li>
          <Link to="/search-milk-seller" className="text-black hover:text-[#00d684] font-medium text-lg">
            Search Milk Seller
          </Link>
        </li>
        <li>
          <Link to="/milk-data" className="text-black hover:text-[#00d684] font-medium text-lg">
            Milk Data
          </Link>
        </li>
        <li>
          <Link to="/overall-milk-data" className="text-black hover:text-[#00d684] font-medium text-lg">
            Overall Milk Data
          </Link>
        </li>
        <li>
          <Link to="/payments" className="text-black hover:text-[#00d684] font-medium text-lg">
            Payments
          </Link>
        </li>
        <li>
          <Link to="/transaction-history" className="text-black hover:text-[#00d684] font-medium text-lg">
            Transaction History
          </Link>
        </li>
        <li>
          <Link to="/report" className="text-black hover:text-[#00d684] font-medium text-lg">
            Report
          </Link>
        </li>
        <li>
          <Link to="/logout" className="text-black hover:text-[#00d684] font-medium text-lg">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
