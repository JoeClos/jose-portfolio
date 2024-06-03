import './footer.css';

const Footer = () => {
  const newDate = () => {
    return new Date();
  };

  return (
    <footer className="footer">
      <p>
        &copy; {newDate().getFullYear()} Josephine Closan | All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
