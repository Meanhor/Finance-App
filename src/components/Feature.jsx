import React from "react";
import RentalCollection from "../assets/RentalCollection.png";
import TenantManagement from "../assets/RentalManagement.png";
import MaintenanceRequest from "../assets/MaintenanceRequest.png";
import FinanceReport from "../assets/FinanceReport.png";

function Feature() {
  return (
    <div className="w-full min-h-screen justify-center bg-[#141414] text-center py-36 px-4">
      <h2 className="text-5xl font-bold mb-4 text-[#00df9a] pb-12">
        Our features
      </h2>
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={RentalCollection}
            alt="Rental Collection"
            className="mx-auto mb-5 size-20"
          />
          <h3 className="text-xl font-semibold mb-2">Rental Collection</h3>
          <p className="text-gray-700 mb-4">
            Effortlessly manage rent payments and track balances with automated
            collection.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Learn more →
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={TenantManagement}
            alt="Tenant Management"
            className="mx-auto mb-5 size-20"
          />
          <h3 className="text-xl font-semibold mb-2">Tenant Management</h3>
          <p className="text-gray-700 mb-4">
            Optimize tenant applications, leases, and communication processes
            for smooth operation.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Learn more →
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={MaintenanceRequest}
            alt="Maintenance Requests"
            className="mx-auto mb-5 size-20"
          />
          <h3 className="text-xl font-semibold mb-2">Maintenance Requests</h3>
          <p className="text-gray-700 mb-4">
            Simplify maintenance requests with tracking, assigning work, &
            service integration.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Learn more →
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img
            src={FinanceReport}
            alt="Financial Report"
            className="mx-auto mb-5 size-20"
          />
          <h3 className="text-xl font-semibold mb-2">Financial Report</h3>
          <p className="text-gray-700 mb-4">
            Generate reports & optimize rental performance with actionable
            insights.
          </p>
          <a href="#" className="text-blue-500 hover:underline">
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Feature;
