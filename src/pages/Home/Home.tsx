import './home.css';

interface PortfolioItem {
  imageUrl: string;
  description: string;
}

const portfolio: PortfolioItem = {
  imageUrl: 'Joe-black.png',
  description:
    'I am an enthusiastic full-stack developer with a focus on front-end development, technology, and innovation. Being a strong advocate for lifelong learning, I embrace continuous education and personal development',
};

const Home = () => {

  return (
    <>
      <div className="container">
        <h1>Hi, I&apos;m Josephine</h1>
        <h2>Fullstack Developer with a Frontend Focus</h2>

        <div className="section">
          <div className="portfolio">
            <div className="portfolio-item">
              <img
                className="profile-photo"
                src={portfolio.imageUrl}
                alt="Portfolio Item"
              />
              <p>{portfolio.description}</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Interests</h3>
          <p>
            Here you can mention your interests, hobbies, or anything else you
            would like your visitors to know about you.
          </p>
        </div>

        <div className="section">
          <h3>Contact Information</h3>
          <div className="contact-info">
            <p>Email: {import.meta.env.REACT_APP_EMAIL}</p>
            <p>Phone: {import.meta.env.REACT_APP_PHONE}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;