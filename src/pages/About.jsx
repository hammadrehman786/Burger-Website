import './About.css'

const About = () => {
  return (
    <main className="about-page">
      <div className="about-header">
        <h1 className="text-5xl font-bold text-white">About Bunty Restaurant</h1>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Bunty Restaurant was founded in 2024 by Bunty, a passionate food enthusiast who wanted to bring authentic, high-quality burgers to our community. What started as a small food cart has grown into a beloved local restaurant.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We believe in using only the freshest ingredients, sourced locally whenever possible. Every burger is made to order, ensuring you get the best quality and taste with every bite.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is simple: to provide delicious food, excellent service, and a welcoming atmosphere for our valued customers.
              </p>
            </div>
            <div className="about-image"></div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="value-card">
              <h3 className="text-2xl font-bold mb-4 text-burger">Quality</h3>
              <p className="text-gray-700">We never compromise on the quality of our ingredients or the preparation of our food.</p>
            </div>
            <div className="value-card">
              <h3 className="text-2xl font-bold mb-4 text-burger">Innovation</h3>
              <p className="text-gray-700">We constantly create new recipes while honoring traditional burger-making techniques.</p>
            </div>
            <div className="value-card">
              <h3 className="text-2xl font-bold mb-4 text-burger">Community</h3>
              <p className="text-gray-700">We're committed to supporting our local community and building lasting relationships.</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Bunty', role: 'Owner & Head Chef', desc: 'Passionate burger expert' },
              { name: 'Team Member', role: 'Manager', desc: 'Dedicated to customer satisfaction' },
              { name: 'Team Member', role: 'Chef', desc: 'Expert in grill techniques' },
            ].map((member, idx) => (
              <div key={idx} className="team-member">
                <div className="member-image"></div>
                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                <p className="text-burger font-semibold">{member.role}</p>
                <p className="text-gray-600 text-sm mt-2">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default About
