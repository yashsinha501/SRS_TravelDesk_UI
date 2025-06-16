import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    bookingType: 2,
    status: 4,
    travelDate: '',
    aadharCardNumber: '',
    passportNumber: '',
    daysOfStay: '',
    mealRequired: 'yes',
    mealPreference: '',
    comment: '',
    documentFile: null,
    documentType: 'AadharCard',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, documentFile: e.target.files[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // submit logic here
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-800">Travel Booking Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Travel Date</label>
            <input
              type="datetime-local"
              name="travelDate"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.travelDate}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Days of Stay</label>
            <input
              type="number"
              name="daysOfStay"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.daysOfStay}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Aadhar Card Number</label>
            <input
              type="text"
              name="aadharCardNumber"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.aadharCardNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Passport Number</label>
            <input
              type="text"
              name="passportNumber"
              className="w-full px-3 py-2 border rounded-md"
              value={formData.passportNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Meal Required</label>
            <select
              name="mealRequired"
              value={formData.mealRequired}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Meal Preference</label>
            <select
              name="mealPreference"
              value={formData.mealPreference}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md "
              disabled={formData.mealRequired !== "yes"}
              placeholder="Select"
            >
              <option value="">Select</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non-Veg</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Comment</label>
          <textarea
            name="comment"
            rows={3}
            className="w-full px-3 py-2 border rounded-md"
            value={formData.comment}
            onChange={handleChange}
            placeholder="approval by manager"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">Document Type</label>
          <select
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="AadharCard">Aadhar Card</option>
            <option value="Passport">Passport</option>
            <option value="PanCard">Pan Card</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload Document</label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
