import React, { useState } from 'react';
import './VendorForm.css';

const VendorForm = ({ onAddVendor }) => {
  const [theaterData, setTheaterData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    theaterName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    totalScreens: '',
    totalSeats: '',
    facilities: [],
    screenTypes: [],
    licenseNumber: '',
    openingHours: '',
    closingHours: '',
    status: 'active'
  });

  const facilities = [
    'Parking',
    'Food Court',
    'Wheelchair Access',
    'Dolby Sound',
    'IMAX',
    'Restaurant',
    'Gaming Zone',
    'VIP Lounge'
  ];

  const screenTypes = [
    '2D',
    '3D',
    '4DX',
    'IMAX',
    'VIP Screen',
    'Dolby Atmos'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVendor({ ...theaterData, id: Date.now() });
    setTheaterData({
      ownerName: '',
      email: '',
      phone: '',
      theaterName: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      totalScreens: '',
      totalSeats: '',
      facilities: [],
      screenTypes: [],
      licenseNumber: '',
      openingHours: '',
      closingHours: '',
      status: 'active'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTheaterData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (type, value) => {
    setTheaterData(prevData => ({
      ...prevData,
      [type]: prevData[type].includes(value)
        ? prevData[type].filter(item => item !== value)
        : [...prevData[type], value]
    }));
  };

  return (
    <div className="theater-form-container">
      <h2 className="theater-form-title">Add New Theater</h2>
      <form onSubmit={handleSubmit} className="theater-form">
        {/* Owner Details Section */}
        <div className="form-sect">
          <h3 className="section-title">Owner Details</h3>
          <div className="form-group">
            <label>Owner Name</label>
            <input
              type="text"
              name="ownerName"
              value={theaterData.ownerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={theaterData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={theaterData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>License Number</label>
            <input
              type="text"
              name="licenseNumber"
              value={theaterData.licenseNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Theater Details Section */}
        <div className="form-sect">
          <h3 className="section-title">Theater Details</h3>
          <div className="form-group">
            <label>Theater Name</label>
            <input
              type="text"
              name="theaterName"
              value={theaterData.theaterName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              value={theaterData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={theaterData.city}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={theaterData.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Pincode</label>
              <input
                type="text"
                name="pincode"
                value={theaterData.pincode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Theater Specifications */}
        <div className="form-sect">
          <h3 className="section-title">Theater Specifications</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Total Screens</label>
              <input
                type="number"
                name="totalScreens"
                value={theaterData.totalScreens}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Total Seats</label>
              <input
                type="number"
                name="totalSeats"
                value={theaterData.totalSeats}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Opening Hours</label>
              <input
                type="time"
                name="openingHours"
                value={theaterData.openingHours}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Closing Hours</label>
              <input
                type="time"
                name="closingHours"
                value={theaterData.closingHours}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Facilities */}
          <div className="form-group">
            <label>Facilities Available</label>
            <div className="checkbox-group">
              {facilities.map(facility => (
                <label key={facility} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={theaterData.facilities.includes(facility)}
                    onChange={() => handleCheckboxChange('facilities', facility)}
                  />
                  {facility}
                </label>
              ))}
            </div>
          </div>

          {/* Screen Types */}
          <div className="form-group">
            <label>Screen Types</label>
            <div className="checkbox-group">
              {screenTypes.map(type => (
                <label key={type} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={theaterData.screenTypes.includes(type)}
                    onChange={() => handleCheckboxChange('screenTypes', type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>

        <button type="submit" className="submit-butt">
          Add Theater
        </button>
      </form>
    </div>
  );
};

export default VendorForm;