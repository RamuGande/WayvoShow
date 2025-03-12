import React, { useState } from 'react';
import VendorForm from './VendorForm';
import VendorList from './VendorList';
import './AdminHome.css';

function AdminHome() {
  const [vendors, setVendors] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleAddVendor = (newVendor) => {
    setVendors([...vendors, newVendor]);
    setShowForm(false);
  };

  const handleDeleteVendor = (id) => {
    setVendors(vendors.filter(vendor => vendor.id !== id));
  };

  const handleUpdateVendor = (id) => {
    // Implement update functionality
    console.log('Update vendor with id:', id);
  };

  return (
    <div className="admin-home">
      <div className="admin-header">
        <h1>Vendor Management</h1>
        <button
          className="add-vendor-button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Back to Vendor List' : 'Add New Vendor'}
        </button>
      </div>

      {showForm ? (
        <VendorForm onAddVendor={handleAddVendor} />
      ) : (
        <div className='list'>
        <VendorList
          vendors={vendors}
          onDeleteVendor={handleDeleteVendor}
          onUpdateVendor={handleUpdateVendor}
        />
        </div>
      )}
    </div>
  );
}

export default AdminHome;