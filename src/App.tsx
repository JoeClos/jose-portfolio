import './App.css'


interface PortfolioItem {
  imageUrl: string;
  description: string;
}

const portfolio: PortfolioItem[] = [
  // Add your portfolio items here
  // Example:
  { imageUrl: 'Josephine-C.png', description: 'Description of Portfolio Item 1' },
  { imageUrl: 'Joe.jpg', description: 'Description of Portfolio Item 2' },
]
function App() {

  return (
    <>
    <div className="container">
            <header>
                <h1>Hi, I&apos;m Josephine</h1>
                <h2>Fullstack Developer with a Frontend Focus</h2>
            </header>

            <div className="section">
                <h3>Interests</h3>
                <p>Here you can mention your interests, hobbies, or anything else you would like your visitors to know about you.</p>
            </div>

            <div className="section">
                <h3>Portfolio</h3>
                <div className="portfolio">
                    {portfolio.map((item, index) => (
                        <div className="portfolio-item" key={index}>
                            <img src={item.imageUrl} alt={`Portfolio Item ${index + 1}`} />
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="section">
                <h3>Contact Information</h3>
                <div className="contact-info">
                    <p>Email: your.email@example.com</p>
                    <p>Phone: +1234567890</p>
                    {/* Add more contact information if needed */}
                </div>
            </div>

            <footer className="footer">
                <p>&copy; 2024 Fullstack Developer | All rights reserved</p>
            </footer>
        </div>
    </>
  )
}

export default App