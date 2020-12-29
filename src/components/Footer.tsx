import React from 'react';
import './Footer.css';
import footer_img from '../img/footer.png';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  return (
    <footer>
      <img src={footer_img} alt=''  className='footer-img'/>
    </footer>
  );
};

export default Footer;
