import React, { useState } from 'react';
import './VendorList.css';
import { Edit2, Trash2, Eye } from 'lucide-react';

const VendorList = ({ vendors, onDeleteVendor, onUpdateVendor }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTheater, setSelectedTheater] = useState(null);

  const filteredVendors = vendors.filter(vendor =>
    vendor.theaterName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.ownerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.city?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const TheaterDetailsModal = ({ theater, onClose }) => (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{theater.theaterName}</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="theater-details">
          <div className="detail-section">
            <h3>Owner Information</h3>
            <p><strong>Name:</strong> {theater.ownerName}</p>
            <p><strong>Email:</strong> {theater.email}</p>
            <p><strong>Phone:</strong> {theater.phone}</p>
            <p><strong>License No:</strong> {theater.licenseNumber}</p>
          </div>
          <div className="detail-section">
            <h3>Theater Information</h3>
            <p><strong>Location:</strong> {theater.address}</p>
            <p><strong>City:</strong> {theater.city}</p>
            <p><strong>State:</strong> {theater.state}</p>
            <p><strong>Pincode:</strong> {theater.pincode}</p>
          </div>
          <div className="detail-section">
            <h3>Facilities</h3>
            <div className="facility-tags">
              {theater.facilities?.map((facility, index) => (
                <span key={index} className="facility-tag">{facility}</span>
              ))}
            </div>
          </div>
          <div className="detail-section">
            <h3>Screen Information</h3>
            <p><strong>Total Screens:</strong> {theater.totalScreens}</p>
            <p><strong>Total Seats:</strong> {theater.totalSeats}</p>
            <div className="screen-types">
              {theater.screenTypes?.map((type, index) => (
                <span key={index} className="screen-type-tag">{type}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="vendor-list-container">
      <div className="vendor-list-header">
        <h2>Theater List</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search theaters..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="vendor-table">
          <thead>
            <tr>
              <th>Theater Name</th>
              <th>Owner Name</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Screens</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map(theater => (
              <tr key={theater.id}>
                <td>{theater.theaterName}</td>
                <td>{theater.ownerName}</td>
                <td>
                  <div>{theater.city}</div>
                  <div className="secondary-text">{theater.state}</div>
                </td>
                <td>
                  <div>{theater.phone}</div>
                  <div className="secondary-text">{theater.email}</div>
                </td>
                <td>
                  <div>{theater.totalScreens} Screens</div>
                  <div className="secondary-text">{theater.totalSeats} Seats</div>
                </td>
                <td>
                  <span className={`status-badge ${theater.status}`}>
                    {theater.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="view-button"
                      onClick={() => setSelectedTheater(theater)}
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      className="edit-button"
                      onClick={() => onUpdateVendor(theater.id)}
                      title="Edit Theater"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => onDeleteVendor(theater.id)}
                      title="Delete Theater"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedTheater && (
        <TheaterDetailsModal
          theater={selectedTheater}
          onClose={() => setSelectedTheater(null)}
        />
      )}
    </div>
  );
};

export default VendorList;