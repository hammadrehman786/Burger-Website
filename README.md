# 🍔 BUNTY RESTAURAT - Restaurant Website

A modern, fully-featured restaurant website built with React, Vite, and Tailwind CSS.

## Features

✅ **Home Page** - Eye-catching hero section with featured items
✅ **Dynamic Menu** - Categorized items (Burgers, Sides, Drinks) with prices
✅ **About Us** - Restaurant story, values, and team information
✅ **Reservations** - Online booking system with form validation
✅ **Contact** - Contact form, location map, and social media links
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
✅ **Modern UI** - Beautiful gradients, smooth animations, and icons

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **HTTP Client**: Axios

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hammadrehman786/Burger-Website.git
cd Burger-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Footer.jsx
│   └── Footer.css
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── Menu.jsx
│   ├── Menu.css
│   ├── About.jsx
│   ├── About.css
│   ├── Reservations.jsx
│   ├── Reservations.css
│   ├── Contact.jsx
│   └── Contact.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Customization

### Colors
Edit the colors in `tailwind.config.js`:
```javascript
colors: {
  burger: '#D4573F',    // Primary red
  gold: '#FFA500',      // Accent orange
  dark: '#1a1a1a',      // Dark background
}
```

### Menu Items
Edit menu items in `src/pages/Menu.jsx` in the `menuItems` object.

### Restaurant Info
Update restaurant details in:
- `src/components/Footer.jsx`
- `src/pages/Reservations.jsx`
- `src/pages/Contact.jsx`

## Features to Add (Future)

- 🔧 Shopping cart with checkout
- 💳 Payment integration (Stripe/PayPal)
- 📱 Mobile app version
- 🗣️ Customer reviews section
- 📧 Email notifications
- 🔐 Admin dashboard
- 📊 Analytics

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, please contact:
- Email: info@burgerhaven.com
- Phone: +49 17623692682

---

**Built with ❤️ for food lovers**
