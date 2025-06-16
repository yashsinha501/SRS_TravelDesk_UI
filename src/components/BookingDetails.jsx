import React, { useState } from 'react';
import  {motion} from 'framer-motion';
import { FaPlaneDeparture, FaIdCard, FaPassport, FaFileUpload } from 'react-icons/fa';

const BookingDetails = () => {
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
    alert("Booking Submitted Successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-cyan-100 via-green-100 to-yellow-100 flex items-center justify-center p-6"
    >
    
      <div className="w-full max-w-3xl bg-white p-8 shadow-2xl rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-cyan-700 flex items-center justify-center gap-2">
          <FaPlaneDeparture className="text-cyan-600" /> Travel Booking Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Travel Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold">Travel Date</label>
              <input
                type="datetime-local"
                name="travelDate"
                className="w-full px-4 py-2 border border-cyan-300 rounded-lg shadow-sm focus:ring focus:ring-cyan-200"
                value={formData.travelDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Days of Stay</label>
              <input
                type="number"
                name="daysOfStay"
                className="w-full px-4 py-2 border border-cyan-300 rounded-lg shadow-sm focus:ring focus:ring-cyan-200"
                value={formData.daysOfStay}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* IDs */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold items-center gap-1">
                <FaIdCard /> Aadhar Card Number
              </label>
              <input
                type="text"
                name="aadharCardNumber"
                className="w-full px-4 py-2 border border-cyan-300 rounded-lg shadow-sm"
                value={formData.aadharCardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold items-center gap-1">
                <FaPassport /> Passport Number
              </label>
              <input
                type="text"
                name="passportNumber"
                className="w-full px-4 py-2 border border-cyan-300 rounded-lg shadow-sm"
                value={formData.passportNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Meal Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold">Meal Required</label>
              <select
                name="mealRequired"
                value={formData.mealRequired}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-cyan-300 rounded-lg"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-semibold">Meal Preference</label>
              <select
                name="mealPreference"
                value={formData.mealRequired === "yes" ? formData.mealPreference : ""}
                onChange={handleChange}
                disabled={formData.mealRequired !== "yes"}
                className={`w-full px-4 py-2 border rounded-lg ${
                  formData.mealRequired !== "yes"
                    ? "bg-gray-100 cursor-not-allowed"
                    : "border-cyan-300"
                }`}
              >
                <option value="">Select</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
              </select>
            </div>
          </div>

          {/* Comment */}
          <div>
            <label className="block mb-1 font-semibold">Comment</label>
            <textarea
              name="comment"
              rows={3}
              className="w-full px-4 py-2 border border-cyan-300 rounded-lg shadow-sm"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Approval by manager..."
            ></textarea>
          </div>

          {/* Document Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold">Document Type</label>
              <select
                name="documentType"
                value={formData.documentType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-cyan-300 rounded-lg"
              >
                <option value="AadharCard">Aadhar Card</option>
                <option value="Passport">Passport</option>
                <option value="PanCard">Pan Card</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-semibold items-center gap-1">
                <FaFileUpload /> Upload Document
              </label>
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border border-cyan-300 rounded-lg"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-600 to-green-500 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default BookingDetails;
