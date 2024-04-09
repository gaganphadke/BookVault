import React from 'react';

const Dashboard = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Inventory Dashboard</h1>
      <h1>hewvifhv </h1>
      
      <section className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold mb-2">Inventory Overview</h2>
        <p>Total Books in Stock: 100</p>
        <p>Books Sold: 50</p>
        <p>Books Out of Stock: 10</p>
      </section>
      
      <section className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold mb-2">Sales Statistics</h2>
        <p>Display sales statistics here</p>
      </section>
      
      <section className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold mb-2">Book Listings</h2>
        <p>Display book listings here</p>
      </section>
      
      <section className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold mb-2">Inventory Alerts</h2>
        <p>Display inventory alerts here</p>
      </section>
      
      <section className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold mb-2">Order Management</h2>
        <p>Display order management features here</p>
      </section>
      
      <section className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold mb-2">Analytics and Reports</h2>
        <p>Display analytics and reports here</p>
      </section>
      
      <section className="border-b border-gray-200 pb-4">
        <h2 className="text-xl font-semibold mb-2">User Management</h2>
        <p>Display user management features here</p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold mb-2">Settings and Configuration</h2>
        <p>Display settings and configuration options here</p>
      </section>
    </div>
  );
};

export default Dashboard;
