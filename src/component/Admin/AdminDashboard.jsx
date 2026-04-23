import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import Header from "../specialFunction/Header";

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const agreementsRef = ref(db, "agreements");

    onValue(agreementsRef, (snapshot) => {
      const rawData = snapshot.val();

      if (rawData) {
        const formattedData = Object.entries(rawData).map(([id, value]) => ({
          id,
          ...value,
        }));

        setData(formattedData);
      } else {
        setData([]);
      }
    });
  }, []);

  return (
    <div className="p-4 sm:p-6 lg:p-10 bg-gray-50 min-h-screen">
      <Header />

      <h1 className="text-2xl sm:text-2xl font-bold mt-16">
        Admin Dashboard
      </h1>

      <div className="overflow-x-auto bg-white shadow rounded-lg mt-6">
        <table className="min-w-[900px] w-full text-sm sm:text-base">

          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Company</th>
              <th className="p-3">Type</th>
              <th className="p-3">Address</th>
              <th className="p-3">Email/Phone</th>
              <th className="p-3">WhatsApp</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">

                <td className="p-3 font-bold">{index + 1}</td>
                <td className="p-3">{item.fullName}</td>
                <td className="p-3">{item.companyName}</td>
                <td className="p-3">{item.subscriberType}</td>
                <td className="p-3">{item.address}</td>
                <td className="p-3">{item.emailPhone}</td>
                <td className="p-3">{item.whatsappNumber}</td>
                <td className="p-3">{item.date}</td>

              </tr>
            ))}
          </tbody>

        </table>
       
      </div>
      
    </div>
  );
};

export default AdminDashboard;