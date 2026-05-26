function Footer({ text }) {
  return (
    <footer>
      <span>{text.footerCopy}</span>
      <span className="footer-role">{text.footerRole}</span>
    </footer>
  );
}

export default Footer;
