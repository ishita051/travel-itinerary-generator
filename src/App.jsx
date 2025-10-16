import React, { useState } from 'react';
import { FileText, Plus, Trash2, Download, Calendar, MapPin, Plane, Hotel, Activity } from 'lucide-react';

export default function TravelItineraryApp() {
  const [formData, setFormData] = useState({
    tripTitle: 'Singapore Itinerary',
    duration: '4 Days 3 Nights',
    travelers: 4,
    departureCity: 'Mumbai',
    destination: 'Singapore',
    departureDate: '21/10/2025',
    arrivalDate: '01/11/2025',
    days: [
      {
        id: 1,
        date: '27th November',
        title: 'Arrival in Singapore & City Exploration',
        image: '🌆',
        activities: {
          morning: 'Arrive in Singapore. Transfer From Airport To Hotel',
          afternoon: 'Check Into Your Hotel.\nVisit Marina Bay Sands Sky Park (2-3 Hours).\nOptional: Stroll Along Marina Bay Waterfront Promenade Or Helix Bridge.',
          evening: 'Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)'
        }
      },
      {
        id: 2,
        date: '27th November',
        title: 'Gardens By The Bay + Marina Bay',
        image: '🌊',
        activities: {
          morning: 'Arrive in Singapore. Transfer From Airport To Hotel',
          afternoon: 'Check Into Your Hotel.\nVisit Marina Bay Sands Sky Park (2-3 Hours).',
          evening: 'Explore Gardens By The Bay, Including Super Tree Grove (3-4 Hours)'
        }
      }
    ],
    flights: [
      { airline: 'Fly Air India', flightNo: 'AX-123', from: 'Delhi (DEL)', to: 'Singapore (SIN)', date: 'Thu 10 Jan\'24' }
    ],
    hotels: [
      { city: 'Singapore', checkIn: '24/02/2024', checkOut: '24/02/2024', nights: 2, name: 'Super Townhouse Oak Vashi Formerly Blue Diamond' }
    ],
    activities: [
      { city: 'Rio De Janeiro', activity: 'Sydney Harbour Cruise & Taronga Zoo', type: 'Nature/Sightseeing', time: '2-3 Hours' }
    ],
    totalAmount: 900000,
    tcs: 'Not Collected',
    installments: [
      { name: 'Installment 1', amount: 350000, due: 'Initial Payment' },
      { name: 'Installment 2', amount: 400000, due: 'Post Visa Approval' },
      { name: 'Installment 3', amount: 'Remaining', due: '20 Days Before Departure' }
    ]
  });

  const [showPreview, setShowPreview] = useState(false);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addDay = () => {
    setFormData(prev => ({
      ...prev,
      days: [...prev.days, {
        id: Date.now(),
        date: '',
        title: '',
        image: '📍',
        activities: { morning: '', afternoon: '', evening: '' }
      }]
    }));
  };

  const updateDay = (id, field, value) => {
    setFormData(prev => ({
      ...prev,
      days: prev.days.map(day => 
        day.id === id ? { ...day, [field]: value } : day
      )
    }));
  };

  const updateDayActivity = (id, period, value) => {
    setFormData(prev => ({
      ...prev,
      days: prev.days.map(day => 
        day.id === id ? { 
          ...day, 
          activities: { ...day.activities, [period]: value }
        } : day
      )
    }));
  };

  const removeDay = (id) => {
    setFormData(prev => ({
      ...prev,
      days: prev.days.filter(day => day.id !== id)
    }));
  };

  const addFlight = () => {
    setFormData(prev => ({
      ...prev,
      flights: [...prev.flights, { airline: '', flightNo: '', from: '', to: '', date: '' }]
    }));
  };

  const addHotel = () => {
    setFormData(prev => ({
      ...prev,
      hotels: [...prev.hotels, { city: '', checkIn: '', checkOut: '', nights: 0, name: '' }]
    }));
  };

  const addActivity = () => {
    setFormData(prev => ({
      ...prev,
      activities: [...prev.activities, { city: '', activity: '', type: '', time: '' }]
    }));
  };

  const addInstallment = () => {
    setFormData(prev => ({
      ...prev,
      installments: [...prev.installments, { name: '', amount: '', due: '' }]
    }));
  };

  const generatePDF = () => {
    setShowPreview(true);
    setTimeout(() => {
      window.print();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-blue-900 text-white py-6 print:hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <FileText size={32} />
                Travel Itinerary Generator
              </h1>
              <p className="text-purple-200 mt-1">Create professional travel itineraries with ease</p>
            </div>
            <button
              onClick={generatePDF}
              className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-purple-50 transition-all shadow-lg"
            >
              <Download size={20} />
              Generate PDF
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 print:hidden">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Trip Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Trip Title</label>
              <input
                type="text"
                value={formData.tripTitle}
                onChange={(e) => updateField('tripTitle', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => updateField('duration', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
              <input
                type="number"
                value={formData.travelers}
                onChange={(e) => updateField('travelers', parseInt(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Departure From</label>
              <input
                type="text"
                value={formData.departureCity}
                onChange={(e) => updateField('departureCity', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
              <input
                type="text"
                value={formData.destination}
                onChange={(e) => updateField('destination', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date</label>
              <input
                type="text"
                value={formData.departureDate}
                onChange={(e) => updateField('departureDate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Daily Itinerary */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Daily Itinerary</h2>
            <button
              onClick={addDay}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus size={20} />
              Add Day
            </button>
          </div>

          {formData.days.map((day, idx) => (
            <div key={day.id} className="border border-gray-200 rounded-lg p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-purple-900">Day {idx + 1}</h3>
                {formData.days.length > 1 && (
                  <button onClick={() => removeDay(day.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={20} />
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Date (e.g., 27th November)"
                  value={day.date}
                  onChange={(e) => updateDay(day.id, 'date', e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Title"
                  value={day.title}
                  onChange={(e) => updateDay(day.id, 'title', e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Morning</label>
                  <textarea
                    value={day.activities.morning}
                    onChange={(e) => updateDayActivity(day.id, 'morning', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows="2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Afternoon</label>
                  <textarea
                    value={day.activities.afternoon}
                    onChange={(e) => updateDayActivity(day.id, 'afternoon', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows="2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Evening</label>
                  <textarea
                    value={day.activities.evening}
                    onChange={(e) => updateDayActivity(day.id, 'evening', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows="2"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Information */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Total Amount (₹)</label>
              <input
                type="number"
                value={formData.totalAmount}
                onChange={(e) => updateField('totalAmount', parseInt(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">TCS</label>
              <input
                type="text"
                value={formData.tcs}
                onChange={(e) => updateField('tcs', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <button
            onClick={addInstallment}
            className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors mb-4"
          >
            <Plus size={20} />
            Add Installment
          </button>

          <div className="space-y-4">
            {formData.installments.map((inst, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border border-gray-200 rounded-lg">
                <input
                  type="text"
                  placeholder="Installment name"
                  value={inst.name}
                  onChange={(e) => {
                    const newInst = [...formData.installments];
                    newInst[idx].name = e.target.value;
                    updateField('installments', newInst);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Amount"
                  value={inst.amount}
                  onChange={(e) => {
                    const newInst = [...formData.installments];
                    newInst[idx].amount = e.target.value;
                    updateField('installments', newInst);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Due date"
                  value={inst.due}
                  onChange={(e) => {
                    const newInst = [...formData.installments];
                    newInst[idx].due = e.target.value;
                    updateField('installments', newInst);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PDF Preview (Print View) */}
      <div className="hidden print:block">
        <style>{`
          @page { margin: 0; }
          @media print {
            body { margin: 1cm; }
            .page-break { page-break-after: always; }
          }
        `}</style>
        
        {/* Cover Page */}
        <div className="text-center py-32 page-break">
          <h1 className="text-6xl font-bold mb-8">PDF Output Design</h1>
        </div>

        {/* Main Itinerary */}
        <div className="bg-white p-8">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Hi, Rahul!</h2>
                <h3 className="text-2xl mt-2">{formData.tripTitle}</h3>
                <p className="text-lg mt-1">{formData.duration}</p>
                <div className="flex gap-4 mt-2 text-sm">
                  <span>✈️</span>
                  <span>🏨</span>
                  <span>🚗</span>
                  <span>🍽️</span>
                  <span>📸</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold">vigovia</div>
                <div className="text-sm">PLAN.PACK.GO</div>
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="bg-gray-50 p-4 rounded-lg mb-8">
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div>
                <div className="font-semibold text-gray-600">Departure From:</div>
                <div>{formData.departureCity}</div>
              </div>
              <div>
                <div className="font-semibold text-gray-600">Departure:</div>
                <div>{formData.departureDate}</div>
              </div>
              <div>
                <div className="font-semibold text-gray-600">Arrival:</div>
                <div>{formData.arrivalDate}</div>
              </div>
              <div>
                <div className="font-semibold text-gray-600">Destination:</div>
                <div>{formData.destination}</div>
              </div>
              <div>
                <div className="font-semibold text-gray-600">No. Of Travelers:</div>
                <div>{formData.travelers}</div>
              </div>
            </div>
          </div>

          {/* Daily Itinerary */}
          {formData.days.map((day, idx) => (
            <div key={day.id} className="mb-8 border-l-4 border-purple-600 pl-6">
              <div className="flex gap-4 mb-4">
                <div className="bg-purple-900 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                  Day {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold mb-4">{day.date}</div>
                  <div className="text-xl text-purple-900 font-semibold mb-4">{day.title}</div>
                  
                  <div className="space-y-3">
                    {day.activities.morning && (
                      <div className="flex gap-3">
                        <div className="w-24 font-semibold text-gray-600">Morning</div>
                        <div className="flex-1">{day.activities.morning}</div>
                      </div>
                    )}
                    {day.activities.afternoon && (
                      <div className="flex gap-3">
                        <div className="w-24 font-semibold text-gray-600">Afternoon</div>
                        <div className="flex-1">{day.activities.afternoon}</div>
                      </div>
                    )}
                    {day.activities.evening && (
                      <div className="flex gap-3">
                        <div className="w-24 font-semibold text-gray-600">Evening</div>
                        <div className="flex-1">{day.activities.evening}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Company Info */}
          <div className="border-t-2 pt-4 mt-8">
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <div className="font-bold">Vigovia Tech Pvt. Ltd</div>
                <div>Registered Office: Hd-109 Cinnabar Hills,</div>
                <div>Links Business Park, Karnataka, India</div>
              </div>
              <div className="text-right">
                <div><span className="font-semibold">Phone:</span> +91-9504061112</div>
                <div><span className="font-semibold">Email ID:</span> Utkarsh@Vigovia.Com</div>
                <div><span className="font-semibold">CIN:</span> U79110KA2024PTC191890</div>
              </div>
            </div>
          </div>

          <div className="page-break"></div>

          {/* Payment Plan */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6">Payment <span className="text-purple-600">Plan</span></h2>
            
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-gray-600 text-sm">Total Amount</div>
                  <div className="text-2xl font-bold">₹ {formData.totalAmount.toLocaleString()} <span className="text-sm font-normal">For 3 Pax (Inclusive Of GST)</span></div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-gray-600 text-sm">TCS</div>
                  <div className="text-2xl font-bold">{formData.tcs}</div>
                </div>
              </div>
            </div>

            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-900 text-white">
                  <th className="p-3 text-left">Installment</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Due Date</th>
                </tr>
              </thead>
              <tbody>
                {formData.installments.map((inst, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-3">{inst.name}</td>
                    <td className="p-3">₹{typeof inst.amount === 'number' ? inst.amount.toLocaleString() : inst.amount}</td>
                    <td className="p-3">{inst.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t-2">
            <div className="text-3xl font-bold text-purple-900 mb-2">PLAN.PACK.GO!</div>
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
