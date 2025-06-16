import { motion } from 'framer-motion';




const FormDisplay = () => {

const bookings = [{
  bookingType: 2,
  status: 4,
  travelDate: '2025-07-01T10:00',
  aadharCardNumber: '1234-5678-9012',
  passportNumber: 'A1234567',
  daysOfStay: 5,
  mealRequired: 'yes',
  mealPreference: 'veg',
  comment: 'Approved by Manager',
  documentType: 'AadharCard',
}];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-blue-700 mb-10"
      >
        Booking Profiles
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings?.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-cyan-700">Booking #{index + 1}</h2>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                data.mealRequired === 'yes' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
               {data.mealRequired === 'yes' ? "Meal Included" : "Meal not included"}
              </span>
            </div>

            <div className="text-sm text-gray-700 space-y-2 mt-4">
              <div>
                <span className="font-semibold">Travel Date:</span> {data.travelDate}
              </div>
              <div>
                <span className="font-semibold">Days of Stay:</span> {data.daysOfStay}
              </div>
              <div>
                <span className="font-semibold">Aadhar No:</span> {data.aadharCardNumber}
              </div>
              <div>
                <span className="font-semibold">Passport No:</span> {data.passportNumber}
              </div>
              <div>
                <span className="font-semibold">Meal Preference:</span>{' '}
                {data.mealRequired === 'yes' ? (
                  <span className="inline-block ml-1 px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs">
                    {data.mealPreference || 'None'}
                  </span>
                ) : (
                  <span className="text-gray-400 italic">N/A</span>
                )}
              </div>
              <div>
                <span className="font-semibold">Document Type:</span> {data.documentType}
              </div>
              <div>
                <span className="font-semibold">Comment:</span>{' '}
                <span className="text-gray-600">{data.comment || <i>None</i>}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!bookings?.length && (
        <div className="text-center text-gray-500 mt-16 text-lg">
          No bookings available. Submit a form to see it here!
        </div>
      )}
    </div>
  );
};

export default FormDisplay;
