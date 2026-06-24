import { Link } from 'react-router-dom'
import { ChefHat, Clock, Award, Truck } from 'lucide-react'
import './Home.css'

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Premium Burgers, Unforgettable Taste
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Experience the best burgers at Bunty Restaurant. Crafted with passion, made with premium ingredients.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/menu" className="btn-primary-lg">
              View Menu
            </Link>
            <Link to="/reservations" className="btn-secondary-lg">
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="feature-card">
              <ChefHat size={40} className="text-burger mb-4" />
              <h3 className="font-bold text-xl mb-2">Expert Chefs</h3>
              <p className="text-gray-600">Our experienced chefs prepare every burger with care and precision.</p>
            </div>
            <div className="feature-card">
              <Award size={40} className="text-burger mb-4" />
              <h3 className="font-bold text-xl mb-2">Premium Quality</h3>
              <p className="text-gray-600">We use only the finest ingredients sourced locally.</p>
            </div>
            <div className="feature-card">
              <Clock size={40} className="text-burger mb-4" />
              <h3 className="font-bold text-xl mb-2">Fast Service</h3>
              <p className="text-gray-600">Quick service without compromising on quality.</p>
            </div>
            <div className="feature-card">
              <Truck size={40} className="text-burger mb-4" />
              <h3 className="font-bold text-xl mb-2">Free Delivery</h3>
              <p className="text-gray-600">Free delivery on orders over Rs. 500 within our area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Popular Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Classic Burger', price: 'Rs. 350', desc: 'Our signature burger with fresh beef and veggies' },
              { name: 'Cheese Deluxe', price: 'Rs. 450', desc: 'Double cheese, bacon, and crispy fries' },
              { name: 'Spicy Dragon', price: 'Rs. 500', desc: 'Fiery burger with jalapeños and spicy sauce' },
            ].map((item, idx) => (
              <div key={idx} className="menu-item-card">
                <div className="h-48 bg-gradient-to-br from-burger to-gold rounded-lg mb-4"></div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-burger">{item.price}</span>
                  <button className="btn-primary">Order</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="btn-primary-lg">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to Taste?</h2>
        <p className="text-xl mb-8">Order online or visit us today!</p>
        <Link to="/menu" className="btn-secondary-lg">
          Place Your Order
        </Link>
      </section>
    </main>
  )
}

export default Home
