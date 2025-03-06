import React, { useState } from 'react';
import { Camera, Edit2, Check, X, Calendar, Ticket, User, Mail, Phone, MapPin, Menu } from 'lucide-react';
import './UserProfile.css';
import MyBookings from './MyBookings'
import Navbar from '../Navbar/Navbar';

function UserProfile() {
  const [profileImage, setProfileImage] = useState('https://i.pinimg.com/474x/81/8a/1b/818a1b89a57c2ee0fb7619b95e11aebd.jpg'); // Default black image
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Sandhya',
    email: 'Sandhya@example.com',
    mobile: '9346592321',
    address: '123 Movie Street, Cinema City, ST 12345'
  });
  const [editedInfo, setEditedInfo] = useState(userInfo);
  const [isProfileVisible, setIsProfileVisible] = useState(false); // State to toggle profile visibility

  const handleEditToggle = () => {
    if (isEditing) {
      setUserInfo(editedInfo);
    } else {
      setEditedInfo(userInfo);
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditedInfo(userInfo);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditedInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Update profile image with the selected image
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleProfileVisibility = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (<>
      <Navbar />
    <div className="app-container">
    (
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-image-container">
              <img src={profileImage} alt="Profile" className="profile-image" />
              <button className="edit-image-btn" onClick={() => document.getElementById('image-upload').click()}>
                <Camera size={20} />
              </button>
              <input
                type="file"
                id="image-upload"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>

          <div className="profile-content">
            <div className="profile-section">
              <div className="sect-header">
                <h1>User Profile</h1>
                {!isEditing ? (
                  <button className="edit-btn" onClick={handleEditToggle}>
                    <Edit2 size={20} /> Edit Profile
                  </button>
                ) : (
                  <div className="edit-actions">
                    <button className="save-btn" onClick={handleEditToggle}>
                      <Check size={20} /> Save
                    </button>
                    <button className="cancel-btn" onClick={handleCancel}>
                      <X size={20} /> Cancel
                    </button>
                  </div>
                )}
              </div>

              <div className="info-group">
                <div className="info-item">
                  <User className="icon" />
                  <div className="info-content">
                    <label>Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedInfo.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    ) : (
                      <p>{userInfo.name}</p>
                    )}
                  </div>
                </div>

                <div className="info-item">
                  <Mail className="icon" />
                  <div className="info-content">
                    <label>Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editedInfo.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    ) : (
                      <p>{userInfo.email}</p>
                    )}
                  </div>
                </div>

                <div className="info-item">
                  <Phone className="icon" />
                  <div className="info-content">
                    <label>Mobile</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={editedInfo.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                      />
                    ) : (
                      <p>{userInfo.mobile}</p>
                    )}
                  </div>
                </div>

                <div className="info-item">
                  <MapPin className="icon" />
                  <div className="info-content">
                    <label>Address</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedInfo.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                      />
                    ) : (
                      <p>{userInfo.address}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <MyBookings />
          </div>
        </div>
      )
    </div>
    </>
  );
}
export default UserProfile;

