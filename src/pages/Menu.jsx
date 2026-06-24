import { useState } from 'react'
import './Menu.css'

const Menu = () => {
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('burgers')

  const menuItems = {
    burgers: [
      { id: 1, name: 'Classic Burger', price: 8.99, desc: 'Fresh beef patty with lettuce, tomato, onion' },
      { id: 2, name: 'Cheese Burger', price: 9.99, desc: 'Classic with melted American cheese' },
      { id: 3, name: 'Bacon Burger', price: 10.99, desc: 'Crispy bacon and cheddar cheese' },
      { id: 4, name: 'Double Deluxe', price: 12.99, desc: 'Two patties with double cheese and bacon' },
      { id: 5, name: 'Spicy Dragon', price: 11.99, desc: 'Jalapeños, pepper jack cheese, spicy sauce' },
      { id: 6, name: 'Mushroom Swiss', price: 10.99, desc: 'Sautéed mushrooms with Swiss cheese' },
    ],
    sides: [
      { id: 7, name: 'French Fries', price: 3.99, desc: 'Crispy golden fries' },
      { id: 8, name: 'Sweet Potato Fries', price: 4.99, desc: 'Seasoned sweet potato fries' },
      { id: 9, name: 'Onion Rings', price: 4.49, desc: 'Golden fried onion rings' },
      { id: 10, name: 'Coleslaw', price: 2.99, desc: 'Fresh garden coleslaw' },
    ],
    drinks: [
      { id: 11, name: 'Soft Drink', price: 2.99, desc: 'Coca-Cola, Sprite, Fanta' },
      { id: 12, name: 'Milkshake', price: 4.99, desc: 'Vanilla, Chocolate, Strawberry' },
      { id: 13, name: 'Iced Tea', price: 2.49, desc: 'Fresh brewed iced tea' },
      { id: 14, name: 'Lemonade', price: 2.99, desc: 'Homemade fresh lemonade' },
    ],
  }

  const addToCart = (item) => {
    setCart([...cart, item])
    alert(`${item.name} added to cart!`)
  }

  return (
    <main className="menu-page">
      <div className="menu-header">
        <h1 className="text-4xl font-bold text-white">Our Menu</h1>
        <p className="text-white mt-2">Choose from our delicious selection</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(menuItems).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? 'bg-burger text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[selectedCategory].map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-item-image"></div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-burger">${item.price}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="btn-primary"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Menu
