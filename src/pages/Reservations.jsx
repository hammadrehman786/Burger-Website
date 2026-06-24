import { useState } from 'react'
import { Calendar, Users, Clock } from 'lucide-react'
import './Reservations.css'

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Reservation submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="reservations-page">
      <div className="reservations-header">
        <h1 className="text-5xl font-bold text-white">Make a Reservation</h1>
        <p className="text-white mt-2">Book your table at Bunty Restaurant</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Thank you! Your reservation has been received. We'll confirm shortly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Time *</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-4 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-2">Number of Guests *</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2">Special Requests</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border rounded px-4 py-2"
                  placeholder="Any special dietary requirements or preferences?"
                />
              </div>

              <button type="submit" className="btn-primary-lg w-full">
                Reserve Table
              </button>
            </form>
          </div>

          {/* Info */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-burger">Restaurant Info</h3>
              </div>

              <div className="flex gap-4">
                <Clock className="text-burger flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Hours</h4>
                  <p className="text-gray-600">Monday - Thursday: 11:00 AM - 10:00 PM</p>
                  <p className="text-gray-600">Friday - Saturday: 11:00 AM - 11:00 PM</p>
                  <p className="text-gray-600">Sunday: 12:00 PM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="text-burger flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Capacity</h4>
                  <p className="text-gray-600">We can accommodate up to 100 guests</p>
                  <p className="text-gray-600">Perfect for small gatherings and celebrations</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Calendar className="text-burger flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold mb-2">Booking Notice</h4>
                  <p className="text-gray-600">We recommend booking at least 24 hours in advance</p>
                  <p className="text-gray-600">Walk-ins are also welcome!</p>
                </div>
              </div>

              <div className="bg-burger text-white p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Questions?</h4>
                <p className="mb-2">Call us at: <strong>+92 XXX XXXXXXX</strong></p>
                <p>Email: <strong>bunty@restaurant.com</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Reservations
