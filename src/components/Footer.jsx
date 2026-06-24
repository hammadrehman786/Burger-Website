import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-burger">🍔 Burger Haven</h3>
            <p className="text-gray-600 text-sm">
              Crafting delicious burgers since 2020. We use premium ingredients and authentic recipes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2 text-gray-600">
              <li><a href="/menu" className="hover:text-burger">Menu</a></li>
              <li><a href="/reservations" className="hover:text-burger">Reservations</a></li>
              <li><a href="/about" className="hover:text-burger">About Us</a></li>
              <li><a href="/contact" className="hover:text-burger">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="text-sm space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Phone size={16} /> <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} /> <span>info@burgerhaven.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> <span>123 Main St, City, State</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-burger hover:text-gold transition"><Facebook size={20} /></a>
              <a href="#" className="text-burger hover:text-gold transition"><Instagram size={20} /></a>
              <a href="#" className="text-burger hover:text-gold transition"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-gray-600 text-sm">
          <p>&copy; 2024 Burger Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
