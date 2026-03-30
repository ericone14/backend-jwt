import '../styles/footer.css';

export default function Footer() {
  
  const anoCriacao = 2026;

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Firjan</h3>
          <p>&copy; {anoCriacao} - Todos os direitos reservados.</p>
        </div>

        <div className="footer-social">
          <h4>Siga-nos</h4>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
