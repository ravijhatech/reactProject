import React, { useState } from 'react';
import axios from 'axios';
import './New_addmission.css';
import PhoneInput from 'react-phone-input-2';

const StudentAdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentFirstName: '',
    lastName: '',
    age: '',
    grade: '',
    contactNumber: '',
    email: '',
    address: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {

      const response = await axios.post('https://reactprojectbackend-4f8r.onrender.com/student-addmission', formData);

      if (response.status === 200) {


        setFormData({
          studentFirstName: '',
          studentLastName: '',
          dateOfBirth: '',
          gender: '',
          bloodGroup: '',
          category: '',
          phoneNumber: '',
          email: '',
          currentAddress: '',
          city: '',
          state: '',
          pincode: '',
          admissionNumber: '',
          enrollmentNumber: '',
          className: '',
          section: '',
          previousSchoolName: '',
          stream: '',
          yearsofAddmission: '',
          fatherName: '',
          motherName: '',
          occupation: '',
          relatioshipwithStudent: '',
          passportSizePhoto: '',
          birthCertificate: '',
          previousMarksheet: '',
          transferCertificate: '',
          aadharCard: '',
          casteCertificate: '',
          transportRequried: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('There was an error submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h1>New Student Admission Form</h1>

      {/* Show success or error message */}
      {successMessage && <div className="success-message">{successMessage}</div>}
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit} className="admission-form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="studentFirstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="studentLastName"
            value={formData.studentLastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date Of Birth(DOB)</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select style={{ width: '555px', height: "40px" }}>
            <option value="gender">Male</option>
            <option value="gender">Female</option>
            <option value="gender">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Blood Group</label>
          <select style={{ width: '555px', height: "40px" }}>
            <option value="bloodgroup">A</option>
            <option value="bloodgroup">A+</option>
            <option value="bloodgroup">AB</option>
            <option value="bloodgroup">AB-</option>
            <option value="bloodgroup">A+</option>
            <option value="bloodgroup">O-</option>
            <option value="bloodgroup">A</option>
            <option value="bloodgroup">A+</option>
            <option value="bloodgroup">O</option>
          </select>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select style={{ width: '555px', height: "40px" }}>
            <option value="Category">General</option>
            <option value="Category">OBC</option>
            <option value="Category">SC</option>
            <option value="Category">ST</option>
          </select>
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <PhoneInput
            country={'in'}
            enableSearch={true}
            inputStyle={{ width: '600px' }}
          />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input
            type="text"
            name="studentFirstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="studentFirstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="studentFirstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="number"
            name="studentFirstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Admission Number</label>
          <input
            type="text"
            name="studentFirstName"
            value={formData.firstName}
            onChange={handleChange}
            readOnly

          />
        </div>
        <div className="form-group">
          <label>Enrollment Number</label>
          <input
            type="text"
            name="studentFirstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Class</label>
          <select style={{ width: '555px', height: "40px" }}>
            <option value="class">1st</option>
            <option value="class">2nd</option>
            <option value="class">3rd</option>
            <option value="class">4th</option>
            <option value="class">5th</option>
            <option value="class">6th</option>
            <option value="class">7th</option>
            <option value="class">8th</option>
            <option value="class">9th</option>
            <option value="class">10th</option>
            <option value="class">11th</option>
            <option value="class">12th</option>
          </select>
        </div>
        <div className="form-group">
          <label>Section</label>
          <select style={{ width: '555px', height: "40px" }}>
            <option value="class">A</option>
            <option value="section">B</option>
            <option value="section">C</option>
            <option value="section">D</option>

          </select>
        </div>
        <div className="form-group">
          <label>Previous School Name</label>
          <input
            type="text"
            name="studentFirstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Stream</label>
          <input
            type="text"
            name="studentFirstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Year Of Addmission</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Father's Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mother's Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Occupation</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Relation Contact Number Student</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Student Passport Size Image</label>
          <input
            type="file"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label> Birth Certificate </label>
          <input
            type="file"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
          <div className="form-group">
          <label> Transfer Certificate (Optional)</label>
          <input
            type="file"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
          <div className="form-group">
          <label> Aadhar Card (Optional) </label>
          <input
            type="file"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
          <div className="form-group">
          <label> Caste Certificate (Optional)</label>
          <input
            type="file"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Previous Marksheet</label>
          <input
          
            type="file"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
          placeholder='Enter Age'
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Grade</label>
          <input
          placeholder='Enter Grade'
            type="text"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input
          placeholder='Enter Mobile Number'
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
          placeholder='Enter Email'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
         <div className="form-group">
          <label>Transport Requried</label>
          <input
          placeholder='Enter Transport Name(Optional)'
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Address</label>
          <textarea
          placeholder='Enter Address'
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default StudentAdmissionForm;
