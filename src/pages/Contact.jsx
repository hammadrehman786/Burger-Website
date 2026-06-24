import { useState } from 'react'
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Message submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="contact-page">
      <div className="contact-header">
        <h1 className="text-5xl font-bold text-white">Contact Us</h1>
        <p className="text-white mt-2">Get in touch with Bunty Restaurant</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="contact-card">
            <Phone className="text-burger mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600">+92 XXX XXXXXXX</p>
            <p className="text-gray-600 text-sm">Mon-Sun: 11:00 AM - 11:00 PM</p>
          </div>

          <div className="contact-card">
            <Mail className="text-burger mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">bunty@restaurant.com</p>
            <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
          </div>

          <div className="contact-card">
            <MapPin className="text-burger mb-4" size={32} />
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-gray-600">Your Address</p>
            <p className="text-gray-600 text-sm">City, Province, Country</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Thank you! Your message has been sent successfully.
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
                <label className="block font-semibold mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <button type="submit" className="btn-primary-lg w-full">
                Send Message
              </button>
            </form>
          </div>

          {/* Map & Social */}
          <div>
            <div className="map-placeholder mb-8 rounded-lg overflow-hidden h-64 bg-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-2 text-burger" />
                <p className="text-gray-700 font-semibold">Your Address, City, Province</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-burger">Follow Us</h3>
              <div className="flex gap-6 mb-8">
                <a href="#" className="flex items-center gap-2 text-burger hover:text-gold transition">
                  <Facebook size={24} />
                  <span className="font-semibold">Facebook</span>
                </a>
              </div>
              <div className="flex gap-6 mb-8">
                <a href="#" className="flex items-center gap-2 text-burger hover:text-gold transition">
                  <Instagram size={24} />
                  <span className="font-semibold">Instagram</span>
                </a>
              </div>
              <div className="flex gap-6">
                <a href="#" className="flex items-center gap-2 text-burger hover:text-gold transition">
                  <Twitter size={24} />
                  <span className="font-semibold">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
