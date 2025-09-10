"use client"

import Link from 'next/link';
import Image from 'next/image';
import play from "../../public/assets/footer/playstor.webp"
import apple from "../../public/assets/footer/applestor.webp"

const Footer = () => {
  return (
    <div className=' flex items-center justify-center bg-[#f8f8f8] font-okra font-weight: 100;' >
           <footer className="footer-container w-7xl">
        
      <div className="footer-links-grid ">
        {/* Useful Links Section */}
        <div>
          <div className="footer-heading">Useful Links</div>
          <ul className="footer-columns">
            <li className="footer-column">
              <ul className="footer-link-list">
                <li><Link href="/blog" target="_blank" rel="noopener noreferrer">Blog</Link></li>
                <li><Link href="/privacy" target="_blank" rel="noopener noreferrer nofollow">Privacy</Link></li>
                <li><Link href="/terms" target="_blank" rel="noopener noreferrer nofollow">Terms</Link></li>
                <li><Link href="/faq" target="_blank" rel="noopener noreferrer nofollow">FAQs</Link></li>
                <li><Link href="/security" target="_blank" rel="noopener noreferrer nofollow">Security</Link></li>
                <li><Link href="/contactUs" target="_blank" rel="noopener noreferrer nofollow">Contact</Link></li>
              </ul>
            </li>
            <li className="footer-column">
              <ul className="footer-link-list">
                <li><Link href="/partner" target="_blank" rel="noopener noreferrer nofollow">Partner</Link></li>
                <li><Link href="/franchise" target="_blank" rel="noopener noreferrer nofollow">Franchise</Link></li>
                <li><Link href="/seller" target="_blank" rel="noopener noreferrer nofollow">Seller</Link></li>
                <li><Link href="/warehouse-partner" target="_blank" rel="noopener noreferrer nofollow">Warehouse</Link></li>
                <li><Link href="/delivery" target="_blank" rel="noopener noreferrer nofollow">Deliver</Link></li>
                <li><Link href="/resources" target="_blank" rel="noopener noreferrer nofollow">Resources</Link></li>
              </ul>
            </li>
            <li className="footer-column">
              <ul className="footer-link-list">
                <li><Link href="/recipes">Recipes</Link></li>
                <li><Link href="https://bistro.blinkit.com" target="_blank" rel="noopener noreferrer nofollow">Bistro</Link></li>
                <li><Link href="https://www.district.in/" target="_blank" rel="noopener noreferrer nofollow">District</Link></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div>
          <div className="footer-heading-container">
            <div className='flex gap-5'>
                <div className="footer-heading">Categories</div>
            <Link className="see-all-link text-green-500" href="/categories">see all</Link>
            </div>
            
          </div>
          <ul className="footer-categories-list">
            {categories.map((category, index) => (
              <li key={index}>
                <Link href={category.href}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-grid">
          <div className="copyright">
            © Blink Commerce Private Limited, 2016-2025
          </div>
          
          <div className=" flex gap-2 items-center justify-center">
            <div className="download-text">Download App</div>
            <div className="download-buttons">
              <Image 
                src={apple} 
                alt="App Store" 
                width={80} 
               
                className="app-download-btn"
              />
              <Image 
                src={play}
                alt={play}
                width={80} 
                
                className="app-download-btn"
              />
            </div>
          </div>
          
          <div className="social-section">
            <div className="social-icons">
              {/* Facebook Icon */}
              <a href="#" aria-label="Facebook">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                  <rect width="100" height="100" rx="50" fill="white"></rect>
                  <path fillRule="evenodd" clipRule="evenodd" d="M42.9417 77.2H54.1817V49.9967H61.68L62.6733 40.6233H54.1817L54.1933 35.93C54.1933 33.4867 54.4267 32.175 57.9333 32.175H62.62V22.8H55.12C46.1117 22.8 42.9417 27.3483 42.9417 34.995V40.6233H37.3267V49.9983H42.9417V77.2V77.2ZM50 100C22.3867 100 0 77.6133 0 50C0 22.385 22.3867 0 50 0C77.6133 0 100 22.385 100 50C100 77.6133 77.6133 100 50 100Z" fill="#1F1F1F"></path>
                </svg>
              </a>
              
              {/* Twitter Icon */}
              <a href="#" aria-label="Twitter">
                <svg width="40" height="40" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="25" fill="black"></circle>
                  <path d="M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" fill="white"></path>
                </svg>
              </a>
              
              {/* Instagram Icon */}
              <a href="#" aria-label="Instagram">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                  <rect width="100" height="100" rx="50" fill="white"></rect>
                  <path d="M49.5935 59.3496C54.5326 59.3496 58.5366 55.3456 58.5366 50.4065C58.5366 45.4674 54.5326 41.4634 49.5935 41.4634C44.6544 41.4634 40.6504 45.4674 40.6504 50.4065C40.6504 55.3456 44.6544 59.3496 49.5935 59.3496Z" fill="#1F1F1F"></path>
                  <path d="M60.7724 28.4553H38.4146C35.1626 28.4553 32.3171 29.4716 30.4878 31.3008C28.6585 33.1301 27.6423 35.9756 27.6423 39.2276V61.5854C27.6423 64.8374 28.6585 67.6829 30.6911 69.7155C32.7236 71.5447 35.3659 72.561 38.6179 72.561H60.7724C64.0244 72.561 66.8699 71.5447 68.6992 69.7155C70.7317 67.8862 71.748 65.0407 71.748 61.7886V39.4309C71.748 36.1789 70.7317 33.5366 68.9024 31.5041C66.8699 29.4716 64.2276 28.4553 60.7724 28.4553ZM49.5935 64.2276C41.8699 64.2276 35.7724 57.9268 35.7724 50.4065C35.7724 42.6829 42.0732 36.5854 49.5935 36.5854C57.1138 36.5854 63.6179 42.6829 63.6179 50.4065C63.6179 58.1301 57.3171 64.2276 49.5935 64.2276ZM64.0244 39.2276C62.1951 39.2276 60.7724 37.8049 60.7724 35.9756C60.7724 34.1463 62.1951 32.7236 64.0244 32.7236C65.8537 32.7236 67.2764 34.1463 67.2764 35.9756C67.2764 37.8049 65.8537 39.2276 64.0244 39.2276Z" fill="#1F1F1F"></path>
                  <path d="M50 0C22.3577 0 0 22.3577 0 50C0 77.6423 22.3577 100 50 100C77.6423 100 100 77.6423 100 50C100.203 22.3577 77.6423 0 50 0ZM76.626 61.7886C76.626 66.4634 75 70.5285 72.1545 73.374C69.3089 76.2195 65.2439 77.6423 60.7724 77.6423H38.6179C34.1463 77.6423 30.0813 76.2195 27.2358 73.374C24.187 70.5285 22.7642 66.4634 22.7642 61.7886V39.4309C22.7642 30.0813 29.065 23.5772 38.6179 23.5772H60.9756C65.6504 23.5772 69.5122 25.2033 72.3577 28.0488C75.2032 30.8943 76.626 34.7561 76.626 39.4309V61.7886V61.7886Z" fill="#1F1F1F"></path>
                </svg>
              </a>
              
              {/* LinkedIn Icon */}
              <a href="#" aria-label="LinkedIn">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                  <rect width="100" height="100" rx="50" fill="#1F1F1F"></rect>
                  <path d="M38.5 37.5H28V72H38.5V37.5Z" fill="white"></path>
                  <path d="M64.0045 37.5C58 37.5 56.335 39.468 55 42V37.5H44.5V72H55V52.5C55 49.5 55 46.5 60.25 46.5C65.5 46.5 65.5 49.5 65.5 52.5V72H76V52.5C76 43.5 74.5 37.5 64.0045 37.5Z" fill="white"></path>
                  <path d="M33.25 34.5C36.1495 34.5 38.5 32.1495 38.5 29.25C38.5 26.3505 36.1495 24 33.25 24C30.3505 24 28 26.3505 28 29.25C28 32.1495 30.3505 34.5 33.25 34.5Z" fill="white"></path>
                </svg>
              </a>
              
              {/* YouTube Icon */}
              <a href="#" aria-label="YouTube">
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                  <rect width="100" height="100" rx="50" fill="white"></rect>
                  <path d="M79.12 30.57a5.97 5.97 0 0 0-4.21-4.21C69.44 25 50 25 50 25s-19.44 0-24.91 1.36a5.97 5.97 0 0 0-4.21 4.21C20 36.04 20 50 20 50s0 13.96 1.36 19.43a5.97 5.97 0 0 0 4.21 4.21C30.56 75 50 75 50 75s19.44 0 24.91-1.36a5.97 5.97 0 0 0 4.21-4.21C80 63.96 80 50 80 50s0-13.96-1.36-19.43z" fill="#1F1F1F"/>
                  <path d="M42 60.57L58 50 42 39.43v21.14z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="disclaimer">
        "Blinkit" is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to "GROFFR.COM" which is a real estate services business operated by "Redstone Consultancy Services Private Limited".
      </div>

      <style jsx>{`
        .footer-container {
          background-color: #f8f8f8;
          padding: 2rem;
          margin-top: auto;
        }
        
        .footer-links-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-heading {
          font-weight: bold;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        
        .footer-heading-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .see-all-link {
          color: #0070f3;
          text-decoration: none;
          font-size: 0.9rem;
        }
        
        .footer-columns {
          display: flex;
          gap: 2rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-column {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-link-list li {
          margin-bottom: 0.5rem;
        }
        
        .footer-link-list a {
          color: #333;
          text-decoration: none;
          font-size: 0.9rem;
        }
        
        .footer-link-list a:hover {
          text-decoration: underline;
        }
        
        .footer-categories-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 0.5rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-categories-list li {
          margin-bottom: 0.5rem;
        }
        
        .footer-categories-list a {
          color: #333;
          text-decoration: none;
          font-size: 0.9rem;
        }
        
        .footer-categories-list a:hover {
          text-decoration: underline;
        }
        
        .footer-bottom {
          border-top: 1px solid #ddd;
          padding-top: 1.5rem;
        }
        
        .footer-bottom-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .copyright {
          color: #666;
          font-size: 0.9rem;
        }
        
        .download-section {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .download-text {
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        
        .download-buttons {
          display: flex;
          gap: 1rem;
        }
        
        .app-download-btn {
          border-radius: 0;
          object-fit: fill;
          cursor: pointer;
        }
        
        .social-section {
          display: flex;
          justify-content: center;
        }
        
        .social-icons {
          display: flex;
          gap: 1rem;
        }
        
        .social-icons a {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .disclaimer {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid #ddd;
          font-size: 0.8rem;
          color: #666;
          text-align: center;
        }
        
        @media (max-width: 768px) {
          .footer-links-grid {
            grid-template-columns: 1fr;
          }
          
          .footer-bottom-grid {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .footer-columns {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </footer> 
        </div>
    
  );
};

// Categories data
const categories = [
  { name: "Vegetables & Fruits", href: "/cn/fresh-vegetables/cid/1487/1489" },
  { name: "Dairy & Breakfast", href: "/cn/milk/cid/14/922" },
  { name: "Munchies", href: "/cn/chips-crisps/cid/1237/940" },
  { name: "Cold Drinks & Juices", href: "/cn/beverages-gift-packs/cid/332/1323" },
  { name: "Instant & Frozen Food", href: "/cn/noodles/cid/15/962" },
  { name: "Tea, Coffee & Health Drinks", href: "/cn/tea/cid/12/957" },
  { name: "Bakery & Biscuits", href: "/cn/biscuit-gift-pack/cid/888/2380" },
  { name: "Sweet Tooth", href: "/cn/indian-sweets/cid/9/943" },
  { name: "Atta, Rice & Dal", href: "/cn/atta/cid/16/1165" },
  { name: "Dry Fruits, Masala & Oil", href: "/cn/oil/cid/1557/917" },
  { name: "Sauces & Spreads", href: "/cn/tomato-chilli-ketchup/cid/972/277" },
  { name: "Chicken, Meat & Fish", href: "/cn/fresh-meat/cid/4/1201" },
  { name: "Paan Corner", href: "/cn/cigarettes/cid/229/1948" },
  { name: "Organic & Premium", href: "/cn/oil-ghee/cid/175/799" },
  { name: "Baby Care", href: "/cn/diapers-more/cid/7/1000" },
  { name: "Pharma & Wellness", href: "/cn/sexual-wellness/cid/287/741" },
  { name: "Cleaning Essentials", href: "/cn/fabric-conditioner-additives/cid/18/985" },
  { name: "Home & Office", href: "/cn/kitchen-dining-needs/cid/1379/1052" },
  { name: "Personal Care", href: "/cn/face-body-moisturizers/cid/163/690" },
  { name: "Ice Creams & Frozen Desserts", href: "/cn/sticks/cid/1969/263" },
  { name: "Pet Care", href: "/cn/accessories-other-supplies/cid/5/3609" },
  { name: "Beauty & Cosmetics", href: "/cn/body-skin-care/cid/13/206" },
  { name: "Fashion & Accessories", href: "/cn/bags/cid/5305/120" },
  { name: "Magazines", href: "/cn/current-affairs-business/cid/851/1015" },
  { name: "Kitchen & Dining", href: "/cn/barware/cid/8058/8060" },
  { name: "Electronics & Electricals", href: "/cn/appliances/cid/5159/1886" },
  { name: "Stationery Needs", href: "/cn/arts-crafts/cid/5515/5516" },
  { name: "Books", href: "/cn/childrens-books/cid/1559/273" },
  { name: "Toys & Games", href: "/cn/action-figures/cid/675/397" },
  { name: "Print Store", href: "/print" },
  { name: "E-Gift Cards", href: "/cn/e-cards/cid/416/4301" },
  { name: "Rakhi Gifts", href: "/dc/?collection_uuid=4981b5da-20ea-439a-bd29-4a13e3b59f82" }
];

export default Footer;